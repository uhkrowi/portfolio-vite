<template>
  <div
    class="flex justify-center p-[15px] lg:p-[50px] text-[#08102b] text-[14px]"
  >
    <router-view class="max-w-[1000px]" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

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
</style>
