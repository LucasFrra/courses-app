<template>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 class="text-2xl font-bold text-purple-700">Inscription</h1>
  
      <form @submit.prevent="register" class="flex flex-col gap-2 w-64">
        <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded" />
        <input v-model="password" type="password" placeholder="Mot de passe" class="p-2 border rounded" />
        <input v-model="passwordConfirmation" type="password" placeholder="Confirmer le mot de passe" class="p-2 border rounded" />
        <button class="bg-purple-600 text-white p-2 rounded">S'inscrire</button>
      </form>
  
      <p v-if="user">Bienvenue, {{ user.email }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const passwordConfirmation = ref('')
  const user = ref(null)
  
  const register = async () => {
    await fetch('http://localhost:8000/sanctum/csrf-cookie', {
      credentials: 'include',
    })
  
    const res = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value,
      }),
    })
  
    console.log("🚀 ~ register ~ res:", res)
  
    const data = await res.json()
  
    if (res.ok) {
      user.value = data.user
    } else {
      alert(data.message || Object.values(data.errors || {}).flat().join('\n'))
    }
  }
  </script>
  
  <style scoped>
  </style>
    