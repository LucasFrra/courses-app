<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Mot de passe" />
        <button>Se connecter</button>
      </form>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const login = async () => {
    await fetch('http://localhost:8000/sanctum/csrf-cookie', { 
      credentials: 'include' 
    })
  
    const res = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ 
        email: email.value, 
        password: password.value 
      }),
    })
  
    const data = await res.json()
    if (res.ok) {
      console.log('Connecté !', data)
      window.location.href = '/dashboard'
    } else {
      alert('Erreur')
    }
  }
  </script>
  