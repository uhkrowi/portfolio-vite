<template>
  <div
    class="flex justify-center text-[#08102b] text-[18px] h-screen p-[15px] lg:p-[0px]"
  >
    <router-view class="max-w-[800px]" />
  </div>
</template>

<style lang="scss">
@import url("../public/css/github-dark.min.css");

@font-face {
  font-family: "Charter";
  src: url("/fonts/charter-normal.woff") format("woff");
}

body {
  font-family: "Charter", sans-serif;
  @apply lg:bg-gray-200;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

pre {
  background-color: #22272e !important;
  // max-width: 500px;
}

.shcb-language {
  display: none;
}
</style>
