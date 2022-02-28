<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-[265px_auto] gap-[10px] lg:gap-[10px]">
    <div class="static lg:fixed" style="z-index: 9999;">
      <Navigation/>
    </div>
    <div></div>
    <router-view style="z-index: 9998;"></router-view>
  </div>
</template>
