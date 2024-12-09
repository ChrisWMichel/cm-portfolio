<template>
  <div class="flex flex-col lg:flex-row">
    <!-- Sidebar Navigation -->
    <transition name="slide-left">
      <nav
        class="flex-col items-center hidden w-1/5 p-4 text-2xl bg-gray-200 lg:flex dark:bg-gray-600"
        v-if="showSection"
      >
        <ul class="w-full">
          <li class="w-full border-b border-gray-300 dark:border-gray-700">
            <router-link
              :to="{ name: 'frontend' }"
              exact-active-class="active"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Frontend
            </router-link>
          </li>
          <li class="w-full border-b border-gray-300 dark:border-gray-700">
            <router-link
              :to="{ name: 'fullstack' }"
              exact-active-class="active"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Fullstack
            </router-link>
          </li>
          <li class="w-full border-b border-gray-300 dark:border-gray-700">
            <router-link
              :to="{ name: 'wordpress' }"
              exact-active-class="active"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              WordPress
            </router-link>
          </li>
          <li class="w-full border-b border-gray-300 dark:border-gray-700">
            <router-link
              :to="{ name: 'comming-soon' }"
              exact-active-class="active"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              Coming Soon
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>

    <!-- Dropdown Menu for Mobile Screens -->
    <div class="p-4 bg-gray-200 lg:hidden dark:bg-gray-600">
      <select
        @change="navigateTo($event)"
        class="block w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
      >
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
        <option value="wordpress">WordPress</option>
        <option value="comming-soon">Coming Soon</option>
      </select>
    </div>

    <!-- Router View for Child Components -->
    <div class="w-full p-4 lg:w-4/5">
      <router-view v-slot="{ Component, route }">
        <template v-if="Component">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const showSection = ref(true);
const router = useRouter();

const navigateTo = (event) => {
  const routeName = event.target.value;
  router.push({ name: routeName });
};

onMounted(() => {
  router.push({ name: "frontend" });
});
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s linear;
}
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s linear;
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
