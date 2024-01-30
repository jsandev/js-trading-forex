<script setup lang="ts">
import AboutUs from '@/components/AboutUs.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Courses from '@/components/Courses.vue'
import HowWorks from '@/components/HowWorks.vue'
</script>

<template>
  <main class="relative w-full flex flex-col">
    <Header />
    <Main />
    <AboutUs />
    <Courses />
    <HowWorks />
  </main>
</template>
