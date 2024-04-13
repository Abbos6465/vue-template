import {defineStore} from "pinia";
import {ref} from "vue";

interface User {
    name?: string,
    age?: number,
    phone?: string
}

export const useAuthStore = defineStore('auth.store', () => {
    const isAuth = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const user = ref<User>({});

    const signIn = (): void => {

    }

    const fetchUser = (): void => {

    }

    return {
        isAuth,
        isLoading,
        user,
        signIn,
        fetchUser
    }
})