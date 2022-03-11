<script setup>
import Card from "@/components/Card.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const id = $route.params.id;
const content = ref(null);
(async () => {
  const res = await fetch(
    `https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase/${id}`
  );
  const json = await res.json();
  content.value = json;

  document.title = `Showcase | ${content.value.title.rendered}`;
})();
</script>

<template>
  <Card>
    <div v-if="!content" class="text-center">Loading content...</div>
    <div v-else>
      <div class="w-full text-center mb-5 text-sm text-gray-500 font-bold">
        <div class="text-4xl text-gray-900">{{ content.title.rendered }}</div>
      </div>
      <hr class="my-10" />
      <div class="prose prose-lg text-black">
        <div v-html="content.content.rendered" class="text-[16px]"></div>
      </div>
    </div>
  </Card>
</template>
