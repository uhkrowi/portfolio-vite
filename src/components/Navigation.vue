<script setup>
const menus = [
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
</script>

<template>
  <div class="flex">
    <div v-for="(item, index) in menus" :key="index" class="menu-label">
      <a
        :href="item.downloadable ? 'javascript:void(0)' : item.link"
        :target="item.newTab ? '_blank' : '_self'"
        class="menu-label cursor-pointer"
        :download="item.downloadAttr"
        @click="item.downloadable && item.downloadAction()"
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
</template>
