<script setup>
import Navigation from "@/components/Navigation.vue";
import DarkModeToggle from "@/components/DarkModeToggle.vue";

function toggleNavMode() {
  document.getElementById("nav1").classList.toggle("nav-min");
  document.getElementById("nav2").classList.toggle("nav-min");
  document.getElementById("nav1").classList.toggle("nav-max");
  document.getElementById("nav2").classList.toggle("nav-max");
}
</script>

<template>
  <div class="relative">
    <div
      class="fixed h-16 w-full lg:max-w-[700px] navbar flex justify-between items-center px-5 lg:px-2"
      style="z-index: 999"
    >
      <a href="/#/about" class="hover:underline">About</a>
      <div class="flex">
        <Navigation @toggleNavMode="toggleNavMode" />
        <DarkModeToggle class="ml-5" />
      </div>
    </div>
    <router-view
      class="mt-20 lg:mt-0 lg:pt-[100px] w-full lg:max-w-[700px] px-5 relative"
      style="z-index: 997"
    ></router-view>
  </div>
</template>

<style lang="scss">
.nav-min {
  @apply w-[90px];

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

    #nav-button {
      #back {
        @apply hidden;
      }
    }
  }

  #socials {
    @apply flex flex-wrap justify-center;
  }

  #copyright {
    @apply lg:hidden text-center;
  }
}

.nav-max {
  @apply w-[220px];

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

    #nav-button {
      #forward {
        @apply hidden;
      }
    }
  }

  #socials {
    @apply w-full flex flex-wrap justify-center;
  }

  #copyright {
    @apply text-center;
  }
}

.navbar {
  // filter: blur(10px);
  /* From https://css.glass */
  // background: rgba(255, 255, 255, 0.2);
  // border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  // border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
