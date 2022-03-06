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
    <div class="masonry-1-col md:masonry-3-col">
      <router-link
        v-for="(item, index) in showcases"
        :to="`/showcase/${item.id}`"
        :key="index"
        class="block showcase-container break-inside p-3 mb-5 text-white select-none cursor-pointer"
      >
        <div
          class="w-full h-full overflow-hidden rounded-lg relative lg:shadow-lg flex justify-center"
        >
          <div
            class="title-container opacity-[0] absolute w-full h-full top-0 left-0 bg-red-500/75 rounded-lg p-5 flex justify-center items-center text-md text-center text-white font-bold"
            style="z-index: 999"
          >
            {{ item.title.rendered }}
          </div>
          <img
            :src="
              item._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes
                ?.medium?.source_url
            "
            :alt="item.slug"
            class="rounded-lg shadow-lg w-full"
            style="z-index: 998"
          />
        </div>
        <span class="block mt-2 text-center text-md text-black lg:hidden">{{
          item.title.rendered
        }}</span>
      </router-link>
    </div>
  </Card>
</template>

<style lang="scss">
.showcase-container {
  img {
    @apply ease-in-out duration-500;
  }

  .title-container {
    @apply ease-in-out duration-500;
  }

  &:hover {
    .title-container {
      @apply opacity-[1];
    }

    img {
      @apply scale-[1.25];
    }
  }
}
</style>
