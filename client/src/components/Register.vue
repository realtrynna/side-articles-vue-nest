<script setup lang="ts">
import { onMounted } from "vue";

import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

import { useUserStore } from "@/stores/user.ts";

const userStore = useUserStore();
</script>

<template>
    <div class="container" id="container">
        <SignIn v-if="userStore.isSignIn" />
        <SignUp v-if="userStore.isSignUp" />
    </div>
</template>

<style scoped>
.container {
    margin-top: 50px;
}

.sign-up-h1 {
    margin-bottom: 20px;
    font-weight: bold;
    color: black;
}
</style>