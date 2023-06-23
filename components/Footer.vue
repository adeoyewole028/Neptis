<template>
  <div>
    <nav
      class="lg:mx-auto gap-14 flex flex-col lg:flex-row max-w-7xl lg:items-center justify-between p-6 lg:px-8 bg-transparent"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Neptis</span>
          <img class="h-8 w-auto" src="~/assets/images/logo.png" alt="" />
        </a>
      </div>

      <div class="flex items-center">
        <PopoverGroup class="flex lg:flex-row flex-col lg:gap-x-12 gap-6">
          <a
            href="#"
            class="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >Home</a
          >
          <a
            href="#"
            class="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >Features</a
          >
          <a
            href="#"
            class="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >How it works</a
          >
          <a
            href="#"
            class="text-sm font-light leading-6 text-[rgba(255,255,255,0.80)]"
            >Pricing</a
          >
        </PopoverGroup>
      </div>
      <div class="flex lg:flex-1 gap-5 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white"
          ><img src="~/assets/images/twitter.png" alt=""
        /></a>
        <a href="#" class="text-sm font-semibold leading-6 text-white"
          ><img src="~/assets/images/linkedin.png" alt=""
        /></a>
        <a href="#" class="text-sm font-semibold leading-6 text-white"
          ><img src="~/assets/images/facebook.png" alt=""
        /></a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
