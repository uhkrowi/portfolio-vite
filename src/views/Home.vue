<script setup>
import Navigation from "@/components/Navigation.vue";
import { setBlockTracking } from "vue";

function toggleNavMode() {
  document.getElementById("nav1").classList.toggle("nav-min");
  document.getElementById("nav2").classList.toggle("nav-min");
  document.getElementById("nav1").classList.toggle("nav-max");
  document.getElementById("nav2").classList.toggle("nav-max");
}
</script>

<template>
  <!-- <div class="w-full grid grid-cols-1 lg:grid-cols-[265px_auto] gap-[10px] lg:gap-[10px]"> -->
  <div class="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr]">
    <div id="nav1" class="fixed nav-min lg:top-[100px]" style="z-index: 999">
      <Navigation @toggleNavMode="toggleNavMode" />
    </div>
    <div id="nav2" class="nav-min"></div>
    <!-- <div class="w-full h-64 bg-red-300"></div> -->
    <router-view class="mt-20 lg:mt-0 lg:pt-[67px]" style="z-index: 997"></router-view>
  </div>
</template>

<style lang="scss">
.nav-min {
  @apply w-[100px];

  #toggle {
    @apply justify-center;
  }

  .menu-label {
    @apply w-fit lg:w-[40px] h-[40px] hover:bg-[#f2f1ef] rounded-xl flex justify-start lg:justify-center lg:items-center relative;

    &:hover {
      .menu-desc-popup {
        @apply block;
      }
    }

    img {
      @apply hidden lg:block;
    }
  }

  .menu-desc {
    @apply lg:hidden;
  }

  .menu-desc-popup {
    @apply hidden w-[200px] absolute left-[45px];

    div {
      @apply w-fit rounded-xl rounded-tl-[10%] px-3 py-2 bg-white shadow-custom2;
    }
  }

  .nav-container {
    @apply mt-24 lg:mt-0 py-5 px-5 lg:px-3 flex flex-col justify-center items-center lg:justify-center lg:items-center rounded-xl lg:border;
  }

  #socials {
    @apply flex flex-wrap justify-center;
  }

  #copyright {
    @apply lg:hidden text-center;
  }
}

.nav-max {
  @apply w-[255px];

  #toggle {
    @apply justify-end;
  }

  .menu-label {
    @apply w-full h-[40px] hover:bg-[#f2f1ef] rounded-xl flex justify-center items-center px-3;
  }

  .menu-desc {
    @apply w-full ml-3 flex items-center;
  }

  .menu-desc-popup {
    @apply hidden;
  }

  .nav-container {
    @apply py-5 px-3 flex flex-col justify-start items-start rounded-xl border;
  }

  #socials {
    @apply w-full flex flex-wrap justify-center;
  }

  #copyright {
    @apply text-center;
  }
}
</style>
