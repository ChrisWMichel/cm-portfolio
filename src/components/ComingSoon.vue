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

      <div
        class="grid grid-cols-1 grid-rows-6 gap-4 p-4 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
      >
        <!-- Copy everything within this div below to create new project entries -->
        <div
          class="flex flex-col p-4 bg-gray-200 dark:bg-gray-700 md:grid md:grid-cols-2"
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
              multi‑column layout for quick scanning.
            </p>
            <p class="text-lg pl-5 text-gray-800 dark:text-gray-200">
              The best way to review this project is to go over the Readme file in the
              GitHub repository, which includes a detailed breakdown:
              <a
                href="https://github.com/ChrisWMichel/Fictional-University/blob/main/README.md"
                target="_blank"
                class="text-blue-500 hover:underline"
                >GitHub Repository</a
              >
            </p>
          </div>
        </div>
        <!-- Copy everything within this div above to create new project entries -->
        <div
          class="flex flex-col p-4 bg-gray-200 dark:bg-gray-700 md:grid md:grid-cols-2 lg:grid-cols-2"
        >
          <div class="justify-center items-center">
            <!-- <a href="https://www.michel-01.dev/" target="_blank"> -->
            <img class="rounded-t-lg" src="../assets/images/Custom-Theme.png" alt="" />
            <!-- </a> -->
          </div>
          <div>
            <h2 class="text-2xl pl-5 pb-5 font-bold text-gray-800 dark:text-gray-200">
              WordPress Custom Theme
            </h2>

            <p class="text-lg pl-5 text-gray-800 dark:text-gray-200">
              This project is a work in progress, but it’s a fully custom WordPress theme
              built from the ground up. It’s designed to be a clean, modern, and
              responsive theme that can be easily customized and extended. The theme
              includes a custom header, footer, and several custom page templates, as well
              as support for custom post types and taxonomies. There are seven templates
              and 5 template parts. It has one plugin that holds 8 custom Gutenberg
              blocks.
            </p>
            <p class="text-lg pl-5 text-gray-800 dark:text-gray-200">
              I haven't published this project yet, but the best way to review it is to go
              over the Readme file in the GitHub repository, which includes a detailed
              breakdown:
              <a
                href="https://github.com/ChrisWMichel/WP_Custom_Theme/blob/main/README.md"
                target="_blank"
                class="text-blue-500 hover:underline"
                >GitHub Repository</a
              >
            </p>
          </div>
        </div>
        <!-- Copy everything within this div above to create new project entries -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
