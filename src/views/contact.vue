
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import constData from "../static/constData";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "",
  content: "",
});

function submit(){

  let check = true;
  Array.from(Object.keys(form.value)).forEach((item) => {
    if (form.value[item] === "") {
      check = false;
    }    
  });
  if(!check){
    ElMessage.error("Please fill in the form");
    return;
  }
  axios({
    method: "POST",
    url: constData.url + "/system/leave/save",
    data: form.value,
  })
    .then((res) => {
      console.log(res);
      if (res.data.code === 200) {
          ElMessage.success("success");
          router.push("/login");
      } else {
          ElMessage.error(res.data.msg);
      }
    })
    .catch((err) => {
      ElMessage.error('留言异常，请重试');
      console.log(err);
    });
}

</script>


<template>
  <div class="w-1/2 mx-auto my-4">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      CONTACT US
    </h1>
    <hr class="border-t-4" />
    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">First Name*</p>
    <el-input
      v-model="form.firstName"
      placeholder="Please input Fist Name"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Last Name*</p>
    <el-input
      v-model="form.lastName"
      placeholder="Please input Last Name"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Email*</p>
    <el-input
      v-model="form.email"
      placeholder="Please input Email"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Phone*</p>
    <el-input
      v-model="form.phone"
      placeholder="Please input Phone"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Topic*</p>
    <el-input
      v-model="form.topic"
      placeholder="Please input Topic"
      class="md:w-full"
    />

     <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">What's on you mind*</p>
    <el-input
     type="textarea"
      v-model="form.content"
      placeholder="Please input you mind"
      class="md:w-full"
    />
    <div class="">
      <el-button type="danger" class=" px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2" @click="submit">SUBMIT</el-button>
      <!-- <button class=" px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2">SUBMIT</button> -->
    </div>
  </div>
</template>

<style scoped>
</style>
