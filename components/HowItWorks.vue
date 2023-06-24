<template>
  <div class="overflow-hidden sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10"
        >
          How it Works
        </h2>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <dl
              class="mt-10 max-w-xl space-y-8 text-sm leading-7 text-[#C6C2D6] lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="block font-semibold text-white text-xl">
                  <div class="absolute left-1 top-1 h-5 w-5">
                    <img src="~/assets/images/circle.png" alt="" />
                    <div
                      class="border-[#A522C3] border-2 h-[245px] lg:h-72 xl:h-64 w-1 lg:-top-[280px] xl:-top-[250px] -top-[245px] left-1.5 absolute"
                      :class="[
                        feature.name === 'User-Friendly Interface'
                          ? 'border-none h-0'
                          : feature.name === 'AI-Powered Website Generation'
                          ? 'ai'
                          : '',
                      ]"
                    ></div>
                  </div>
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="hidden lg:block">
          <img
            src="~/assets/images/frame.png"
            alt="Your own property"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>

        <div class="lg:hidden mx-auto max-w-4xl pb-5">
          <img
            src="~/assets/images/mobile-frame.png"
            alt="Product screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    name: "AI-Powered Website Generation",
    description:
      "Create stunning and functional websites effortlessly with our AI-powered website generation feature, which seamlessly transforms web designs into fully operational sites.",
  },
  {
    name: "Customizable Design Elements",
    description:
      "Customize every aspect of your website with ease using our wide range of design elements, ensuring a unique and personalized online presence.",
  },
  {
    name: "User-Friendly Interface",
    description:
      "Creating a website has never been easier. Our user-friendly interface ensures a seamless and intuitive website building experience.",
  },
];
</script>

<style scoped>
.border-2 {
  padding-top: 1rem;
  top: 5px;
  height: 150px;
}
.ai {
  height: 230px;
}
/* media min 360px  max 414px */
@media (min-width: 360px) and (max-width: 412px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 196px;
  }
  .ai {
    height: 230px;
  }
}

@media (min-width: 280px) and (max-width: 360px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 260px;
  }

  .ai {
    height: 256px;
  }
}
@media (min-width: 390px) and (max-width: 393px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 180px;
  }

  .ai {
    height: 230px;
  }
}

@media (min-width: 412px) and (max-width: 540px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 155px;
  }

  .ai {
    height: 230px;
  }
}
@media (min-width: 538px) and (max-width: 645px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 125px;
  }

  .ai {
    height: 230px;
  }
}

@media (min-width: 640px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 120px;
  }
  .ai {
    height: 230px;
  }
}
@media (min-width: 1024px) and (max-width: 1138px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 150px;
  }
}

@media (min-width: 1280px) {
  .border-2 {
    padding-top: 1rem;
    top: 5px;
    height: 120px;
  }
  .ai {
    height: 230px;
  }
}
</style>
