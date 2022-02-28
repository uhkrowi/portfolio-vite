<script setup>
import Card from "@/components/Card.vue";
import CategoryButtons from "@/components/CategoryButtons.vue";

import { ref, watch } from "vue";
import dayjs from "dayjs";
import { useRoute, useRouter } from "vue-router";

const $route = useRoute();

const searchText = ref("");
const loadContentText = ref("");

const blogs = ref([]);
async function fetchPosts() {
  blogs.value = [];
  loadContentText.value = "Loading content...";

  const categoryID = $route.query.categories;
  const categoryParam = categoryID ? `categories=${categoryID}` : "";

  try {
    const res = await fetch(
      `https://portfolio.halimdut.xyz/wp-json/wp/v2/posts?_embed&${categoryParam}`
    );
    const json = await res.json();
    blogs.value = json;
  } catch (e) {
    console.error(e);
  }
  loadContentText.value = "No content found.";
}
fetchPosts();

watch($route, () => {
  fetchPosts();
});

const searchedPosts = ref([]);
async function searchPosts() {
  const res = await fetch(
    `https://portfolio.halimdut.xyz/wp-json/wp/v2/search?search=${searchText.value}`
  );
  const json = await res.json();
  searchedPosts.value = json;

  showSearchedModal();
  document.getElementById("searchedPostsModal").focus();
}

function showSearchedModal() {
  document.getElementById("searchedPostsModal").classList.toggle("hidden");
}

function closeSearchedModal() {
  document.getElementById("searchedPostsModal").classList.toggle("hidden");
  document.getElementById("searchField").focus();
}
</script>

<template>
  <Card label="Blog">
    <div class="w-full flex justify-end pb-5">
      <div class="relative">
        <input
          id="searchField"
          type="text"
          v-model="searchText"
          class="border rounded-xl shadow-lg h-10 px-5 w-[300px] outline-none"
          placeholder="Search post..."
          @keyup.enter="searchPosts()"
        />

        <div
          id="searchedPostsModal"
          class="hidden absolute bg-white rounded-lg shadow-lg mt-5 py-3 w-[300px] outline-none"
          tabindex="1"
          @blur="closeSearchedModal()"
        >
          <div v-if="!(searchedPosts.length > 0)" class="text-center">
            No content found
          </div>
          <ul v-else>
            <li
              v-for="(item, index) in searchedPosts"
              :key="index"
              class="py-2 px-5 hover:bg-[#f5f5f5] cursor-pointer"
              @click="$router.push(`/blog/${item.id}`)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex justify-center py-5">
      <CategoryButtons activeColor></CategoryButtons>
    </div>

    <div v-if="blogs.length === 0" class="text-center mt-5">
      {{ loadContentText }}
    </div>
    <div v-else class="grid grid-cols-1 mt-5">
      <router-link
        v-for="(item, index) in blogs"
        :key="index"
        :to="`/blog/${item.id}`"
        class="cursor-pointer hover:bg-white"
      >
        <div class="md:flex justify-between items-center py-3 md:py-5 px-3">
          <span class="block">{{ item.title.rendered }}</span>
          <div class="text-xs text-right font-bold opacity-75 mt-2 md:mt-0">
            <span
              >{{ item._embedded["wp:term"][0].map((x) => x.name).join(", ") }} |
            </span>
            <span>{{ dayjs(item.date).format("MMM DD YYYY") }}</span>
          </div>
        </div>
        <div class="border-b border-gray-300 w-full mt-1"></div>
      </router-link>
    </div>
  </Card>
</template>
