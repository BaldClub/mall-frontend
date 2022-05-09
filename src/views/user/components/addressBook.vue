
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router"; 
import country from "../../../static/country";

const router = useRouter();
const password = ref(HTMLInputElement)
const confirmPassword = ref(HTMLInputElement)

const state = ref(false)

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country:""
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
  <div class=" mx-auto my-4">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      ADD NEW ADDRESS
    </h1>
    <p class="py-6 ">
        CONTANCT INFORMATION
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
      <p class="text-lg mt-2 pb-3 text-gray-400">Company</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
        <p class="text-lg mt-2 pb-3 text-gray-400">Phone Number</p>
      <el-input
        ref="confirmPassword"
        v-model="confirmPasswordValue"
        class="md:w-full"
        type="password"
      />
      <p class="py-6 ">
        ADDRESS
    </p>
     <hr class="border-t-4" />
     <p class="py-6 ">
        Street Address
    </p>
    <el-input
        ref="confirmPassword"
        v-model="confirmPasswordValue"
        class="md:w-full pad"
        type="password"
      />
      <el-input
        ref="confirmPassword"
        v-model="confirmPasswordValue"
        class="md:w-full pad"
        type="password"
      />
      <el-input
        ref="confirmPassword"
        v-model="confirmPasswordValue"
        class="md:w-full pad"
        type="password"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">City</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">State/Province</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">Zip/Postal Code</p>
      <el-input
        v-model="form.lastName"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">Country</p>
      <el-select v-model="form.country" placeholder="please select your zone" class="md:w-full py-1">
        <el-option v-for="item in country" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form>
    <button class="px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2">
      SAVE
    </button>
  </div>
</template>

<style scoped>
.pad{
  padding-top: 10px;
}
</style>
