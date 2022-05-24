
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
import constData from "../../static/constData";

const router = useRouter();

const form = ref({
  email: "",
  password: "",
});

onMounted(() => {
  if (localStorage.getItem("username") != null)  {
    // router.push("/");
    // ElMessage.success({
    //   message: "You are already logged in",
    //   duration: 1000
    // });
    localStorage.removeItem("username");
  }else{
    ElMessage.warning("Please login first");
    router.push("/login");
  }
});

const register = ()=>{
  router.push("/register")
}

const login = () => {
  if (form.value.email === "" || form.value.password === "") {
    ElMessage.error("Please enter your email and password");
    return;
  }
  axios({
    method: "POST",
    url: constData.url + "/system/user/login",
    data: form.value,
  })
    .then((res) => {
      window.localStorage.setItem("username", res.data.data.username);
      console.log(res);
      if (res.data.code === 200) {
          ElMessage.success("success");
          router.push("/");
      } else {
          ElMessage.error(res.data.msg);
      }
    })
    .catch((err) => {
      ElMessage.error('登录异常，请重试');
      console.log(err);
    });
  // router.push({
  //   path: "/index",
  // });
};
</script>


<template>
  <div class="w-5/6 mx-auto">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      COSTOMER LOGIN
    </h1>
    <hr class="border-t-4" />
    <div class="grid md:grid-cols-2 grid-cols-1">
      <div class="col-span-1 border-r-2 border-black">
        <h1 class="my-12 text-gray-600 font-black">NEW WERE</h1>
        <p class="text-gray-400">
          Regisration is free and easy! <br />
          Faster cheout <br />
          Save multiple shipping address <br />
          View and track orders and more
        </p>
        <button class="text-3xl bg-red-600 p-5 text-gray-50 px-16 mt-3" @click="register">
          Create Account
        </button>
      </div>
      <div class="col-span-1">
        <div class="w-5/6 mx-auto">
          <h1 class="mt-12 text-gray-600 font-black">ALREADY REGISTERED?</h1>
          <p class="text-gray-400">
            If you have accound with us, please log in.
          </p>
          <h1 class="text-gray-500 mt-3 font-bold text-gl">Email Address</h1>
          <el-form :model="form" label-width="120px">
            <el-input
              v-model="form.email"
              placeholder="Please input email"
              class="md:w-1/2 mt-3"
            />
            <h1 class="text-gray-500 mt-3 font-bold text-gl">Password</h1>
            <el-input
              v-model="form.password"
              placeholder="Please input password"
              class="md:w-1/2 mt-3"
              type="password"
            />
          </el-form>
          <br />
          <button
            class="
              text-2xl
              bg-red-600
              p-3
              text-gray-50
              px-14
              mt-3
              hover:bg-red-700
            "
            @click="login"
          >
            LOGIN
          </button>
          <p class="text-red-600 mt-2 cursor-pointer">Forgot Your Password?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
