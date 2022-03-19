<script setup>
const { label } = defineProps({
  label: String,
});
</script>

<template>
  <div class="w-full py-[20px]">
    <h2 v-if="label" class="text-xl pb-2 font-bold">
      <div>{{ label }}</div>
      <!-- <div class="h-1 w-10 mt-2 bg-red-500 rounded-md">&nbsp;</div> -->
    </h2>
    <slot name="default"></slot>
  </div>
</template>
