<template>
  <div
    class="flex justify-center text-[#08102b] text-[16px] h-screen p-[15px] lg:p-[0px]"
  >
    <router-view class="max-w-[800px]" />
  </div>
</template>

<style lang="scss">
@import url("../public/css/github-dark.min.css");

// @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/Merriweather.woff2") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

// @font-face {
//   font-family: "Charter";
//   src: url("/fonts/charter-normal.woff") format("woff");
// }

body {
  font-family: Merriweather, sans-serif;
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
