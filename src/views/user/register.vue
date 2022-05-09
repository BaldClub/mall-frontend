
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router"; 
import constData from "../../static/constData";

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

function submit(){
    if(form.value.firstName === "" || form.value.lastName === "" || form.value.email === "" || form.value.password === "" || confirmPasswordValue.value === ""){
        ElMessage.error("Please enter your email and password");
        return;
    }
    if(form.value.password !== confirmPasswordValue.value){
        ElMessage.error("Password not match");
        return;
    }
    if(checkEmail()){
        ElMessage.error("Email is not valid");
        return;
    }
    console.log(JSON.stringify(form.value));
    axios({
        method:"POST",
        url: constData.url + "/system/user/save",
        data: form.value,
    })
    .then((res)=>{
        console.log(res);
        if(res.data.code === 200){
            ElMessage.success("success");
            router.push({
                path: "/login",
            });
            
        }else{
            ElMessage.success(res.data.msg);
        }
    })
    .catch((err)=>{
        ElMessage.success('注册异常，请重试');
        console.log(err);
    });
}
</script>


<template>
  <div class="w-1/2 mx-auto my-4">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      CREATE NEW CUSTOMER ACCONT
    </h1>
    <hr class="border-t-4" />
    <p class="py-6 text-gray-300">
        Please enter the following information to create your account.
    </p>
    <el-form :model="form">
      <p class="text-lg mt-2 pb-3 text-gray-400">First Name</p>
      <el-input
        v-model="form.firstName"
        placeholder="Please input Fist Name"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-gray-400">Last Name</p>
      <el-input
        v-model="form.lastName"
        placeholder="Please input Last Name"
        class="md:w-full"
      />
    <p class="text-2xl py-4">SIGN-IN INFORMATION</p>
      <hr class=" border-t-2"/>
        <p class="text-lg mt-2 pb-3 text-gray-400">Email</p>
      <el-input
        v-model="form.email"
        placeholder="Please input Email"
        class="md:w-full"
      />
        <p class="text-lg mt-2 pb-3 text-gray-400">Password</p>
      <el-input
        ref="password"
        v-model="form.password"
        placeholder="Please input password"
        class="md:w-full"
        type="password"
      />
        <p class="text-lg mt-2 pb-3 text-gray-400">Confirm Password</p>
      <el-input
        ref="confirmPassword"
        v-model="confirmPasswordValue"
        placeholder="Please input confirm password"
        class="md:w-full"
        type="password"
      />
    </el-form>
    <div class=" pt-3">
        <!-- <div>
            <input type="checkbox" class=" w-6 h-6" :v-model="checkbox.showpassword" @click="checkType">
            Show Password    
        </div> -->
        <div class="pl-4">
            <input type="checkbox" class=" w-6 h-6" :v-model="checkbox.signup">
            Sign Up for Newsletter    
        </div>
    </div>
    <button class="px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2" @click="submit">
      SUBMIT
    </button>
  </div>
</template>

<style scoped>
</style>