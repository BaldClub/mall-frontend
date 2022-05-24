
<script setup lang="ts">

</script>


<template>
    <div class="w-full md:w-5/6 mx-auto grid grid-cols-3">
        <div class="col-span-1 pt-5 md:px-7">
            <div class=" bg-gray-200 text-xl border-2 border-black">
                <router-link to="myAccount">
                    <div class=" hover:bg-gray-300 px-5 py-2 pt-4  cursor-pointer">
                        <p>
                       
                            My Account
                        </p>
                    </div>
                </router-link>
                <!-- <router-link to="myOrders">
                    <div class=" hover:bg-gray-300 px-5 py-2  cursor-pointer">
                        <p>
                        
                            My Orders
                        
                        </p>
                    </div>
                </router-link> -->
                <!-- <router-link to="myWishList">
                    <div class=" hover:bg-gray-300 px-5 py-2 border-b-2 border-black  cursor-pointer">
                        <p>
                            
                            My Wish List
                        </p>
                    </div>
                </router-link> -->
                <!-- <router-link to="addressBook">
                    <div class=" hover:bg-gray-300 px-5 py-2  cursor-pointer">
                        <p>
                        Address Book
                            
                        </p>
                    </div>
                </router-link> -->
                <!-- <router-link to="accountInformation">
                    <div class=" hover:bg-gray-300 px-5 py-2 border-b-2 border-black  cursor-pointer">
                        <p>
                            Account Infromation
                        </p>
                    </div>
                </router-link> -->
                <!-- <router-link to="myProductReviews">
                    <div class=" hover:bg-gray-300 px-5 py-2  cursor-pointer">
                        <p>
                            
                            My Product Reviews
                            
                        </p>
                    </div>
                </router-link> -->
            </div>
        </div>
        <div class="col-span-2">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
