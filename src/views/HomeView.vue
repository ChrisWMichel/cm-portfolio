<template>
  <transition name="slide-left">
    <section v-if="showSection">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-white"
          >
            Welcome to my portfolio!
          </h1>
          <p
            class="max-w-2xl mb-6 font-bold text-gray-900 lg:mb-8 md:text-lg lg:text-2xl dark:text-black"
          >
            I’m Chris Michel, a web developer focused on building real‑world WordPress
            projects. This year I’m rebuilding my entire workflow around modern WordPress
            development — custom plugins, clean theme architecture, and practical features
            that solve actual problems. My latest project includes a multi‑source search
            system, custom post types, and several plugins built from scratch. More
            projects are on the way as I continue sharpening and modernizing my WordPress
            skill set.
          </p>
          <p
            class="max-w-2xl font-bold text-gray-900 lg:mb-8 md:text-lg lg:text-2xl dark:text-black"
          >
            I approach every build with a focus on structure, clarity, and
            maintainability. Whether I’m creating a custom plugin or shaping a theme from
            the ground up, I rely on clean architecture, thoughtful naming, and repeatable
            workflows that make the codebase easy to understand and extend. My goal is
            always the same: ship work that’s reliable, scalable, and genuinely useful.
          </p>
          <p class="mb-6 text-4xl font-extrabold font-cursive">Chris Michel</p>
          <router-link
            :to="{ name: 'projects' }"
            exact-active-class="active"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Go to Projects
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </router-link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="../assets/images/chrisWMichel.jpg"
            alt="portrait"
            class="rounded-lg shadow-lg object-cover max-h-[500px] w-full"
          />
        </div>
      </div>
    </section>
  </transition>
  <Analytics />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Analytics } from "@vercel/analytics/vue";

const showSection = ref(true);

//Analytics();
</script>

<style scoped>
img {
  display: block;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-left-enter, .slide-left-leave-to /* .slide-left-leave-active in <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
</style>
