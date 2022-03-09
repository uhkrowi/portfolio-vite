<script setup>
import Card from "@/components/Card.vue";
import CategoryButtons from "@/components/CategoryButtons.vue";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";

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

document.title = 'Blog'
</script>

<template>
  <Card label="Blog">
    <div class="w-full flex justify-end pb-5">
      <div class="relative">
        <div
          class="flex items-center max-w-64 bg-white rounded-xl p-3 overflow-none bg-[#f2f1ef]"
        >
          <svg
            fill="#777985"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
            class="mr-2"
          >
            <path
              d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"
            />
          </svg>
          <input
            id="searchField"
            type="text"
            v-model="searchText"
            placeholder="Search posts"
            class="grow outline-none bg-[#f2f1ef]"
            @keyup.enter="searchPosts()"
          />
        </div>

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
        class="cursor-pointer hover:bg-[#f2f1ef]"
      >
        <div class="md:flex justify-between items-center py-3 md:py-2 md:pt-3 px-3">
          <span class="block">{{ item.title.rendered }}</span>
          <div class="text-xs text-right font-bold opacity-75 mt-2 md:mt-0">
            <span
              >{{ item._embedded["wp:term"][0].map((x) => x.name).join(", ") }}
              <!-- | {{ dayjs(item.date).format("MMM DD YYYY") }} -->
            </span>
          </div>
        </div>
        <div class="border-b border-gray-300 w-full mt-1"></div>
      </router-link>
    </div>
  </Card>
</template>
