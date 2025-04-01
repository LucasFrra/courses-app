<template>
    <div class="register-view">
        <h1>Register</h1>
        <form @submit.prevent="handleRegister">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="form.username" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="form.password" required />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterView",
    data() {
        return {
            form: {
                username: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        handleRegister() {
            console.log("Form submitted:", this.form);
            // Add your registration logic here
        },
    },
};
</script>

<style scoped>
.register-view {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.register-view h1 {
    text-align: center;
    margin-bottom: 20px;
}

.register-view form div {
    margin-bottom: 15px;
}

.register-view label {
    display: block;
    margin-bottom: 5px;
}

.register-view input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.register-view button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.register-view button:hover {
    background-color: #0056b3;
}
</style>