<template>
  <div class="p-4">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Left Column: Email and LinkedIn Link -->
      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="text-2xl"><b>Email:</b> christopherw.michel@gmail.com</div>
        <br />
        <div class="text-2xl"><b>Phone:</b> 815-687-2786</div>
        <br />
        <div>
          <a
            href="https://www.linkedin.com/in/chris-michel-708b01161/"
            target="_blank"
            class="text-2xl text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Right Column: Contact Form -->
      <div>
        <section class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
            <h2
              class="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white"
            >
              Contact Me
            </h2>
            <p
              class="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl"
            >
              If you have any questions or need help, feel free to reach out.
            </p>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              class="space-y-8"
            >
              <input type="hidden" name="access_key" :value="accessKey" />
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Your email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="What's the topic?"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >Your message</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const accessKey = ref(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
</script>

<style scoped>
/* Add any additional styles here */
</style>
