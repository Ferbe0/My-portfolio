

<template>

<router-link to="/landing" class="btn btn-light position-absolute back-button ">Back</router-link>

    <div class="container w-50 wrapper login-box">

        <div class="text-center my-4">
            <h2>LOGIN</h2>
        </div>

        <div class="alert alert-danger" v-if="errMsg">
            <p >{{ errMsg }}</p>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1" class="mb-3">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
            
        </div>
        <div class="form-group mb-3" >
            <label for="exampleInputPassword1" class="my-3">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
        </div>
        
        <button type="submit" @click="login" class="btn btn-primary w-100" >LOGIN</button>

        <div class="text-center mt-3">
            <router-link to="/register" class="text-center text-decoration-none text-secondary" >Don't have an account? Register now</router-link>
        </div>
        
    </div>
    
    </template>
    
    <script setup>
        import {onMounted, ref} from "vue";
        import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
        import {useRouter} from 'vue-router';
    import router from "@/router";
        const email = ref("");
        const password = ref("");
        const errMsg = ref("")
        const login = () => {
            signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Successfully Signed In!");
                router.push('/todo');
            })
            .catch((error) => {
                switch(error.code){
                case "auth/invalid-email":
                    errMsg.value = "Invalid Email";
                break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect Password";
                break;
                default:
                    errMsg.value = "Email or Password was Incorrect";
                }

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
            border: 1px solid black;
            padding: 35px 55px;
        }

        .login-box{
    background: white;  
    padding: 30px 20px;
    margin-top: 45px;
}
    </style>