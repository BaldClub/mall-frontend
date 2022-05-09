
<script setup lang="ts">
import { ref } from "@vue/reactivity";

const form = ref({
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  country: "",
});

function submit() {
  console.log(JSON.stringify(form.value));
}
</script>

<template>
  <div>
    <p class="text-2xl font-bold py-4">ADD NEW ADDRESS</p>
    <div class="border-b-2 text-gray-400 text-lg py-2">CONTACE INFORMATION</div>
    <el-form :model="form">
      <p class="text-lg mt-2 pb-3 text-black">First Name</p>
      <el-input v-model="form.firstName" placeholder="Please input Fist Name" class="md:w-full" />
      <p class="text-lg mt-2 pb-3 text-black">Last Name</p>
      <el-input v-model="form.lastName" placeholder="Please input Last Name" class="md:w-full" />
      <p class="text-lg mt-2 pb-3 text-black">Company</p>
      <el-input v-model="form.company" placeholder="Please input company" class="md:w-full" />
      <p class="text-lg mt-2 pb-3 text-black">Phone Number</p>
      <el-input v-model="form.phone" placeholder="Please input phone" class="md:w-full" />
      <div class="border-b-2 text-black text-xl font-semibold py-4">ADDRESS</div>
      <p class="text-lg mt-2 pb-3 text-black">Street Address</p>
      <el-input
        v-model="form.streetAddress"
        placeholder="Please input confirm streetAddress"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-black">City</p>
      <el-input v-model="form.city" placeholder="Please input confirm city" class="md:w-full" />
      <p class="text-lg mt-2 pb-3 text-black">State/Province</p>
      <el-input
        v-model="form.state"
        placeholder="Please input confirm State/Province"
        class="md:w-full"
      />
      <p class="text-lg mt-2 pb-3 text-black">Zip/Postal Code</p>
      <el-input v-model="form.zip" class="md:w-full" />
      <p class="text-lg mt-2 pb-3 text-black">Country</p>
      <el-input v-model="form.country" class="md:w-full" />
      <button
        class="text-2xl bg-red-600 p-3 text-gray-50 px-14 mt-3 hover:bg-red-700"
        @click="submit"
      >Save</button>
    </el-form>
  </div>
</template>

<style scoped>
</style>
