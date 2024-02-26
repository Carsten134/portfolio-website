<script setup>
import { navigate } from "astro/virtual-modules/transitions-router.js";
const props = defineProps(["title", "description", "href"]);
</script>

<template>
  <div
    class="group flex justify-center items-center flex-col w-[416px] h-[182px] border-solid border-theme-gray-200 border-[1px] rounded-xl shadow-md card hover:shadow-theme-pink-300 transition-all ease-in-out hover:cursor-pointer bg-[#ffffff]"
    @click="navigate(props.href)"
  >
    <div class="p-3 w-full h-full text-theme-gray-500">
      <div class="flex justify-start items-center w-full h-[38.2%]">
        <div
          class="w-[15%] pb-2 inline-block group-hover:bg-gradient-to-t group-hover:from-theme-pink-500 group-hover:to-theme-orange-500 group-hover:text-transparent group-hover:bg-clip-text"
        >
          <slot></slot>
        </div>
        <span
          class="font-extrabold text-[40px] text-theme-gray-500 pb-2 group-hover:bg-gradient-to-t group-hover:from-theme-pink-500 group-hover:to-theme-orange-500 group-hover:text-[#D9D9D900] group-hover:bg-clip-text"
          >{{ props.title }}</span
        >
      </div>
      <hr class="h-[2px] border-none bg-gradient-to-r from-theme-gray-500 group-hover:from-theme-pink-500" />
      <div class="w-full h-[61.8%]">
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>