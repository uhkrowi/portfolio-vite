<script setup>
import Card from "@/components/Card.vue";
import experiences from "@/assets/data/experiences.json";
import projects from "@/assets/data/projects.json";
import skills from "@/assets/data/skills.json";
import contacts from "@/assets/data/contacts.json";

// import { ref } from "vue";
// import { marked } from "marked";

// const introduction = ref("");
// (async () => {
//   const res = await fetch("./data/introduction.md");
//   const text = await res.text();
//   // introduction.value = text;
// introduction.value = marked.parse(text);
// })();

document.title = "About | Nurul Uhkrowi";
</script>

<template>
  <div class="grid gap-[30px]">
    <Card class="">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto] gap-5 lg:gap-0">
        <div class="flex justify-center">
          <img
            id="img-profile"
            src="/images/profile.jpg"
            class="w-[100px] h-[100px] rounded-full shadow-custom2"
          />
        </div>
        <div class="w-full md:flex md:justify-center">
          <div class="prose text-ctextbase text-[18px] md:w-[60%] lg:w-full">
            <span class="block">Hi, I'm Nurul,</span>
            <span class="block">
              I'm currently working as a freelance web developer.
            </span>
            <span class="block">
              This site is where I show my works and share some of my
              experiences and learnings.
            </span>
            <br>
            <span class="block">To check my works, go <a href="/#/showcase">here</a>. </span>
            <span class="block">To read my blog posts, go <a href="/#/blog">here</a>. </span>
            <span class="block">Cheers!🍻</span>
          </div>
          <!-- <div
            id="introduction"
            v-html="introduction"
            class="prose text-ctextbase text-[18px] md:w-[60%] lg:w-full"
          ></div> -->
        </div>
      </div>
    </Card>

    <Card label="Experiences">
      <div v-for="(item, index) in experiences" :key="index" class="py-3">
        <div class="grid grid-cols-1 lg:grid-cols-[200px_auto]">
          <div class="opacity-[.7]">
            {{ item.date }}
          </div>
          <div>
            <span class="block">{{ item.company }}</span>
            <!-- <ul>
              <li v-for="(job, jobIndex) in item.jobs" :key="jobIndex">
                &bull; {{ job }}
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </Card>

    <Card label="Waepons">
      <div class="grid grid-cols-1 lg:grid-cols-[200px_auto]">
        <div></div>
        <div class="grid grid-cols-2 gap-y-5">
          <div v-for="(item, index) in skills" :key="index">
            {{ item.label }}
          </div>
        </div>
      </div>
    </Card>

    <Card label="Projects">
      <div class="grid grid-cols-1 gap-10">
        <div v-for="(item, index) in projects" :key="index">
          <div>
            <a
              v-if="item.link"
              :href="item.link"
              class="font-bold text-blue-700 cursor-pointer hover:underline"
              >{{ item.name }}</a
            >
            <span v-else class="font-bold">{{ item.name }}</span>
          </div>
          <span class="block opacity-[.7] text-normal py-2">{{
            item.date
          }}</span>
          <span class="block">{{ item.description }}</span>
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
      <div class="grid grid-cols-2 gap-10">
        <a
          v-for="(item, index) in contacts.filter((x) => x.onProfile == true)"
          :key="index"
          :href="item.url"
          target="_blank"
          class="flex contact-container"
        >
          <div class="flex items-start mr-3">
            <img :src="item.iconUrl" :alt="item.label" class="w-[25px]" />
          </div>
          <div>
            <span class="block font-bold">{{ item.label }}</span>
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
