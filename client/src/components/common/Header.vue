<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user.ts";

const userStore = useUserStore();

const { isSignIn, isSignUp } = storeToRefs(useUserStore());

const handleIsSignIn = () => {
  if (isSignUp.value) isSignUp.value = false;
  isSignIn.value = true;
}
const handleIsSignUp = () => {
  if (isSignIn.value) isSignIn.value = false;
  isSignUp.value = true;
}
</script>

<template>
  <div class="header-blue">
    <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
      <div class="container-fluid"><a class="navbar-brand" href="/">LOOCALHOST</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
<!--          <ul class="nav navbar-nav">-->
<!--            <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact</a></li>-->
<!--          </ul>-->
<!--          <form class="form-inline mr-auto" target="_self">-->
<!--            <div class="form-group"><label for="search-field"><i class="fa fa-search text-white"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"></div>-->
<!--          </form>-->
          <span v-if="!useUserStore.isLoggedIn" class="navbar-text">
              <a @click="handleIsSignIn" class="login">Sign In</a>
              <a @click="handleIsSignUp" class="btn btn-light action-button">Sign Up</a>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>