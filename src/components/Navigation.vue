<script setup>
import downloadCV from "@/helper/downloadCV";

const menus = [
  {
    label: "About",
    link: "/#/about",
    icon: "https://img.icons8.com/fluency-systems-regular/2x/user.png",
  },
  {
    label: "Showcase",
    link: "/#/showcase",
    icon: "https://img.icons8.com/fluency-systems-regular/2x/folder-invoices.png",
  },
  {
    label: "Blog",
    link: "/#/blog",
    icon: "https://img.icons8.com/fluency-systems-regular/2x/term.png",
  },
  {
    label: "Get My CV",
    link: "https://cand-data.kalibrr.com/www.kalibrr.com/profile/52H6XMQG544PBP8NH7YS6MXQUDR6F8HPFKT322HM-6225cab4.pdf",
    icon: "https://img.icons8.com/fluency-systems-regular/2x/download-2.png",
    // newTab: true,
    downloadable: true,
    downloadAction: downloadCV,
  },
  // {
  //   label: "Service",
  //   link: "/services",
  // },
];

const socials = [
  {
    icon: "https://img.icons8.com/fluency-systems-regular/2x/github.png",
    link: "https://github.com/uhkrowi",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-regular/2x/linkedin.png",
    link: "https://www.linkedin.com/in/uhkrowi/",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-regular/2x/facebook-new--v1.png",
    link: "https://facebook.com/uhkrowi",
  },
  // {
  //   icon: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/2x/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-bold-tal-revivo.png",
  //   link: "https://www.upwork.com/freelancers/~01cf4ab7394043e0f3",
  // },
  // {
  //   icon: "https://img.icons8.com/fluency-systems-regular/2x/new-post.png",
  //   link: "/"
  // },
  {
    icon: "https://img.icons8.com/fluency-systems-regular/2x/telegram-app.png",
    link: "https://t.me/uhkrowi",
  },
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
  <div class="relative">
    <div class="fixed lg:hidden right-0 left-0 top-0 p-4 bg-white border-b">
      <div class="w-full flex justify-end items-center">
        <!-- <a href="/" class="text-[24px]">uhkrowi</a> -->
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
      class="hidden lg:block bottom-0 top-0 left-0 right-0 bg-white p-4"
    >
      <div
        class="hidden lg:flex w-10 h-10 justify-center items-center mb-3 shadow-custom1 border rounded-xl cursor-pointer hover:bg-gray-100 select-none"
        @click="$emit('toggleNavMode')"
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
        <!-- <img
          src="https://img.icons8.com/fluency-systems-regular/2x/menu.png"
          class="w-4"
        /> -->
      </div>

      <div class="w-full flex justify-end mb-5 lg:hidden">
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
              d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"
            />
          </svg>
        </div>
      </div>

      <div class="nav-container lg:shadow-custom1">
        <div v-for="(item, index) in menus" :key="index" class="menu-label">
          <a
            :href="item.downloadable ? 'javascript:void(0)' : item.link"
            :target="item.newTab ? '_blank' : '_self'"
            class="menu-label cursor-pointer"
            @click="
              hideNavigation();
              item.downloadable && item.downloadAction();
            "
          >
            <img :src="item.icon" class="w-5 h-5 opacity-[80%]" />
            <div class="menu-desc text-[16px]">{{ item.label }}</div>
            <div class="menu-desc-popup text-[16px]">
              <div>{{ item.label }}</div>
            </div>
          </a>
        </div>

        <hr class="my-5 w-full" />

        <div id="socials">
          <a
            v-for="(item, index) in socials"
            :key="index"
            :href="item.link"
            target="_blank"
            class="w-[40px] h-[40px] flex justify-center items-center hover:bg-[#f2f1ef] rounded-xl cursor-pointer"
          >
            <img :src="item.icon" alt="" class="m-2 h-5 opacity-[.75]" />
          </a>
        </div>

        <div id="copyright" class="mt-5 w-full">
          <span class="text-xs">&copy; 2022 Uhkrowi | Indonesia</span>
        </div>
      </div>
    </div>

    <!-- <div
      id="navigation"
      class="hidden bottom-0 top-0 left-0 right-0 lg:block lg:relative lg:w-[265px] lg:min-h-[520px] p-4 lg:py-[55px] lg:px-[30px] bg-[#111111] text-white lg:rounded-xl shadow-lg"
    >
      <div class="w-full flex justify-end mb-5 lg:hidden">
        <div
          class="bg-white w-10 h-10 rounded-xl flex justify-center items-center"
          @click="toggleNavigation()"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/72/delete-sign.png"
            alt="menu"
            class="h-6"
          />
        </div>
      </div>
      <div
        class="text-2xl font-bold flex items-center justify-center lg:justify-start"
      >
        Nurul Uhkrowi
      </div>
      <div class="text-xs mt-2 text-center lg:text-left">
        FULLSTACK WEB DEVELOPER
      </div>
      <div
        class="pt-[80px] lg:pt-[40px] w-full flex flex-col items-center lg:block"
      >
        <router-link
          v-for="(item, index) in menus"
          :key="index"
          :to="item.link"
          class="block py-2 cursor-pointer hover:translate-x-3 transition duration-300 text-[1rem]"
          @click="toggleNavigation()"
          >{{ item.label }}</router-link
        >
      </div>
      <div class="absolute bottom-0 pb-10 w-full">
        <div class="mt-20 flex justify-center flex-wrap lg:justify-start">
          <div
            v-for="(item, index) in socials"
            :key="index"
            class="flex justify-center items-center bg-red-500 w-[35px] h-[35px] rounded-full mr-2 cursor-pointer hover:bg-red-600 hover:scale-[1.15] transition duration-300"
          >
            <a :href="item.link" target="_blank"
              ><img :src="item.icon" alt="" class="w-[25px]"
            /></a>
          </div>
        </div>
        <span class="block mt-5 text-xs text-center lg:text-left text-[#bbb]"
          >&copy; 2022 Uhkrowi | Bogor, Indonesia</span
        >
      </div>
    </div> -->
  </div>
</template>

<style lang="scss">
.shadow-custom {
  box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.1);
  // color: #353535;
}

// .menu-label {
//   &:hover {
//     .menu-desc {
//       @apply block;
//     }
//   }
// }
</style>
