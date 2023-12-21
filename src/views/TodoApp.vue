<script setup>
import Todo from '../components/Todo.vue';

import {onMounted, ref} from "vue";

const isLoggedIn = ref(false);
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from '@/router';

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedIn.value = true;
        }
        else{
            isLoggedIn.value = false;
        }
    })
})

const handleSignOut = () => {

    signOut(auth).then(() => {
        router.push("/login");
    })

}

</script>

<template>

    <Todo />
    <div class="position-absolute" style="top: 0; margin: 20px 35px;">
    <button class="btn btn-light fw-bold" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </div>

</template>

<style>



</style>