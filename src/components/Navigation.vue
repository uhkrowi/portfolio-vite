<script setup>
const menus = [
  // {
  //   label: "About",
  //   link: "/#/about",
  //   // icon: "https://img.icons8.com/fluency-systems-regular/2x/user.png",
  //   icon: null,
  // },
  {
    label: "Showcase",
    link: "/#/showcase",
    // icon: "https://img.icons8.com/fluency-systems-regular/2x/folder-invoices.png",
    icon: null,
  },
  {
    label: "Blog",
    link: "/#/blog",
    // icon: "https://img.icons8.com/fluency-systems-regular/2x/term.png",
    icon: null,
  },
  {
    label: "CV",
    link: "/CV - Nurul Uhkrowi - Web Developer.pdf",
    // icon: "https://img.icons8.com/fluency-systems-regular/2x/download-2.png",
    icon: null,
    downloadAttr: "CV - Nurul Uhkrowi - Web Developer.pdf",
  },
  // {
  //   label: "Download My CV",
  //   link: "/#/download-cv",
  //   icon: "https://img.icons8.com/fluency-systems-regular/2x/download-2.png",
  // },
];

const toggleNavigation = () => {
  const navigationEl = document.getElementById("navigation");
  navigationEl.classList.toggle("fixed");
  navigationEl.classList.toggle("hidden");
};

function hideNavigation() {
  const navigationEl = document.getElementById("navigation");
  navigationEl.classList.add("hidden");
  navigationEl.classList.remove("fixed");
}
</script>

<template>
  <div class="flex">
    <div v-for="(item, index) in menus" :key="index" class="menu-label">
      <a
        :href="item.downloadable ? 'javascript:void(0)' : item.link"
        :target="item.newTab ? '_blank' : '_self'"
        class="menu-label cursor-pointer"
        :download="item.downloadAttr"
        @click="
          hideNavigation();
          item.downloadable && item.downloadAction();
        "
      >
        <img
          v-if="item.icon"
          :src="item.icon"
          :alt="item.label"
          class="w-5 h-5 opacity-[80%] text-[15px]"
        />
        <div v-else class="mx-3 lg:mx-5 hover:underline">{{ item.label }}</div>
      </a>
    </div>
  </div>
  <!-- <div class="relative">
    <div class="fixed lg:hidden right-0 left-0 top-0 p-4 bg-white border-b">
      <div class="w-full flex justify-end items-center">
        <div
          class="w-10 h-10 rounded-xl flex justify-center items-center border shadow-custom2"
          @click="toggleNavigation()"
        >
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="18px"
            height="18px"
          >
            <path
              d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"
            />
          </svg>
        </div>
      </div>
    </div>

    <div
      id="navigation"
      class="hidden lg:block bottom-0 top-0 left-0 right-0 p-4 bg-white lg:bg-transparent text-[15px]"
    >
      <div class="w-full flex justify-end mb-5 lg:hidden">
        <div
          class="w-10 h-10 rounded-xl flex justify-center items-center border shadow-custom2 bg-white"
          @click="toggleNavigation()"
        >
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="18px"
            height="18px"
          >
            <path
              d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"
            />
          </svg>
        </div>
      </div>

      <div class="nav-container lg:shadow-custom2 relative bg-white">
        <div v-for="(item, index) in menus" :key="index" class="menu-label">
          <a
            :href="item.downloadable ? 'javascript:void(0)' : item.link"
            :target="item.newTab ? '_blank' : '_self'"
            class="menu-label cursor-pointer"
            :download="item.downloadAttr"
            @click="
              hideNavigation();
              item.downloadable && item.downloadAction();
            "
          >
            <img
              :src="item.icon"
              :alt="item.label"
              class="w-5 h-5 opacity-[80%] text-[15px]"
            />
            <div class="menu-desc">{{ item.label }}</div>
            <div class="menu-desc-popup">
              <div>{{ item.label }}</div>
            </div>
          </a>
        </div>

        <hr class="my-5 w-full" />

        <div id="socials">
          <a
            v-for="(item, index) in contacts.filter(
              (x) => x.onNavigation == true && !x.hidden
            )"
            :key="index"
            :href="item.url"
            target="_blank"
            class="w-[40px] h-[40px] flex justify-center items-center hover:bg-[#f2f1ef] rounded-xl cursor-pointer"
          >
            <img
              :src="item.iconUrl"
              :alt="item.label"
              class="m-2 h-5 opacity-[.75]"
            />
          </a>
        </div>

        <div id="copyright" class="mt-5 w-full">
          <span class="block text-sm">&copy; 2022 Uhkrowi</span>
          <span class="block text-sm">Indonesia</span>
        </div>
      </div>
    </div>
  </div> -->
</template>
