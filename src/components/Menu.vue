<template>
  <nav
    class="w-full fixed top-[3.5rem] left-0 bg-primary flex flex-col shadow-[0px_10px_10px_0px_rgba(0,0,0,0.15)] md:flex-row items-center justify-center gap-[0.25rem] transition-all overflow-hidden md:w-auto md:static md:bg-transparent md:shadow-none md:justify-end"
    :class="{ 'h-[320px] pb-[1.5rem]': open, 'h-0 p-0 md:h-auto': !open }"
  >
    <Link href="/" title="Inicio" />
    <Link href="/" title="Quiénes somos" />
    <Link href="/" title="Cursos" />
    <Link href="/" title="Cómo funciona" />
    <Link href="/" title="Features" />
    <Link href="/" title="Contáctanos" />

    <SocialNetwork :icon-size="24" class-name="mt-[1.5rem] md:hidden" />
  </nav>
</template>

<script setup lang="ts">
import SocialNetwork from './SocialNetwork.vue'
import Link from './Link.vue'

interface IProps {
  open: boolean
}
const { open } = defineProps<IProps>()
</script>
