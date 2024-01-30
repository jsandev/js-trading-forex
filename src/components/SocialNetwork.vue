<template>
  <div class="flex items-center gap-[0.5rem]" :class="className">
    <a
      href="https://github.com/jsandev"
      target="_blank"
      class="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
    >
      <Icon icon="fe:github" :width="size" color="white" />
    </a>
    <a
      href="https://www.linkedin.com/in/jimmysandovalramirez/"
      target="_blank"
      class="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
    >
      <Icon icon="mdi:linkedin" :width="size" color="white" />
    </a>
    <a
      href="https://twitter.com/iam_sam0610"
      target="_blank"
      class="w-[1.5rem] h-[1.5rem] flex items-center justify-center"
    >
      <Icon icon="fe:twitter" :width="size" color="white" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IProps {
  iconSize: number
  className?: string
}

const { iconSize, className } = defineProps<IProps>()
const size = '' + (iconSize || 24)
</script>
