<!-- This example requires Tailwind CSS v2.0+ -->

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/vue/outline'
import { useRouter } from "vue-router";
const router = useRouter()

const navigation = [
  { name: 'My Account', href: '/myAccountView/myAccount', current: false },
  // { name: 'My Wish List', href: '/myAccountView/myWishList', current: false },
  { name: 'Sign In', href: '/login', current: false },
]

const navigationTo = [
  { name: 'My Account', href: '/myAccountView/myAccount', current: false },
  // { name: 'My Wish List', href: '/myAccountView/myWishList', current: false },
  { name: 'Sign In', href: '/login', current: false },
  { name: 'Products', href: '/', current: false },
  { name: 'Specials', href: '#', current: false },
  { name: 'Stair Calculator', href: '/Calculator', current: false },
  { name: 'Warranty Code', href: '/code', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

// function secondDetail(){
//   secondDat.style.display="inline-block";
// }

function goTo(e) {
  router.push(e)
}

function setType(type){
  if(window.localStorage.getItem('type') != null){
    window.localStorage.removeItem('type');
  }
  window.localStorage.setItem('type', type);
    router.push('/' + type);
}

function goama(){
  window.location.assign('https://www.amazon.com/beladomo')
}
</script>

<template>
  <Disclosure as="nav" class="bg-gray-800 h-8 relative z-10" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-8">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"></div>
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-centers rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-5 w-5" aria-hidden="true" />
            <XIcon v-else class="block h-5 w-5" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="hidden absolute inset-y-0 h-8 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 rounded-md cursor-pointer text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined"
            @click="goTo(item.href)"
          >{{ item.name }}</DisclosureButton>
          <button
            type="button"
            @click="gowish"
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <router-link to="/myAccountView/myWishList">
              <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
            </router-link>
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden bg-black">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigationTo"
          :key="item.name"
          as="a"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md  cursor-pointer text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined"
          @click="goTo(item.href)"
        >{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
  <div class="flex max-w-7xl mx-auto px-2">
    <div class="flex-1">
      <router-link to="/">
        <img src="@/assets/img/logo.png" class="w-56 mx-auto" alt  style="margin-top:15px"/>
      </router-link>
    </div>
    <div class="flex-1 md:block hidden">
      <router-link to="/eclub">
        <img src="@/assets/img/ECLUB.png" class="w-56 mx-auto" alt />
      </router-link>
      <!-- <img src="@/assets/img/ECLUB.png" class="w-56 mx-auto" alt /> -->
    </div>
    <div class="flex-1 md:block hidden" @click="goama">
      <img src="@/assets/img/AMAZON.png" class="w-56 mx-auto" alt />
    </div>
  </div>
  <div class="bg-yellow-400 md:h-auto h-16">
    <div class="text-center md:flex hidden max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" >
      <div class="product flex-1 text-2xl text-white py-4 hover:bg-yellow-500 cursor-pointer">
        <router-link to="/">Products</router-link>

        <div class="select w-1/6 grid grid-rows-2 absolute z-10"> 
          <div
            class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500"
            @click="secondDetail" id="first-detail"
          >Stair Tool
          <div class="second-detail" ref="secondDat">
            <li @click="setType('Stair Tread')" class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500">
              Stair Tread</li>
            <li @click="setType('Stair Stringer')" class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500">
              Stair Stringer</li>
          </div>
          </div>
          <!-- <div
            class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500"
          >Stair Tread</div> -->
          <div @click="setType('Woodworking Tool')"
            class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500"
          >Woodworking Tool</div>
          <!-- <div
            class="hover:bg-yellow-400 cursor-pointer bg-yellow-300 col-span-1 border-2 border-black text-center p-2 text-sm text-gray-500"
          >Stair Stringer</div> -->
        </div>
      </div>
      <div class="flex-1 text-2xl text-white py-4 hover:bg-yellow-500 cursor-pointer">Specials</div>
      <div class="flex-1 text-2xl text-white py-4 hover:bg-yellow-500 cursor-pointer">
        <router-link to="/Calculator">Stair Calculator</router-link>
      </div>
      <div class="flex-1 text-2xl text-white py-4 hover:bg-yellow-500 cursor-pointer">
        <router-link to="/code">Warranty Code</router-link>
      </div>
      <div class="flex-1 text-2xl text-white py-4 hover:bg-yellow-500 cursor-pointer">
        <router-link to="/contact">Contact Us</router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .select{
    display: none;
  }
  .product:hover .select{
    display: grid;
  }
  #first-detail:hover .second-detail li{
    display: block;
  }
  #first-detail{
    position: relative;
  }
  .second-detail{
    list-style: none;
    position: absolute;
    z-index: 10;
    width: 100%;
    left: 100%;
    top: -2px;
  }
  .second-detail li{
    display: none;
  }
</style>
