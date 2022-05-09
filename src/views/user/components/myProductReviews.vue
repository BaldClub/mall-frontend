
<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/solid";
</script>


<template>
  <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">MY PRODUCT REVIEWS</h1>
  <hr class="border-t-4" />
  <div class="flex">
    <div class="border"></div>
    <div>
      <p class="name">name</p>
      <div class="xin">
        <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
        <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
        <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
        <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
        <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
      </div>
    </div>
    <p class="name2">SKU:LTG-001</p>
  </div>
  <p class="name3">嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</p>
  <hr class="border-t-4" />
</template>

<style scoped>
.border {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50px;
  margin-top: 20px;
}
.name {
  margin-top: 20px;
  margin-left: 10px;
}
.name2 {
  margin-top: 25px;
  margin-left: 10px;
}
.xin {
  margin-bottom: 10px;
  margin-left: 5px;
}
.name3 {
  margin-left: 50px;
}
</style>
