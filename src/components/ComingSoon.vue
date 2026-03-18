<template>
  <div>
    <div class="flex flex-col items-center justify-center space-y-4">
      <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        2026 Projects
      </h1>
      <p class="text-2xl font-bold text-left text-gray-800 dark:text-gray-800">
        I’m revisiting WordPress development this year and sharpening my skills by
        building a series of focused, real‑world projects. Each one is designed to
        strengthen my workflow, modernize my approach, and rebuild the muscle memory that
        comes from hands‑on development.
      </p>
      <!-- Copy everything within this div below to create new project entries -->
      <div
        class="grid grid-cols-1 grid-rows-6 gap-4 p-4 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
      >
        <div
          class="flex flex-col p-4 bg-gray-200 dark:bg-gray-700 md:grid md:grid-cols-2 lg:grid-cols-2"
        >
          <div class="justify-center items-center">
            <a href="https://www.michel-01.dev/" target="_blank">
              <img class="rounded-t-lg" src="../assets/images/WP_University.jpg" alt="" />
            </a>
          </div>
          <div>
            <h2 class="text-2xl pl-5 pb-5 font-bold text-gray-800 dark:text-gray-200">
              WordPress University Custom Theme
            </h2>

            <p class="text-lg pl-5 text-gray-800 dark:text-gray-200">
              This project includes six custom WordPress plugins and a fully custom search
              system. The search bar pulls results from multiple post types—departments,
              events, professors, campuses, and blogs, and displays them in a structured,
              multi‑column layout for quick scanning.This project is a testament to my
              commitment to mastering WordPress development and creating high-quality,
              functional websites.
            </p>
            <p class="text-lg pl-5 text-gray-800 dark:text-gray-200">
              If you would like to review the code, please check out the GitHub repository
              for this project:
              <a
                href="https://github.com/ChrisWMichel/Fictional-University"
                target="_blank"
                class="text-blue-500 hover:underline"
                >GitHub Repository</a
              >
            </p>
          </div>
        </div>
      </div>
      <!-- Copy everything within this div above to create new project entries -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
