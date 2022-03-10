<script setup>
const { label } = defineProps({
  label: String,
});
</script>

<template>
    <!-- class="w-full py-[70px] px-[20px] lg:px-[50px] rounded-2xl bg-white shadow-lg shadow-gray-200 text-gray-900" -->
    <!-- class="w-full py-[70px] px-[20px] lg:px-[50px] bg-white border border-[#818491]" -->
  <div
    class="w-full py-[20px] md:px-[10px] lg:px-[30px]"
  >
    <h2 v-if="label" class="text-2xl pb-10">
      <div>{{ label }}</div>
      <!-- <span class="w-5 bg-red-500 rounded-md">&nbsp;</span>&nbsp;  -->
      <div class="h-1 w-10 mt-2 bg-red-500 rounded-md">&nbsp;</div>
    </h2>
    <slot name="default"></slot>
  </div>
</template>
