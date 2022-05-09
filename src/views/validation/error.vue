
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { ElMessage } from "element-plus";
import constData from "../../static/constData";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const router = useRouter()

const from = ref({
  code: "",
  sku: "SZG-001",
  username: "",
});

onMounted(() => {
  if(window.localStorage.getItem("username") == null || window.localStorage.getItem("username") == ""){
      ElMessage.warning("Please login first");
      router.push("/login");
  }else{
    from.value.username = window.localStorage.getItem("username");
  }
  if (
    window.localStorage.getItem("sku") == null ||
    window.localStorage.getItem("sku") == ""
  ) {
    router.push("/code");
  } else {
    from.value.sku = window.localStorage.getItem("sku");
  }
});
function submit() {
  axios({
    method: "POST",
    url: constData.url + "/system/code/checkCode",
    data: from.value,
  })
    .then((res) => {
      if (res.data.code === 200) {
        window.localStorage.removeItem("sku");
        ElMessage.success("success");
        router.push("/success");
      } else {
        window.localStorage.setItem("sku", from.value.sku);
        router.push("/error");
      }
    })
    .catch((err) => {
      ElMessage.error("code error");
      router.push("/error");
      console.log(err);
    });
}
</script>
<template>
  <div class="w-4/6 mx-auto py-5 ">
    <h1 class="md:text-3xl text-xl mt-6 font-black text-gray-600">CODE AUTHENTICATION</h1>
    <hr class="border-t-4" />
    <div class="w-4/5 mx-auto  rounded-2xl bg-gray-300 py-8 my-7 text-center">
      <h1 class="text-center font-black text-3xl text-red-600">ERROR!</h1>
      <p class="p-3">The code you entered cannot be found,please re-enter!</p>
      <h1 class="text-gray-500 mt-3 font-bold text-gl">INPUT CODE</h1>
      <el-input v-model="from.code" placeholder="Please input code" class="md:w-1/2 mt-3" />
      <br />
      <button
        class="text-xl hover:bg-red-700 bg-red-600 p-1 text-gray-50 px-14 my-3"
        @click="submit"
      >CONFIRM</button>
    </div>
  </div>
</template>

<style scoped>
</style>
