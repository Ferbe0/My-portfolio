<script setup>
import Calculator from '../components/Calculator.vue'
</script>

<template>

    <router-link to="/landing" class="btn btn-light position-absolute back-button ">Back</router-link>

    <Calculator />

</template>

<style>
.back-button{
    top: 0;
    margin: 30px 50px;
    padding: 10px 35px;
}
</style>