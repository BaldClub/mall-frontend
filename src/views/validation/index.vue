<script setup lang="ts">
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import constData from "../../static/constData";
import axios  from "axios";

const router = useRouter()

const form = ref({
  code: "",
  sku:"SZG-001",
  username:"",
})

const options = [
  {
    value: "SZG-001",
    label: "SZG-001",
  },
  {
    value: "LTGH-002",
    label: "LTGH-002",
  },
  {
    value: "LTGH-003",
    label: "LTGH-003",
  },
];

onMounted(()=>{
  if(window.localStorage.getItem("username") == null || window.localStorage.getItem("username") == ""){
      ElMessage.warning("Please login first");
      router.push("/login");
  }else{
    form.value.username = window.localStorage.getItem("username");
  }
})
const submitCode = ()=>{
  console.log(form.value);
  axios({
    method:"POST",
    url: constData.url + "/system/code/checkCode",
    data: form.value
  }).then((res)=>{
    if(res.data.code === 200){
      ElMessage.success("success");
      router.push("/success");
    }else{
      window.localStorage.setItem("sku",form.value.sku);
      router.push("/error");
    }
  }).catch((err)=>{
    ElMessage.error("code error");
    router.push("/error")
    console.log(err)
  })
}
</script>

<template>
  <div class="w-5/6 mx-auto">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">CODE AUTHENTICATION</h1>
    <hr class="border-t-4" />
    <div class="grid md:grid-cols-6 grid-cols-2">
      <div class="md:col-span-2 col-span-1 p-9">
        <img class="border-2" src="../../assets/img/line.png" alt="" />
      </div>
      <div class="md:col-span-4 grid md:grid-cols-4">
        <div class="md:col-span-1 row-span-1">
          <div class="md:mt-40 text-center">
            <span class="font-black" style="font-size:30px">Select SKU</span>
            <el-select
              v-model="form.sku"
              class="m-2"
              size="large"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div class="md:col-span-3 md:col-start-2 md:row-start-1 row-start-2 text-center">
          <div class="md:mt-40">
            <h1 class="font-black" style="font-size:30px">INPUT CODE</h1>
            <el-input
              v-model="form.code"
              placeholder="Please input code"
              class="md:w-1/2 mt-3"
            />
          </div>
          <el-button type="danger" class="bg-red-500 px-4 p-2 mt-3 hover:bg-red-600" @click="submitCode">SUBMIT</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>
