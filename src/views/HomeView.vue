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
          <!-- Corrected the <P> tag to <p> and ensured it is properly closed -->
          <p
            class="max-w-2xl mb-6 font-bold text-gray-900 lg:mb-8 md:text-lg lg:text-2xl dark:text-black"
          >
            I'm Chris Michel, a web developer with a passion for crafting
            beautiful and functional web applications. Recently, I've been
            diving deep into Vue 3, Tailwind CSS, and Firebase, and I'm thrilled
            to share some of my projects with you.
          </p>
          <p
            class="max-w-2xl font-bold text-gray-900 lg:mb-8 md:text-lg lg:text-2xl dark:text-black"
          >
            Currently, I'm embarking on a full-stack project using Vue 3,
            Tailwind CSS, and Laravel to keep my skills sharp across different
            areas. I believe in continuous learning and the excitement of
            creating new things. Take a look at my projects below!
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
            class="rounded-lg shadow-lg"
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
