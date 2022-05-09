
<script setup lang="ts">

</script>


<template>
    <div>
      <p class="py-6 text-xl font-semibold">MY ORDER</p>
    </div>
    <div class="border">
        <div class="flex border2">
            <div class="border3">SKU:LIGH-001</div>
            <div class="border4">STAIR TREAD TEMPLATE TOOL</div>
        </div>
        <div class="flex border5">
            <div class="border3">
                <div class="border3">SKU:LIGH-001</div>
            </div>
            <div class="border4">STAIR TREAD TEMPLATE TOOL</div>
        </div>
    </div>
</template>

<style scoped>
.border{
    width: 500px;
    height: 200px;
    border: 1px solid black;
}
.border2{
    width: 500px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid black;
}
.border3{
    width: 150px;
    text-align: center;
    border-right: 1px solid black;
}
.border4{
    width: 350px;
    text-align: center;
}
.border5{
    height: 150px;
}
</style>