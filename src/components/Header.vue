<template>
  <header
    id="header"
    class="w-full z-10 bg-primary sticky top-0 h-[3.5rem] md:h-[5rem] flex items-center"
  >
    <div
      class="w-full max-w-[76.5rem] mx-auto flex items-center justify-between px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div class="">
        <RouterLink to="/" class="text-white text-[1.25rem] font-raleway font-bold">JS.</RouterLink>
      </div>

      <button class="flex md:hidden" @click="setOpen">
        <Icon icon="fe:bar" width="24" color="white" />
      </button>

      <Menu :open="open" :on-close="setOpen" />

      <SocialNetwork :icon-size="24" class-name="hidden lg:flex" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

import SocialNetwork from './SocialNetwork.vue'
import Menu from './Menu.vue'

const open = ref(false)
const setOpen = () => (open.value = !open.value)
</script>

<style>
#header {
  animation: blur linear both;
  animation-timeline: scroll();
  animation-range: 0 250px;
}

@keyframes blur {
  to {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    background: #009d6b;
  }
}
</style>
