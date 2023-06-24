<template>
  <div
    class="bg-gradient-to-r from-[rgba(199,19,240,0.45)] to-rgba(37,206,243,0.30)"
  >
    <section>
      <div class="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="relative mx-auto max-w-4xl">
          <div class="text-center">
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Testimonials
            </h2>
          </div>
          <div
            class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-1"
          >
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div
                class="flex flex-1 flex-col justify-between bg-[rgba(79,70,115,0.35)] p-6"
              >
                <div class="flex-1 text-center lg:px-20">
                  <p class="mt-3 text-sm text-[#C6C2D6]">
                    {{ posts[selectedPostIndex].description }}
                  </p>
                </div>
                <div class="mt-6 flex items-center justify-center">
                  <div>
                    <div class="flex items-start">
                      <div
                        class="inline-flex flex-shrink-0 rounded-full border-2 border-white"
                      >
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="posts[selectedPostIndex].author.imageUrl"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-base font-medium text-white">
                          {{ posts[selectedPostIndex].author.name }}
                        </div>
                        <div class="text-base font-medium text-indigo-200">
                          {{ posts[selectedPostIndex].author.title }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-white flex gap-5 justify-center">
              <button class="" @click="navigateImage(-1)">
                <span
                  class="material-symbols-outlined rounded-full border p-2 shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  arrow_back
                </span>
              </button>
              <button class="" @click="navigateImage(1)">
                <span
                  class="material-symbols-outlined rounded-full border p-2 shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const posts = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque sem commodo turpis ipsum. Et tristique arcu arcu sed feugiat tempus purus nullam gravida. Vitae gravida dui gravida amet vitae. Malesuada quisque accumsan quis cursus enim. Commodo in sit platea eget lobortis. Suspendisse nulla leo eget fringilla justo ultrices. Vestibulum sed mi donec maecenas sit nisi. Etiam tincidunt ultrices sit sit sociis rutrum dui. Fames nunc quam ullamcorper cursus. Diam vitae euismod curabitur ullamcorper.",
    author: {
      title: "Head of Noin Group",
      name: "Nicole Jaymer",
      href: "#",
      imageUrl: "/images/nicole.png",
    },
  },
  {
    description:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit vero dignissimos delectus modi, iure sapiente iusto perspiciatis nisi, harum nobis consectetur, debitis excepturi adipisci aut quasi iste. Deserunt, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae architecto, sint deleniti veritatis, iste impedit est vel, numquam quaerat voluptate laborum voluptatum et laboriosam exercitationem voluptatibus consequuntur nisi aliquid hic.",
    author: {
      title: "CEO",
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const selectedPostIndex = ref(0);

const selectPost = (index) => {
  selectedPostIndex.value = index;
};

const navigateImage = (direction) => {
  const currentIndex = selectedPostIndex.value;
  const nextIndex =
    (((currentIndex + direction) % posts.length) + posts.length) % posts.length;
  selectedPostIndex.value = nextIndex;
};
</script>
