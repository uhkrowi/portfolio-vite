<script setup>
import { ref } from "vue";

const isDarkMode = ref(document.documentElement.classList.contains("dark"));

function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");

  isDarkMode.value = document.documentElement.classList.contains("dark");

  if (isDarkMode.value) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
</script>

<template>
  <div class="flex items-center">
    <img
      v-if="isDarkMode"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADC0lEQVRoge2aO2tUQRiG30lchZiIJCREg4hoLoWNEFFQA7HRUkFQECGCBgQtVMTK1lIRxU5ELLTzJwRByAUvrUrAQlRYsxswETQmeSyG4EZ3z56dc5ljOE8955v35Zsz881FysnJycnJWbsA7cAl4IhvLYkCdAJ3gHlgDtjsW1MiAE3AKFDiD/d860oEoBcY51+GfGuLHeAAUKxidgZY51tfrABngZ9VzAI88a0viIYzAZyS9ECSqdHkTSRFWQIYAn7UyOwKa2M5AvqBch2zAH2+tUYGu/S8CGEWoMu33sgAF0KaBdjgW28kgG5gtgHD631rDqIpRJurkhopE1sdtfgHaGF1yRiGnb51B1Evw6cltTcY8782fN4h5oCLkLSoaRjYKmnQIeZ+dznJE5Thw6pdPgYxDLh8lwpBhvc6xuyW28hIhSDDuyPEPRPhWz8A0w0uR5XMABt9e6hGUIY7I8TtkNsMnzg1JxdgQVIhQuxPkvqNMd8jxIidoAwTMXaPpBsRY6SHQ0lZjQVgj28vlQRleDaG+AVJT4G2GGLFQpDh6Zj66JP0CGiOKV4kggy/i7Gf45LuxxjPmSDDEzH3NQo8JKtn1tiTjuUYJq6/eZalf3oVwFQChgHe42n2rrcffpxQv72SprC3jdnJNtCBvf5Mks/AZbJSewO3Eza8wgxwF9iHw34aaAZa6rWrGxjokV2i0sxAUdKY7ErxVtIHSV8lzUtaltQmqUvSdtm99yFJ/ZIGjTHlyL0D11PKchTOhfESaugABUmTkjJVF1cwLumgMWa5XsPQ/wqwS9IrSZsiCEuCouxQ/himcZibB0mSMWZa0oikJUdhSbAo6WRYs05gH7BkgUUgnbMzYAT45dHsAnAiFbMVpo8B3zyYLQFHUzVbYboXeJ2i2efANi9mK0wXgGvY13dJUQKukJFDBEkSsAW4Rby19xxwkyw/Y8RuOC4CE7jtp5eAMezEGPvleqKXXtgHLsOyN4oDknbIHvC3yq7nJUllSV8kvZSt5iaNMcUkdeXk5OTkZJXfxuXrLkMVY2UAAAAASUVORK5CYII="
      class="w-[20px] cursor-pointer transition duration-500"
      @click="toggleDarkMode"
    />
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      style="fill: #000000"
      class="cursor-pointer transition duration-500"
      @click="toggleDarkMode"
    >
      <path
        d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"
      ></path>
    </svg>
  </div>
</template>
