<script setup>
  import { navigate } from "astro/virtual-modules/transitions-router.js";
  const props = defineProps(["title", "imgURL", "to"]);
</script>

<template>
  <div class="bg-white flex-col w-[507px] h-[240px] rounded-md hover:shadow-md border-solid border-theme-gray-300 cursor-pointer group transition-all ease-in-out sm:w-full sm:h-[254px] flex-grow-0 flex-shrink-0 mb-4" @click="navigate(props.to)">
    <img :src="props.imgURL" alt="" class="object-cover rounded-md w-full h-[61.8%] saturate-0 group-hover:saturate-100 transition-all ease-in-out">
    <div class="font-light text-[24px] w-[80%] px-3 py-1 sm:text-[16px]">{{ props.title }}</div>
  </div>
</template>