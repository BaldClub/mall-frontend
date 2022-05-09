<template>
  <div class="w-2/3 mx-auto grid grid-cols-1">
    <div class="mx-auto w-full">
      <img src="@/assets/img/eclub页面.png" class="w-full" alt />
    </div>

    <div class="mx-auto py-5">
      <img src="@/assets/img/商标r.png" class="w-2/3 mx-auto" alt />
    </div>
    <div class="py-3 lg:w-4/5 w-full mx-auto">
      <div class="text-2xl py-4 font-bold">Join our Email Club and SAVE!</div>
      <div class="flex">
        <p class="text-2xl text-gray-500">
          <span class="text-2xl text-black font-bold pr-2">WHAT:</span>Our Email Club is a mail list of woodworkers who receive periodic notification of exciting new tools and special offers.
        </p>
      </div>
      <div class="flex py-4">
        <p class="text-2xl text-gray-500">
          <span class="text-2xl text-black font-bold pr-2">WHY:</span>
          Email is the most efficient way for us to communicate with our customers. Although we do include a printed catalog with shipments, we no longer routinely mail out printed catalogs. It's too expensive and wastes trees. Emails don't consume any paper, don't require much energy to deliver and can instantly be deleted with one button, without contributing to a land fill.
        </p>
      </div>
      <div class="flex py-4">
        <p class="text-2xl text-gray-500">
          <span class="text-2xl text-black font-bold pr-2">WHEN:</span>
          It depends on time of year and whether or not a new tool is being rolled out. Most weeks we only send out two emails, occasionally there'll be a third.
          Please enter your email address and choose your preferred message format below, and when you are done press Subscribe.
        </p>
      </div>
      <div class="flex py-4">
        <p
          class="text-2xl text-gray-500"
        >Please enter your email address and choose your preferred message format below, and when you are done press Subscribe.</p>
      </div>
      <div>
        <div class="flex rounded-xl px-3 mt-5 py-2 w-56 bg-gray-300">
          <div class="flex-3">
            <img src="../../assets/img/Mail-01-256.png" class="w-10" alt />
          </div>
          <div class="flex-8">
            <input type="text" class="bg-transparent my-auto" />
          </div>
        </div>
        <button class="py-1 my-2 px-5 rounded-lg  bg-red-500">SUBSCRIBE</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "@vue/reactivity";

const num = ref(1);
const imgs = reactive([
  "/src/assets/img/line.png",
  "/src/assets/img/line.png",
  "/src/assets/img/line.png",
  "/src/assets/img/line.png",
  "/src/assets/img/line.png",
]);
</script>
<style scoped>
.img {
  margin: 0 auto;
  height: 455px;
}
.imgs {
  margin: 0 auto;
  height: 155px;
}
.pad {
  padding-left: 25%;
}
</style>
