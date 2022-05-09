
<script setup>
</script>
<template>
  <div class="page-footer flex flex-wrap">
    <div class="flex-1 text-center py-14">
      <img src="../assets/img/商标r.png" class="image" alt />
      <h2 class="text-2xl my-2">ALL Rights Reserved, ©2022</h2>
      <p>1-424-307-9571</p>
      <div class="w-1/3 mx-auto text-left">
        <h3 class="text-2xl">Connect</h3>
        <div class="flex w-full">
          <div class="flex-1 px-2" @click="goface">
            <a href="https://www.facebook.com/BelaDomoHome/">
              <img src="../assets/img/facebook.png" alt />
            </a>
          </div>
          <div class="flex-1 px-2" @click="instagram">
            <a href="https://www.instagram.com/beladomohome/">
              <img src="../assets/img/instagram.png" alt />
            </a>
          </div>
          <div class="flex-1 px-2" @click="pinter">
            <a href="https://www.pinterest.com/beladomohome">
              <img src="../assets/img/pinterest.png" class="flex-1" alt />
            </a>
          </div>
          <div class="flex-1 px-2" @click="youtube">
            <a href="https://www.youtube.com/channel/UCq_dOTFWmH26YKu-vSk2s5g">
              <img src="../assets/img/youtube.png" class="flex-1" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex-1 md:text-left text-center py-4">
      <h1 class="py-2 pt-8 text-5xl font-mono">ECLUB SIGNUP</h1>
      <p class="break-all md:mx-0 mx-auto w-1/2">
        Join our FREE E-Club for news on
        our latest woodworking tools &
        accessories as well as specials.Stay
        informed on new Tools and more!
      </p>
      <div class="flex rounded-xl px-3 mt-5 md:mx-0 mx-auto py-2 w-56 bg-gray-300">
        <div class="flex-3">
          <img src="../assets/img/Mail-01-256.png" alt />
        </div>
        <div class="flex-8">
          <input type="text" class="bg-transparent my-auto" />
        </div>
      </div>
      <button class="my-3 px-3 bg-red-500">SUBSCRIBE</button>
    </div>
  </div>
</template>


<style scoped>
.page-footer {
  width: 100%;
  background-color: black;
  color: #ffffff;
  border-top: 3px solid #1976d2;
}
.image {
  width: 200px;
  margin: 0 auto;
}
</style>
