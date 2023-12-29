<script setup>
import Calculator from '../components/Calculator.vue'
    
</script>

<template>

    <!--
    <div class="container d-flex justify-content-center">
        <div class="row">
            <div class="col-md-6">
                <div class="box1 mx-5">

                    <div class="container box1 rounded p-3 text-center">
                        <h1 class="text-white fw-bold">Web Designer</h1>
                        <p class="text-white">create and build websites and web pages by combining any
                            number of visual design elements including text, photos, graphics, animations and videos.</p>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6">
                <div class="box1 mx-5">

                    <div class="container box1 rounded p-3 text-center">
                        <h1 class="text-white fw-bold">Coder</h1>
                        <p class="text-white">write, modify, and test code and scripts that allow computer software and 
                            applications to function properly. They turn the designs
                             created by software developers and engineers into instructions that a computer can follow.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>-->

    <div class="container t1 d-flex justify-content-center">

        <div class="row">
            <div class="col-md-6 text-white">
                <p class="mt-5 mx-5">
                <h2>Hello there! <br>
                I'm Ferbe Marie S. Respuesto 👋 </h2><br>
                I'm a fourth-year college student starting to learn about programming,
                 interestingly diving into the worlds of coding. While my skills are in the beginner phase,
                  I'm on a journey to master the fundamentals of front-end development.
                   From crafting engaging user interfaces and front ends to understanding the
                    back ends and core principles of coding, I'm dedicated to expanding my knowledge
                     and creating meaningful projects. Join me on this learning adventure as i explore 
                     it's art, and strive to make a positive impact through technology and society. 🚀
                </p>
                
            </div>
            <div class="col-md-6 ">
                <div class="rounded-circle d-flex justify-content-center mx-5 " style="border: 6px solid white; width: 300px;">
                    <img src="../../public/ferbe.jpg" width="300px;" class="img-fluid rounded-circle mx-5">
                </div>
            </div>
            
            
        </div>
        
    </div>

    <div class="container wrapper1 d-flex text-center">

        <div class="links position-absolute">
        <router-link to="/project" class="text-dark button w-25 fw-bold text-white text-decoration-none">Calculator</router-link>
        <router-link to="/login" class="text-dark button w-25 fw-bold text-white text-decoration-none" style="margin-left: 30px;">Todo List</router-link>
        </div>
    </div>
    
    
    

</template>

<style>
    
    body{
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../../public/night.png');
        background-repeat: no-repeat;
        background-size: cover;
        
    }
    .box1{
        /*border: 1px solid white;*/
        width: 400px;
        
    }
    .wrapper1{
        margin-top: 60px;
    }
    .wrapper2{
        
    }
    .button{
    
        border: 1px solid white;
        padding: 20px 40px;
        margin-left: 150px;
    }
    .t1{
        margin-top: 200px;
    }
    .links{
        left: 0;
        margin-top: -80px;
    }
</style>