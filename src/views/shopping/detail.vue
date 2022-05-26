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
      <div class="w-auto">
        <!-- <img src="../../assets/img/uTools_1647697823271.png" /> -->
         <!-- <video controls width="1427">

        <source src="https://youtu.be/P7Go56zU0cE" type="video/webm">

        <source src="https://youtu.be/P7Go56zU0cE" type="video/mp4">

        Sorry, your browser doesn't support embedded videos.
      </video> -->
         <iframe width="100%" height="400" src="https://www.youtube.com/embed/wUT3B-wvNis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </div>
      <p class="font-black text-xl m-2">
        US
        <span class="text-red-600 text-3xl">${{ data.price }}</span> &nbsp;&nbsp;Free Shipping In The US
      </p>
      <div class="my-6">
        <span class="text-xl">Number:</span>
        <el-input-number v-model="num" :min="1" :step="1" :size="1" />
      </div>
      <div class="w-auto">
        <a :href="data.type">
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
    <div v-show="show===0" class="break-normal text-xl px-4 lg:px-48 pb-28 grid gap-y-7">
      <p>Just four steps to cut a set of stair stringers:measure height,online calculate,draw lines,and cut,even non-professionals can make perfect stair stringers.</p>
      <p>Intelligent calculation of common stair construction board specifications (2x12,5/4x6,2x6,1x8,5/4x6),easy and flexible,and can be matched in various ways.</p>
      <p>The step run limits are 10" to 11-1/2" deep,The step rise limits are 5" to 7-3/4" tall.The online calculator gives you different variables to choose from to adjust the stairs to your needs.</p>
      <p>Anodized aluminum alloy material,sturdy and durable,the manual will guide the use in detail.</p>
      <p>This cutting layout tool complies with The International Residential Code (IRC) and the International Building Code (IBC) contain regarding wood-framed stair.</p>
    </div>
    <div v-show="show===1"  class=" break-normal text-xl px-4 lg:px-48 pb-28 grid gap-y-7">
      <p>
        <span class="text-xl font-bold">QUESTIONS & ANSWERS</span>
      </p>
      <p>
        <span class="text-xl font-bold">1.Can the product be shipped other than the US?</span>
      </p>
      <p>
        Yes, you can buy it, and all other regions outside the US can be shipped directly from Amazon's warehouses, but additional charges.
      </p>
      <p>
        <span class="text-xl font-bold">2.Why can not buy directly from the website?</span>
      </p>
      <p>
        At present, Amazon has the highest level of trust, and it can ensure the timeliness and safety of logistics.  
      </p>
      <p>
        <span class="text-xl font-bold">3.When will there be special offers?</span>
      </p>
      <p>
        At present, we are not ready to start selling specials. The specials are mainly for products with slight defects, such as oxidation problems, but do not affect normal use.
      </p>
      <p>
        <span class="text-xl font-bold">4.how to contact you?</span>
      </p>
      <p>
        If you need to contact us, you can leave a message or send an email to wjhappy337@gmail.com, or you can directly click on the social media page at the end of the page to contact us on social platforms (Facebook, Instagram, Pinterest, Youtube)
      </p>
       <p>
        <span class="text-xl font-bold">5.What should I do if I cannot understand the instructions?</span>
      </p>
      <p>
        You can find our product videos on youtube to learn:
        <a href="https:\\www.youtube.com/channel/UCq_dOTFWmH26YKu-vSk2s5g" class=" text-blue-500">
          www.youtube.com/channel/UCq_dOTFWmH26YKu-vSk2s5g
        </a>
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
