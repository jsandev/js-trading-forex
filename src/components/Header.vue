<template>
  <header id="header" class="w-full z-10 bg-primary sticky top-0 h-[5rem] flex items-center">
    <div
      class="w-full max-w-[76.5rem] mx-auto flex items-center justify-between px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div class="">
        <RouterLink to="/" class="text-white text-[1.25rem] font-raleway font-bold">JS.</RouterLink>
      </div>

      <button class="flex md:hidden">
        <Icon icon="fe:bar" width="24" color="white" />
      </button>

      <nav class="hidden md:flex items-center gap-[0.25rem]">
        <Link href="/" title="Inicio" />
        <Link href="/" title="Quiénes somos" />
        <Link href="/" title="Cursos" />
        <Link href="/" title="Cómo funciona" />
        <Link href="/" title="Features" />
        <Link href="/" title="Contáctanos" />
      </nav>

      <SocialNetwork :icon-size="24" class-name="hidden lg:flex" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SocialNetwork from './SocialNetwork.vue'
import Link from './Link.vue'
import { Icon } from '@iconify/vue'
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
