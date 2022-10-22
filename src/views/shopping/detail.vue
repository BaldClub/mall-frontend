<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import constData from "../../static/constData";
import { ElMessage } from "element-plus";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const num = ref(1);
const data = ref();
const img = ref();
const show = ref(0);
const user=ref()

onBeforeMount(() => {
  const id = window.localStorage.getItem("productId");
  console.log(id);

  axios({
    method: "get",
    url: constData.url + "/system/product/getProduct/" + id,
  })
    .then((res) => {
      console.log(res.data.data);
      
      data.value = res.data.data;
      img.value =
        constData.url +
        "/static/" +
        data.value.image +
        "/" +
        data.value.imgList[0];
    })
    .catch((err) => {
      ElMessage.error("Data error, please try again!");
      router.push("/");
    });

  axios({
    method: "get",
    url:
      constData.url + "/system/comments/data?page=1&limit=10&productId=" + id,
  })
    .then((res) => {
      user.value = res.data.data;
      console.log(user.value);
    })
    .catch((err) => {
    });
});

function changeImg(item) {
  img.value = constData.url + "/static/" + data.value.image + "/" + item;
}
</script>
<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 w-5/6 mx-auto mt-3">
    <div class="col-span-1 mx-auto" style="width:500px">
      <div class="mx-auto">
        <img class="border-2 w-full" :src="img" />
      </div>
      <div class="w-2/3 flex flex-wrap mx-auto" style="width:500px">
        <div
          class="w-1/5 m-2 border-2 cursor-pointer"
          v-for="(item, index) in data.imgList"
          :key="index"
          @click="changeImg(item)"
        >
          <img :src="constData.url + '/static/' + data.image + '/'  + data.imgList[index] " />
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <h1 class="md:text-3xl text-gl font-black">{{ data.name }}</h1>
      <p class="font-black md:text-2xl text-base">sku: {{ data.sku }}</p>
      <div class="flex">
        <StarIcon class="w-6 h-6 block text-yellow-300" />
        <StarIcon class="w-6 h-6 block text-yellow-300" />
        <StarIcon class="w-6 h-6 block text-yellow-300" />
        <StarIcon class="w-6 h-6 block text-yellow-300" />
        <StarIcon class="w-6 h-6 block text-yellow-300" />
        <p class="ml-2">33review</p>
        <div class="w-36"></div>
        <button
          class="text-red-400 h-8 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <img class="w-6" src="../../assets/img/share-RED.png" />
          share
        </button>
      </div>
      <div class="w-auto" v-if="data.videoUrl" v-html="data.videoUrl">
      </div>
      <!-- <div class="w-auto" v-else>
         <iframe width="100%" height="400" src="https://www.youtube.com/embed/wUT3B-wvNis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> -->
      <p class="font-black text-xl m-2">
        US
        <span class="text-red-600 text-3xl">${{ data.price }}</span> &nbsp;&nbsp;Free Shipping In The US
      </p>
      <div class="my-6">
        <span class="text-xl mr-5">Number:</span>
        <el-input-number v-model="num" :min="1" :step="1" :size="1" />
      </div>
      <div class="w-auto">
        <a :href="data.href">
          <button class="md:w-1/3 w-auto p-1 md:p-4 hover:bg-gray-300 border-2 rounded-xl">Amazon To Buy</button>
        </a>
      </div>
      <div class="w-auto">
        <button
          class="md:w-1/3 md:p-4 mt-2 w-auto p-1 border-2 hover:bg-gray-300 rounded-xl"
        >Add to Wish List</button>
      </div>
    </div>
  </div>
  <div class="w-5/6 mx-auto border-l-2 border-r-2 border-t-2">
    <div class="w-auto grid-cols-3 grid text-center p-5 gap-16 text-red-400">
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" :class="{'bg-gray-200': show===0}"  @click="show=0">DESCRIBE</div>
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" :class="{'bg-gray-200': show===1}" @click="show=1">FQA</div>
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" :class="{'bg-gray-200': show===2}" @click="show=2">REVIEW</div>
    </div>
    <div v-show="show===0" class="break-normal text-xl px-4 lg:px-48 pb-28 grid gap-y-7" v-html="data.describe">
      
    </div>
    <div v-show="show===1"  class=" break-normal text-xl px-4 lg:px-48 pb-28 grid gap-y-7" v-html="data.fqa">
      
      
    </div>
    <div v-show="show===2" class="break-normal text-xl px-4 lg:px-48 pb-5 grid gap-y-7">
      <div v-for="item in user" :key="item" class=" py-4">
        <div class="flex">
        <div class="border"></div>
        <div class="pl-5">
          <p class="name text-gray-500">{{item.username}}</p>
          <div class="xin">
            <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
            <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
            <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
            <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
            <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
          </div>
        </div>
      </div>
      <p class="name3 py-4">{{item.text}}</p>
      <hr class="border-t-4" />
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>
