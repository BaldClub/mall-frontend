
<script setup lang="ts">
import { ref } from "@vue/reactivity";

const name = ref({
  firstName: "",
  lastName: "",
});

const email = ref({
  email: "",
});

const password = ref({
  CurrentPassword: "",
  newPassword: "",
});

const confirmPassword = ref()

function submit() {

}
</script>

<template>
  <div>
    <p class="text-2xl font-bold py-4">ADD NEW ADDRESS</p>
    <div class="border-b-2 text-gray-400 text-lg py-2">CONTACE INFORMATION</div>
      <div>
        <p class="text-lg mt-2 pb-3 text-black">First Name</p>
        <el-input v-model="name.firstName" placeholder="Please input Fist Name" class="md:w-full" />
        <p class="text-lg mt-2 pb-3 text-black">Last Name</p>
        <el-input v-model="name.lastName" placeholder="Please input Last Name" class="md:w-full" />

        <div>
          <button class="text-lg bg-red-600  text-gray-50 py-1 px-5 mt-3 hover:bg-red-700">
            SAVE
          </button>
        </div>
      </div>
      <div class="border-b-2 text-black text-2xl py-4">CHANGE EMAIL AND PASSWORD</div>
      <div>
        <p class="text-lg mt-2 pb-3 text-black">Email</p>
        <el-input v-model="email.email" placeholder="Please input Fist Name" class="md:w-full" />
       
        <div>
          <button class="text-lg bg-red-600  text-gray-50 py-1 px-5 mt-3 hover:bg-red-700">
            SAVE
          </button>
        </div>
      </div>

      <div class="border-b-2 text-black text-2xl py-4">CHANGE PASSWORD</div>
      <div class="pb-5">
        <p class="text-lg mt-2 pb-3 text-black">Current Password</p>
        <el-input v-model="password.CurrentPassword" class="md:w-full" />
        <p class="text-lg mt-2 pb-3 text-black">New Password</p>
        <el-input v-model="password.newPassword" class="md:w-full" />
        <p class="text-lg mt-2 pb-3 text-black">Confirm Password</p>
        <el-input v-model="confirmPassword" class="md:w-full" />
       
        <div>
          <button class="text-lg bg-red-600  text-gray-50 py-1 px-5 mt-3 hover:bg-red-700">
            SAVE
          </button>   
        </div>
      </div>
      
  </div>
</template>

<style scoped>
</style>
