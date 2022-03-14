<template>
  <div
    class="flex justify-center text-[#08102b] text-[18px] h-screen p-[15px] lg:p-[0px]"
  >
    <router-view id="myDiv" class="max-w-[800px]" />
  </div>
</template>

<style lang="scss">
@import url("../public/css/github-dark.min.css");
// @import url("https://fonts.googleapis.com/css2?family=Spectral&display=swap");

// @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

@font-face {
  font-family: 'Spectral';
  // src: url("/fonts/Spectral-Regular.ttf") format("truetype");
  src: url("/fonts/charter-normal.woff") format("woff");
  // src: url("https://fonts.gstatic.com/s/spectral/v11/rnCr-xNNww_2s0amA9M5kng.woff2") format("woff2");
}

// @font-face {
//   font-family: "Spectral";
//   src: url("/fonts/Spectral-Regular.ttf") format("truetype");
// }

body {
  font-family: "Spectral", sans-serif;
  // background: white;
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
