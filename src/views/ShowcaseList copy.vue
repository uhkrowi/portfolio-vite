<script setup>
import Card from "@/components/Card.vue";

import { ref } from "vue";

const showcases = ref([]);
(async () => {
  const res = await fetch(
    "https://portfolio.halimdut.xyz/wp-json/wp/v2/showcase?_embed"
  );
  const data = await res.json();
  showcases.value = data;
})();
</script>

<template>
  <Card label="Showcase">
    <div v-if="showcases.length === 0" class="text-center">
      Loading content...
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <router-link
        v-for="(item, index) in showcases"
        :to="`/showcase/${item.id}`"
        :key="index"
        class="showcase-container relative"
      >
        <div
          class="title-container opacity-[0] absolute w-full h-full bg-red-500/75 rounded-xl p-5 flex justify-center items-center text-center text-white font-bold"
          style="z-index: 999;"
        >
          {{ item.title.rendered }}
        </div>
        <div
          class="bg-white h-[150px] flex justify-center items-center cursor-pointer rounded-xl"
          style="z-index: 998;"
        >
          <img
            :src="
              item._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.thumbnail?.source_url
            "
            :alt="item.slug"
          />
        </div>

        <!-- <span class="block mt-2 text-center text-md">{{
          item.title.rendered
        }}</span> -->
      </router-link>
    </div>
  </Card>
</template>

<style lang="scss">
.showcase-container {
  img {
    @apply shadow-md max-h-[70%] max-w-[70%];
  }

  &:hover {
    .title-container {
      @apply opacity-[1] transition duration-500;
    }

    img {
      @apply ease-in-out scale-[1.2] transition duration-500;
      // @apply ease-in-out scale-[1.1] transition duration-300;
    }

    span {
      @apply underline;
    }
  }
}
</style>
