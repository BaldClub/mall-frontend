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
      data.value = res.data.data;
      img.value = res.data.data.imgList;
      img.value =
        constData.url +
        "/static/" +
        data.value.image +
        "/" +
        data.value.imgList[0];
    })
    .catch((err) => {
      ElMessage.error("数据获取错误，请重试");
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
        <img class="border-2 w-full" :src="img" alt />
      </div>
      <div class="w-2/3 flex flex-wrap mx-auto" style="width:500px">
        <div
          class="w-1/5 m-2 border-2 cursor-pointer"
          v-for="(item, index) in data.imgList"
          :key="index"
          @click="changeImg(item)"
        >
          <img :src="constData.url + '/static/' + data.image + '/'  + data.imgList[index] " alt />
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <h1 class="md:text-3xl text-gl font-black">STAIR TREND TEMPLATE TOOL</h1>
      <p class="font-black md:text-2xl text-base">sku: LTGH-001</p>
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
          <img class="w-6" src="../../assets/img/share-RED.png" alt />
          share
        </button>
      </div>
      <div class="w-auto">
        <img src="../../assets/img/uTools_1647697823271.png" alt />
      </div>
      <p class="font-black text-xl m-2">
        US
        <span class="text-red-600 text-3xl">$98.9</span> &nbsp;&nbsp;Free Shipping In The US
      </p>
      <div class="my-6">
        <span class="text-xl">Number:</span>
        <el-input-number v-model="num" :min="1" :step="1" :size="1" />
      </div>
      <div class="w-auto">
        <button
          class="md:w-1/3 w-auto p-1 md:p-4 hover:bg-gray-300 border-2 rounded-xl"
        >Amazon To Buy</button>
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
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" @click="show=0">DESCRIBE</div>
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" @click="show=1">FQA</div>
      <div class="p-3 font-black hover:bg-gray-200 cursor-pointer" @click="show=2">REVIEW</div>
    </div>
    <div v-show="show===0" class="text-xl px-4 lg:px-28 pb-5 grid gap-y-7">
      <p>Adjustable range: 30.3 inches -48.2inches</p>
      <p>Suitable for cutting and measuring stair treads,risers,window sills, closet shelves and some angled layouts</p>
      <p>Aviation aluminium materials（7075 and 6061 Aluminum alloy),Anodized，resistant to wear and rust,sturdy and durable.After many tests, wooden tools will deform the screw holes after several times of use,it cannot be tightened.So we use the most reasonable Aluminum Alloy materials to ensure the accuracy and durability of the product.</p>
      <p>The tool has enough thickness to avoid scratching the step surface.Light and effortless,the card slot slides smoothly.Good grip,flexible angle adjustment.Cut precisely.Save installation time</p>
      <p>Patented product.As a professional staircase tool,the side panel installation of our product is very different from other products, it can stabilize angle, will not change the position easily, ensure high accuracy, and avoid wasting your plank and time.</p>
    </div>
    <div v-show="show===1" class="break-normal text-xl px-4 lg:px-48 pb-5 grid gap-y-7">
      <p>
        <span class="text-xl font-bold">Q:</span> you ship to new zealand?
      </p>
      <p>
        <span class="text-xl font-bold">A:</span>Yes we do ship to New Zealand. You can also look up Sig Tools; they stock our products there.
      </p>
      <p>
        <span class="text-xl font-bold">Q:</span>Do you ship to Canada?
      </p>
      <p>
        <span class="text-xl font-bold">A:</span>Yes we do ship to Canada.
      </p>
      <p>
        <span class="text-xl font-bold">Q:</span>If I order 1 does that mean 1 pair ? Or do I have to order 2
      </p>
      <p>
        <span class="text-xl font-bold">A:</span>If you order 1, you will receive a pair (2 jigs, with screws)
      </p>
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
