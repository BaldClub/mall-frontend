
<script setup lang="ts">
import { ref } from "@vue/reactivity";

const firstName = ref("");

const LastName = ref("");

const email = ref("");

const phone = ref("");

const topic = ref("");

const mind = ref("");
</script>


<template>
  <div class="w-1/2 mx-auto my-4">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">
      CONTACT US
    </h1>
    <hr class="border-t-4" />
    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">First Name*</p>
    <el-input
      v-model="firstName"
      placeholder="Please input Fist Name"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Last Name*</p>
    <el-input
      v-model="LastName"
      placeholder="Please input Last Name"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Email*</p>
    <el-input
      v-model="email"
      placeholder="Please input Email"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Phone*</p>
    <el-input
      v-model="phone"
      placeholder="Please input Phone"
      class="md:w-full"
    />

    <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">Topic*</p>
    <el-input
      v-model="topic"
      placeholder="Please input Topic"
      class="md:w-full"
    />

     <p class="md:text-xl text-xl mt-6 font-black text-gray-600 ">What's on you mind*</p>
    <el-input
     type="textarea"
      v-model="mind"
      placeholder="Please input you mind"
      class="md:w-full"
    />
    <div class="">
      <el-button type="danger" class=" px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2">SUBMIT</el-button>
      <!-- <button class=" px-3 py-2 hover:bg-red-600 float-right bg-red-500 m-2">SUBMIT</button> -->
    </div>
  </div>
</template>

<style scoped>
</style>