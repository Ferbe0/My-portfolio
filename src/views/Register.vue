

<template>

<router-link to="/landing" class="btn btn-light position-absolute back-button ">Back</router-link>

    <div class="container w-50 wrapper register-box">
    
        <div class="text-center my-4">
                <h2>REGISTER</h2>
         </div>
        
        <div class="form-group">
            <label for="exampleInputEmail1" class="mb-3">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
            
        </div>
        <div class="form-group mb-3">
            <label for="exampleInputPassword1" class="my-3">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
        </div>
        
        <button type="submit" @click="register" class="btn btn-primary w-100">REGISTER</button>
        <div class="text-center mt-3">
            <router-link to="/login" class="text-center text-decoration-none text-secondary" >Already have an account? Login Now</router-link>
        </div>
        
    </div>
    
    </template>
    
    <script setup>
        import {ref} from "vue";
        import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
        import {useRouter} from 'vue-router';
    import router from "@/router";
        const email = ref("");
        const password = ref("");
        const register = () => {
            createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully Registered!");
                router.push('/todo');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
        };
    </script>
    
    <style>
    
    button{
                height: 48px;
                letter-spacing: 2px;
                font-weight: bold;
            }
            input{
                height:46px; 
            }
            .wrapper{
                margin-top: 50px;
                background: white;
                padding: 35px 55px;
            }

            .register-box{
    background: white;  
    padding: 30px 20px;
    margin-top: 45px;
}
    
    </style>