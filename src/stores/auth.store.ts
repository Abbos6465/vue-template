import {defineStore} from "pinia";
import type {Ref} from "vue";
import {ref} from "vue";

interface User {
    name?: string,
    age?: number,
    phone?: string
}

export const useAuthStore = defineStore('auth.store', () => {
    const isAuth:Ref<boolean> = ref(false);
    const isLoading:Ref<boolean> = ref(false);
    const user:Ref<User> = ref({});

    const signIn = (): void => {

    }

    const fetchUser = (): void => {

    }

    const clearUser = (): void => {

    }

    return {
        isAuth,
        isLoading,
        user,
        signIn,
        fetchUser,
        clearUser
    }
})
