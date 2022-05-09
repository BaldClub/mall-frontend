<script setup lang="ts">
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
      <p>xxxxxxxxx</p>
      <p>xxxxxx@outlook.com</p>
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
