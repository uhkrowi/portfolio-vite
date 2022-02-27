<script setup>
import Card from "@/components/Card.vue";
import CategoryButtons from "@/components/CategoryButtons.vue";

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import dayjs from "dayjs";

const $route = useRoute();

const id = $route.params.id;
const content = ref(null);
(async () => {
  const res = await fetch(
    `https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${id}`
  );
  const json = await res.json();
  content.value = json;
})();
</script>

<template>
  <Card>
    <div v-if="!content" class="text-center">Loading content...</div>
    <div v-else>
      <div class="w-full text-center mb-5 text-sm font-bold">
        <div class="text-4xl">{{ content.title.rendered }}</div>
        <div class="mt-5 font-normal">
          Published {{ dayjs(content.date).format("MMM DD YYYY") }}
        </div>
      </div>
      <hr class="my-10" />
      <div class="prose prose-zinc prose-xl">
        <div
          v-html="content.content.rendered"
          class="text-[16px] blog-content"
        ></div>
      </div>
      <div class="pt-16">
        <div class="flex justify-center">
          <span class="text-lg px-3 py-2">Browse By Topic</span>
        </div>
        <div class="flex justify-center pt-5">
          <CategoryButtons></CategoryButtons>
        </div>
      </div>
    </div>
  </Card>
</template>
