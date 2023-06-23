<template>
  <div>
    <section>
      <div class="relative px-6  pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2
              class="text-2xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Amazing Features for You
            </h2>
          </div>
          <div
            class="mx-auto mt-8 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4"
          >
            <div
              v-for="post in posts"
              :key="post.title"
              class="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div
                class="flex flex-1 flex-col justify-between bg-[#4F467340] p-6"
              >
                <div class="flex-1 text-center lg:text-left">
                  <p class="text-sm lg:text-xl font-semibold text-white lg:pr-10">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-sm text-[#C6C2D6]">
                    {{ post.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    title: "AI-Powered Website Generation",
    description:
      "Create stunning and functional websites effortlessly with our AI-powered website generation feature, which seamlessly transforms web designs into fully operational sites.",
  },
  {
    title: "Customizable Design Elements",

    description:
      "Customize every aspect of your website with ease using our wide range of design elements, ensuring a unique and personalized online presence.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Creating a website has never been easier. Our user-friendly interface ensures a seamless and intuitive website building experience.",
  },
  {
    title: "Responsive Website Outputs",
    description:
      "Our platform automatically adapts your website's design and layout to different screen sizes, providing optimal viewing experiences on desktops, laptops, tablets, and smartphones.",
  },
];
</script>

<style scoped></style>
