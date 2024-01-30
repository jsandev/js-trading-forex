<template>
  <RouterLink
    :to="href"
    class="font-raleway font-semibold text-white text-[0.875rem] py-[0.5rem] px-[0.625rem]"
  >
    {{ title }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface IProps {
  href: string
  title: string
}
const { href, title } = defineProps<IProps>()
</script>
