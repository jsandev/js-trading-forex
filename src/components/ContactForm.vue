<script setup lang="ts">
import { Icon } from '@iconify/vue'

const onSubmit = (e: Event) => {
  e.preventDefault()

  const formData = new FormData(e.target as HTMLFormElement)
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  const body = `Hola, mi nombre es: ${name} y mi correo es: ${email}. Estoy interesado en contratar tus servicios, tengo este problema: ${message}`

  window.open(
    `mailto:jsandovaldev.pe@gmail.com?subject=Cotización de proyecto - ${name}&body=${body}`
  )

  const form = e.target as HTMLFormElement
  form.reset()
}
</script>

<template>
  <section
    id="contact-us"
    class="w-full max-w-[76.5rem] mx-auto flex flex-col items-center gap-[6.875rem] py-[6.25rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
  >
    <div class="flex flex-col items-center gap-[1.25rem]">
      <h1 class="text-[1.75rem] text-primary text-center">Contáctanos</h1>
      <p
        class="w-full max-w-[40.3125rem] font-raleway font-medium text-[1rem] text-center text-secondary"
      >
        Anímate en escribirnos con total confianza, te responderemos en breve
      </p>
    </div>

    <form @submit="onSubmit" class="w-full max-w-[25rem] flex flex-col items-center gap-[1.5rem]">
      <h3 class="text-[1.25rem] text-primary text-center">Envíenos tus dudas o comentarios</h3>
      <div class="w-full flex flex-col gap-[1rem]">
        <input
          type="text"
          class="w-full h-[2.8125rem] bg-[#F2F2F2] rounded-[1.25rem] px-[1.25rem] placeholder:font-raleway placeholder:text-[0.875rem] placeholder:font-medium appearance-none border-none outline-none font-raleway text-[0.875rem] text-secondary font-medium"
          name="name"
          placeholder="Nombre completo"
          required
        />
        <input
          type="text"
          class="w-full h-[2.8125rem] bg-[#F2F2F2] rounded-[1.25rem] px-[1.25rem] placeholder:font-raleway placeholder:text-[0.875rem] placeholder:font-medium appearance-none border-none outline-none font-raleway text-[0.875rem] text-secondary font-medium"
          name="email"
          placeholder="Correo"
          required
        />
        <textarea
          name="message"
          class="w-full resize-none max-h-[11.25rem] min-h-[11.25rem] bg-[#F2F2F2] rounded-[1.25rem] px-[1.25rem] py-[0.875rem] placeholder:font-raleway placeholder:text-[0.875rem] placeholder:font-medium appearance-none border-none outline-none font-raleway text-[0.875rem] text-secondary font-medium"
          placeholder="Tú mensaje..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-[11.5625rem] h-[2.8125rem] bg-primary flex items-center justify-center gap-[0.5rem] rounded-[1.25rem] text-white"
      >
        <Icon icon="tabler:send" /> Enviar
      </button>
    </form>
  </section>
</template>
