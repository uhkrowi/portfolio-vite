<script setup>
import Card from "@/components/Card.vue";
import CategoryButtons from "@/components/CategoryButtons.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();

const id = $route.params.id;
const content = ref(null);
(async () => {
  const res = await fetch(
    `https://portfolio.halimdut.xyz/wp-json/wp/v2/posts/${id}?_embed`
  );
  const json = await res.json();
  content.value = json;

  document.title = `Blog | ${content.value.title.rendered}`;
})();
</script>

<template>
  <Card>
    <div v-if="!content" class="text-center">Loading content...</div>
    <div v-else>
      <div class="w-full text-center mb-5 font-bold">
        <div class="text-3xl">{{ content.title.rendered }}</div>
        <div class="mt-5 font-normal flex flex-wrap justify-center items-end">
          <span class="opacity-75">in&nbsp;</span>
          <span>{{
            content._embedded["wp:term"][0].map((x) => x.name).join(", ")
          }}</span>
        </div>
        <!-- <div class="mt-5 opacity-50">
          Published {{ dayjs(content.date).format("MMM DD YYYY") }}
        </div> -->
      </div>
      <hr class="my-10 bg-gray-400" />
      <div
        v-html="content.content.rendered"
        class="blog-content text-ctextbase prose"
      ></div>
      <div class="pt-16">
        <div class="flex justify-center">
          <span class="text-lg px-3 py-2">Browse By Topic</span>
        </div>
        <div class="flex justify-center pt-2">
          <CategoryButtons></CategoryButtons>
        </div>
      </div>
    </div>
  </Card>
</template>
