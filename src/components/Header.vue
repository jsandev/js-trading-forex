<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="w-full z-10 bg-primary sticky top-0 h-[5rem] flex items-center">
    <div
      class="w-full max-w-[76.5rem] mx-auto flex items-center justify-between px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div class="">
        <RouterLink to="/" class="text-white text-[1.25rem] font-raleway font-bold">JS.</RouterLink>
      </div>

      <nav class="flex items-center gap-[0.25rem]">
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.625rem]"
          >
            Inicio
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.625rem]"
          >
            Quiénes somos
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.625rem]"
          >
            Cursos
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.625rem]"
          >
            Cómo funciona
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.75rem]"
          >
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/"
            class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.75rem]"
          >
            Contáctanos
          </RouterLink>
        </li>
      </nav>

      <div className="flex items-center gap-[0.5rem]">
        <a
          href="https://github.com/jsandev"
          target="_blank"
          className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
        >
          <Icon icon="fe:github" width="24" color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/jimmysandovalramirez/"
          target="_blank"
          className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
        >
          <Icon icon="mdi:linkedin" width="24" color="white" />
        </a>
        <a
          href="https://twitter.com/iam_sam0610"
          target="_blank"
          className="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
        >
          <Icon icon="fe:twitter" width="24" color="white" />
        </a>
      </div>
    </div>
  </header>
</template>
