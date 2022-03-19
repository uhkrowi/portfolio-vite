<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>

<template>
  <!-- class="flex justify-center text-[#08102b] dark:text-white text-[16px] h-screen p-[15px] lg:p-[0px]" -->
  <div class="flex justify-center dark:text-white">
    <router-view class="w-full lg:max-w-[700px]" />
  </div>
</template>

<style lang="scss">
@import url("../public/css/github-dark.min.css");

@font-face {
  font-family: "Quattro";
  src: url("/fonts/iAWriterQuattroV.ttf") format("truetype");
}

body {
  font-family: Quattro, sans-serif;
  // @apply lg:bg-gray-200;
  @apply dark:bg-[#191919];
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

pre {
  background-color: #22272e !important;
  // max-width: 500px;
}

.shcb-language {
  display: none;
}
</style>
