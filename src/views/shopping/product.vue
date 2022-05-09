
<script setup lang="ts">
import { ref } from "@vue/reactivity";

const date = ref([
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 98.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 93.4,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 94.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 97.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 99.0,
    name: "stair gauges for framing square",
  },
]);

const StairTool = ref([
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 98.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 93.4,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
]);

const StairTread = ref([
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 98.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 93.4,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
]);

const Woodworking = ref([
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 78.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 93.4,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
]);
const StairString = ref([
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 88.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 93.4,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
  {
    imgURL: "/assets/line.736aa76b.png",
    price: 92.0,
    name: "stair gauges for framing square",
  },
]);

function change(index){
    console.log(date.value)
    if(index==1)
        date.value = StairTool.value
    if(index==2)
        date.value = StairTread.value
    if(index==3)
        date.value = Woodworking.value
    if(index==4)
        date.value = StairString.value
}
</script>

<template>
  <div class="w-5/6 mx-auto">
    <div class="w-1/3 grid grid-cols-2">
      <div
        class="
          hover:bg-yellow-400
          cursor-pointer
          bg-yellow-300
          col-span-1
          border-2 border-black
          text-center
          p-2
          text-sm text-gray-500
        "
        @click="change(1)"
      >
        Stair Tool
      </div>
      <div
        class="
          hover:bg-yellow-400
          cursor-pointer
          bg-yellow-300
          col-span-1
          border-2 border-black
          text-center
          p-2
          text-sm text-gray-500
        "
        @click="change(2)"
      >
        Stair Tread
      </div>
      <div
        class="
          hover:bg-yellow-400
          cursor-pointer
          bg-yellow-300
          col-span-1
          border-2 border-black
          text-center
          p-2
          text-sm text-gray-500
        "
        @click="change(3)"
      >
        Woodworking Tool
      </div>
      <div
        class="
          hover:bg-yellow-400
          cursor-pointer
          bg-yellow-300
          col-span-1
          border-2 border-black
          text-center
          p-2
          text-sm text-gray-500
        "
        @click="change(4)"
      >
        Stair Stringer
      </div>
    </div>
    <div class="w-full mx-auto grid grid-cols-2">
      <div
        class="mx-4 border-2 border-black mt-2 cursor-pointer"
        v-for="(item, index) in date"
        :key="index"
      >
        <div class="text-right">
          <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
          <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
          <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
          <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
          <StarIcon class="w-6 h-6 inline-block text-yellow-300" />
        </div>
        <div class="border-b-2 border-gray-900">
          <img :src="item.imgURL" alt="" />
        </div>
        <div
          class="
            w-full
            bg-yellow-400
            text-center
            md:py-4
            py-2
            hover:bg-yellow-500
          "
        >
          {{ item.name }}
        </div>
        <div>
            <p class="text-center w-2/3 mx-auto text-gray-500 text-sm my-3">
                This quotation from Winston Churchill tells us that we shouldn’t lose courage after a failure if we want to make something successfully, and although we failed much time in one thing, we still must keep our original intention and enthusiasm.
            </p>
            <h1 class="text-center font-black text-2xl">US $<span class="text-red-600 text-3xl">{{item.price}}</span> </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>