<template>
  <div class="bg-mobile">
    <TopNav />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-web {
  display: flex;
  flex-direction: column;
  background: #221c38;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("~/assets/images/landing.png");
  background-position: center top;
  background-attachment: scroll;
}

.bg-mobile {
  display: flex;
  flex-direction: column;
  background: #221c38;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("~/assets/images/mobile-bg.png");
  background-position: center top;
  background-attachment: scroll;
}
</style>
