

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import constData from "../static/constData";
import { ElMessage } from 'element-plus'
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  topic: "email",
  content: "",
});

function submit() {

  if (form.value.content !== "") {
    const regEmail = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/
    if (!regEmail.test(form.value.content)) {
      ElMessage.error("Please fill in the email");
      return;
    } else {

      axios({
        method: "POST",
        url: constData.url + "/system/leave/save",
        data: form.value,
      })
        .then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            ElMessage.success("success");
            router.push("/login");
          } else {
            ElMessage.error(res.data.msg);
          }
        })
        .catch((err) => {
          ElMessage.error('留言异常，请重试');
          console.log(err);
        });
    }

  }
}


</script>
<template>
  <div class="page-footer flex flex-wrap">
    <div class="flex-1 text-center py-14">
      <img src="../assets/img/商标r.png" class="image"  />
      <h2 class="text-2xl my-2">ALL Rights Reserved, ©2022</h2>
      <p>1-424-307-9571</p>
      <div class="w-1/3 mx-auto text-left">
        <h3 class="text-2xl">Connect</h3>
        <div class="flex w-full">
          <div class="flex-1 px-2">
            <a href="https://www.facebook.com/BelaDomoHome/">
              <img src="../assets/img/facebook.png"  />
            </a>
          </div>
          <div class="flex-1 px-2" >
            <a href="https://www.instagram.com/beladomohome/">
              <img src="../assets/img/instagram.png"  />
            </a>
          </div>
          <div class="flex-1 px-2" >
            <a href="https://www.pinterest.com/beladomohome">
              <img src="../assets/img/pinterest.png" class="flex-1"  />
            </a>
          </div>
          <div class="flex-1 px-2">
            <a href="https://www.youtube.com/channel/UCq_dOTFWmH26YKu-vSk2s5g">
              <img src="../assets/img/youtube.png" class="flex-1"  />
            </a>
          </div>
        </div>
        <p class="text-2xl py-5">wjhappy337@gmail.com</p>
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
          <img src="../assets/img/Mail-01-256.png"  />
        </div>
        <div class="flex-8">
          <input type="text" v-model="form.content" class="bg-transparent text-black my-auto" />
        </div>
      </div>
      <button class="my-3 px-3 bg-red-500" @click="submit">SUBSCRIBE</button>
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
