<script setup>
import Card from "@/components/Card.vue";
import experiences from "@/assets/data/experiences.json";
import projects from "@/assets/data/projects.json";
import certificates from "@/assets/data/certificates.json";
import skills from "@/assets/data/skills.json";

import { ref } from "vue";
import { marked } from "marked";

const introduction = ref("");
(async () => {
  const res = await fetch("./data/introduction.md");
  const text = await res.text();
  introduction.value = marked.parse(text);
})();
</script>

<template>
  <div class="grid gap-[30px]">
    <Card label="Hi, I'm Nurul">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0">
        <div class="flex justify-center">
          <img
            src="/images/profile.jpg"
            class="w-[120px] h-[120px] rounded-full shadow-md"
          />
        </div>
        <div id="introduction" v-html="introduction" class="flex flex-col justify-center prose text-[14px] text-gray-900">
        </div>
      </div>
    </Card>

    <Card label="Experiences">
      <div v-for="(item, index) in experiences" :key="index" class="py-5">
        <div class="grid grid-cols-1 lg:grid-cols-[200px_auto]">
          <div class="opacity-50 font-bold">{{ item.date }}</div>
          <div>
            <span class="block font-bold">{{ item.company }}</span>
            <ul>
              <li v-for="(job, jobIndex) in item.jobs" :key="jobIndex">
                &bull; {{ job }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Card>

    <Card label="Stacks">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto]">
        <div></div>
        <div class="grid grid-cols-2 gap-y-5">
          <div v-for="(item, index) in skills" :key="index">{{ item }}</div>
        </div>
      </div>
    </Card>

    <Card label="Projects">
      <div class="grid grid-cols-1 gap-10">
        <div v-for="(item, index) in projects" :key="index">
          <div>
            <span
              class="font-bold"
              :class="[
                item.link !== null &&
                  'text-blue-700 cursor-pointer hover:underline',
              ]"
              >{{ item.name }}</span
            >
          </div>
          <span class="block opacity-50 font-bold text-xs py-2">{{
            item.date
          }}</span>
          <span class="block">{{ item.description }}</span>
        </div>
      </div>
    </Card>

    <Card label="Certifications">
      <ul class="text-blue-700">
        <li v-for="(item, index) in certificates" :key="index">
          <a :href="item.url" target="_blank" class="hover:underline">{{ item.label }}</a>
        </li>
      </ul>
    </Card>

    <Card label="Shoot a message">
      <div class="grid grid-cols-3 gap-10">
        <a href="mailto:uhkrowi@gmail.com" class="flex contact-container">
          <div class="flex items-start mr-3">
            <img
              src="https://img.icons8.com/ios/1x/mail.png"
              alt="mail"
              class="w-[25px]"
            />
          </div>
          <div>
            <span class="block font-bold">Email</span>
            <span class="contact-label">uhkrowi@gmail.com</span>
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