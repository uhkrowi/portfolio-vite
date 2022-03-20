<script setup>
import Card from "@/components/Card.vue";
import experiences from "@/assets/data/experiences.json";
import projects from "@/assets/data/projects.json";
import skills from "@/assets/data/skills.json";
import contacts from "@/assets/data/contacts.json";

document.title = "About | Nurul Uhkrowi";
</script>

<template>
  <div class="grid gap-[30px]">
    <Card class="">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0">
        <div class="flex justify-center">
          <img
            id="img-profile"
            src="/images/profile-1.png"
            alt="profile image"
            class="w-[100px] h-[100px] rounded-full lg:rounded-none mb-8 lg:mb-0"
          />
          <!-- class="w-[100px] h-[100px] rounded-full shadow-custom2 scale-x-[-1]" -->
        </div>
        <div class="w-full md:flex md:justify-center">
          <div class="dark:text-white text-[16px] md:w-[60%] lg:w-full">
            <span class="block">Hi, my name's Nurul.</span>
            <br />
            <span class="block">
              I'm currently working as a freelance web developer.
            </span>
            <span class="block">
              This site is where I show my works and share some of my
              experiences and learnings about software development and web
              technology in general.
            </span>
            <br />
            <div>
              You can find me at
              <a
                href="https://www.linkedin.com/in/uhkrowi"
                target="_blank"
                class="underline"
                >LinkedIn</a
              >,
              <a
                href="https://facebook.com/uhkrowi"
                target="_blank"
                class="underline"
                >Facebook</a
              >
              and
              <a
                href="https://github.com/uhkrowi"
                target="_blank"
                class="underline"
                >Github</a
              >.
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Card label="Experience">
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="py-5 border-b dark:border-gray-700"
      >
        <div>{{ item.position }}</div>
        <div
          class="flex justify-between items-center text-gray-600 dark:text-gray-400 text-[14px]"
        >
          <span>{{ item.company }}</span>
          <span class="lg:hidden">{{ item.date }}</span>
          <span class="hidden lg:block">{{ item.longDate }}</span>
        </div>
        <div class="mt-3 text-[14px]">{{ item.desc }}</div>
        <div class="mt-3 text-[14px] text-gray-600 dark:text-gray-400">
          Tech stacks: {{ item.stacks?.join(", ") }}
        </div>
      </div>
    </Card>

    <Card label="Waepon">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto] pt-5">
        <div></div>
        <div class="grid grid-cols-2 gap-y-3">
          <div v-for="(item, index) in skills" :key="index" class="text-[15px]">
            &bull; {{ item.label }}
          </div>
        </div>
      </div>
    </Card>

    <Card label="Project">
      <div class="">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="border-b dark:border-gray-700 py-5"
        >
          <div>
            <a
              v-if="item.link"
              :href="item.link"
              class="text-blue-700 dark:text-blue-400 cursor-pointer hover:underline"
              >{{ item.name }}</a
            >
            <span v-else class="">{{ item.name }}</span>
          </div>
          <span class="block text-gray-600 dark:text-gray-400 text-[14px] lg:hidden">{{
            item.date
          }}</span>
          <span class="hidden lg:block text-gray-600 dark:text-gray-400 text-[14px]">{{
            item.longDate
          }}</span>
          <span class="block mt-3 text-[14px]">{{ item.description }}</span>
        </div>
      </div>
    </Card>

    <!-- <Card label="Certifications">
      <ul class="text-blue-700">
        <li v-for="(item, index) in certificates" :key="index">
          <a :href="item.url" target="_blank" class="hover:underline">{{ item.label }}</a>
        </li>
      </ul>
    </Card> -->

    <Card label="Shoot a message">
      <div class="grid grid-cols-2 gap-10 py-5">
        <a
          v-for="(item, index) in contacts.filter((x) => x.onProfile == true)"
          :key="index"
          :href="item.url"
          target="_blank"
          class="flex contact-container"
        >
          <div>
            <span class="block font-bold text-[14px]">{{ item.label }}</span>
            <span class="contact-label">{{ item.displayText }}</span>
          </div>
        </a>
      </div>
    </Card>
  </div>
</template>

<style lang="scss">
.contact-container {
  &:hover {
    .contact-label {
      @apply underline;
    }
  }
}
</style>
