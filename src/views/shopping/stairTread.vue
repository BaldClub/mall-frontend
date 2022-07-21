
<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/solid";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from 'vue-router'
import constData from "../../static/constData";
import {ElMessage} from "element-plus";
import axios from 'axios'
import { onMounted, watchEffect } from "@vue/runtime-core";

const router = useRouter()

const date = ref([
    {
        image: "/assets/line.736aa76b.png",
        imgList:[
            '/assets/line.736aa76b.png'
        ],
        name: "stair gauges for framing square"
    },
])
onMounted(() => {
    getDate()
})

function getDate() {

    console.log('111');
    
    if( window.localStorage.getItem("type") == null){
        window.localStorage.setItem("type", "")
    }
    
    axios({
        method: "post",
        url: constData.url + "/system/product/getImgList",
        data: {
            type: window.localStorage.getItem("type")
        }
    }).then((res)=>{
        date.value = res.data.data;
        console.log(date.value[0].imgList[0]);
        
        ElMessage.success("Data list successfully acquired!");
    }).catch((err)=>{
        ElMessage.error("Data error, please try again!");
        console.log(err);
    })
}

function toDetail(data){
    window.localStorage.setItem("productId", data.id);
    router.push({
        path:"/detail",
    });
}

</script>

<template>
    <div class=" w-5/6 mx-auto">
        <img src="../../assets/img/index2.png" alt="">        
    </div>
    <div class=" w-5/6 mx-auto grid grid-cols-2">
        <div class=" mx-4 border-2 border-black mt-2 cursor-pointer" v-for="item,index in date" :key="index" @click="toDetail(item)">
            <div class="text-right">
            <StarIcon class="w-6 h-6 inline-block text-yellow-300"/>
            <StarIcon class="w-6 h-6 inline-block  text-yellow-300"/>
            <StarIcon class="w-6 h-6 inline-block text-yellow-300"/>
            <StarIcon class="w-6 h-6 inline-block text-yellow-300"/>
            <StarIcon class="w-6 h-6 inline-block text-yellow-300"/>  
            </div>
            <div class=" border-b-2 border-gray-900">
                <img :src="constData.url + '/static/' + item.image + '/'  + item.imgList[0] " alt="">
            </div>
            <div class=" w-full bg-yellow-400 text-center md:py-4 py-2 hover:bg-yellow-500">
              {{item.name}}
            </div>
        </div>
       
    </div>
</template>

<style scoped>

</style>
