<script setup>
import { ref } from "vue";

const { activeColor } = defineProps({
  activeColor: Boolean,
});

const categories = ref([]);
(async () => {
  const res = await fetch(
    "https://portfolio.halimdut.xyz/wp-json/wp/v2/categories"
  );
  const data = await res.json();
  categories.value = data;
})();
</script>

<template>
  <div class="flex flex-wrap justify-center text-[14px]">
    <div class="p-1">
      <router-link
        class="category-button"
        :class="[$route.query.categories == undefined && activeColor ? 'text-white hover:text-ctextbase bg-red-600' : 'text-ctextbase']"
        :to="`/blog`"
        >All</router-link
      >
    </div>
    <div v-for="(item, index) in categories" :key="index" class="p-1">
      <router-link
        class="category-button"
        :class="[item.id == $route.query.categories && activeColor ? 'text-white hover:text-ctextbase bg-red-600' : 'text-ctextbase']"
        :to="`/blog/?categories=${item.id}`"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>

<style>
.category-button {
  @apply rounded-xl shadow-custom1 flex justify-center px-3 py-2 hover:bg-[#f2f1ef] border;
  /* @apply rounded-xl shadow-custom1 flex justify-center px-3 py-2 hover:scale-[1.05] transition duration-500 border; */
}
</style>