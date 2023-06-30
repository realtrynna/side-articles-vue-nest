<script setup lang="ts">
import { storeToRefs } from "pinia";

import Header from "@/components/common/Header.vue";
import Content from "@/components/common/Content.vue";
import Register from "@/components/Register.vue";

import { useUserStore } from "@/stores/user.ts";

const userStore = useUserStore();
</script>

<template>
  <Header/>
  <Content v-if="!userStore.isSignIn && !userStore.isSignUp"/>
  <Register v-if="userStore.isSignIn || userStore.isSignUp"/>
</template>