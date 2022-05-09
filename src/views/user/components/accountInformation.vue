
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router"; 
const router = useRouter();
const password = ref(HTMLInputElement)
const confirmPassword = ref(HTMLInputElement)

const state = ref(false)

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const  confirmPasswordValue =  ref("");

const checkbox = ref({
    showpassword: false,
    signup: false,
});

// function checkType(){
//     console.log(password.value.type);
//     if(state.value){
//         password.value.type = "text"
//         confirmPassword.value.type = "text"
//     }else{
//         confirmPassword.value.type = "password" 
//         password.value.type = "password"
//     }

// }

function checkEmail(){
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return !reg.test(form.value.email);
}

</script>


<template>
  <div class="mx-auto my-4">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      EDIT ACCOUNT INFORMATION
    </h1>
    <p class="py-6 ">
        ACCOUNT INFORMATION
    </p>
     <hr class="border-t-4" />
    <el-form :model="form">
      <p class="text-lg mt-2 pb-3 text-gray-400">First Name</p>
      <el-input
        v-model="form.firstName"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">Last Name</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
    </el-form>
    <button class="px-3 py-2 hover:bg-red-600  bg-red-500 m-2">
      SAVE
    </button>
    <p class="py-6 " style="padding-top:50px">
        CHANGE EMAIL AND PASSWORD
    </p>
     <hr class="border-t-4" />
    <el-form :model="form">
      <p class="text-lg mt-2 pb-3 text-gray-400">Email</p>
      <el-input
        v-model="form.firstName"
        class="md:w-full"
      />
    </el-form>
    <button class="px-3 py-2 hover:bg-red-600  bg-red-500 m-2">
      SAVE
    </button>
    <p class="py-6 ">
        CHANGE PASSWORD
    </p>
     <hr class="border-t-4" />
    
    <el-form :model="form">
      <p class="text-lg mt-2 pb-3 text-gray-400">Current Password</p>
      <el-input
        v-model="form.firstName"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">New Password</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
    </el-form>
    <p class="text-lg mt-2 pb-3 text-gray-400">Confirm New Password</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
    <button class="px-3 py-2 hover:bg-red-600  bg-red-500 m-2">
      SAVE
    </button>
  </div>
</template>

<style scoped>
</style>
