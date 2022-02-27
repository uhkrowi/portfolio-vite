<script setup>
const menus = [
  {
    label: "Who's Nurul?",
    link: "/profile",
  },
  {
    label: "Showcase",
    link: "/showcase",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  // {
  //   label: "Service",
  //   link: "/service",
  // },
];

const socials = [
  {
    icon: "https://img.icons8.com/ios-glyphs/2x/ffffff/github.png",
    link: "https://github.com/uhkrowi",
  },
  {
    icon: "https://img.icons8.com/ios-glyphs/2x/ffffff/linkedin-2.png",
    link: "https://www.linkedin.com/in/uhkrowi/",
  },
  // {
  //   icon: "https://img.icons8.com/ios-filled/2x/ffffff/upwork.png",
  //   link: "https://www.upwork.com/freelancers/~01cf4ab7394043e0f3",
  // },
  {
    icon: "https://img.icons8.com/ios-glyphs/2x/ffffff/facebook-f.png",
    link: "https://facebook.com/uhkrowi/",
  },
  // {
  //   icon: "https://img.icons8.com/ios-filled/2x/ffffff/youtube-play.png",
  //   link: "https://www.youtube.com/channel/UCWCgsv9nGXUWC6AxTYICHGw",
  // },
];

const toggleNavigation = () => {
  const navigationEl = document.getElementById("navigation");
  navigationEl.classList.toggle("fixed");
  navigationEl.classList.toggle("hidden");
};
</script>

<template>
  <div>
    <div class="w-full flex justify-end lg:hidden">
      <div
        class="bg-[#111111] w-10 h-10 rounded-xl flex justify-center items-center"
        @click="toggleNavigation()"
      >
        <img
          src="https://img.icons8.com/ios-glyphs/72/ffffff/menu--v1.png"
          alt="menu"
          class="h-6"
        />
      </div>
    </div>

    <div
      id="navigation"
      class="hidden bottom-0 top-0 left-0 right-0 lg:block lg:relative lg:w-[265px] lg:min-h-[520px] p-4 lg:py-[55px] lg:px-[30px] bg-[#111111] text-white lg:rounded-xl"
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
      <div class="text-2xl font-bold flex items-center justify-center lg:justify-start">
        Nurul Uhkrowi
        <!-- <span class="text-4xl text-red-500 ml-2">&bull;</span> -->
      </div>
      <div class="text-xs mt-2 text-center lg:text-left">FULLSTACK WEB DEVELOPER</div>
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
        <!-- <div class="flex justify-center lg:justify-start"> -->
        <span class="block mt-5 text-xs text-center lg:text-left text-[#bbb]"
          >&copy; 2022 Uhkrowi | Bogor, Indonesia</span
        >
      </div>
    </div>
  </div>
</template>
