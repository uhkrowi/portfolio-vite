<template>
  <div class="flex justify-center p-[15px] lg:p-[50px] text-[#08102b]">
    <router-view id="myDiv" class="max-w-[900px]" />
  </div>
</template>

<style>
@import url("../public/css/chalk.min.css");
/* @import url("../public/css/dirtysea.min.css"); */
/* @import url("../public/css/lioshi.min.css"); */

@font-face {
  font-family: "Inter";
  /* src: url("../public/fonts/Inter-Regular.ttf") format("truetype"); */
  src: url("/fonts/Inter-Regular.otf") format("opentype");
}

body {
  font-family: "Inter", sans-serif;
  background: white;
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
  background-color: #303030 !important;
}

.shcb-language {
  display: none;
}
</style>
