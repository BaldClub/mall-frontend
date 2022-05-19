<script setup lang="ts">
import axios from "axios";
import { onBeforeMount,onMounted, ref } from 'vue';
import constData from "../../../static/constData";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";

const router = useRouter()
const user = ref({
  email: "3296189981@qq.com",
  firstName: "xia",
  lastName: "zhi",
  password: "123456",
  username: "1527342483132907520"
})


onBeforeMount(() => {
  console.log(localStorage.getItem("username"));
  
  if (localStorage.getItem("username") != null)  {
    axios({
    method: "POST",
    url: constData.url + "/system/user/get",
    data: {
      username: localStorage.getItem("username"),
    },
  })
    .then((res) => {
      console.log(res);
      user.value =  res.data.data[0]
    })
    .catch((err) => {
      ElMessage.error('登录异常，请重试');
      console.log(err);
    });
  }
})

onMounted(()=>{
  if(window.localStorage.getItem("username") == null || window.localStorage.getItem("username") == ""){
      ElMessage.warning("Please login first");
      router.push("/login");
  }
})
</script>

<template>
  <div>
    <div>
      <p class="py-6 text-xl font-semibold">MY ACCOUNT</p>
    </div>
    <div>
      <p>Account Information</p>
    </div>
    <div>
      <p class="py-6 text-xl font-semibold">Contact Information</p>
    </div>
    <div>
      <p>{{ user.firstName + user.lastName }}</p>
      <p>{{ user.email }}</p>
    </div>
    <div class="text-red-500">
      <router-link to="editMyAccount">
        <p class="inline-block pr-5">Edit</p>
      </router-link>
      <router-link to="editMyAccount">
        <p class="inline-block">Change Password</p>
      </router-link>
    </div>
    <div>
      <p class="py-6 text-xl font-semibold">Newsletters</p>
      <div>
        <p>You are subscribed to "General subscribed"</p>
      </div>
      <div class="text-red-500">
        <router-link to="/eclub">
          <p class="inline-block pr-5">Edit</p>
        </router-link>
      </div>
      <div class="pt-5">
        <p class="inline-block pr-5">Address Book</p>
        <router-link to="addressBook">
          <p class="inline-block text-red-400">Manage Address</p>
        </router-link>
      </div>
    </div>
    <div>
      <p class="py-6 text-xl font-semibold">Default Billing Address</p>
      <div>
        <p>You have not set a default billing address.</p>
      </div>
      <div class="text-red-500 py-4">
        <router-link to="addressBook">
          <p class="inline-block pr-5">Edit Address</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
