import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
    const isLoggedIn = ref<boolean>(false);
    const isSignIn = ref<boolean>(false);
    const isSignUp = ref<boolean>(false);

    return {
        isLoggedIn,
        isSignIn,
        isSignUp
    }
})
