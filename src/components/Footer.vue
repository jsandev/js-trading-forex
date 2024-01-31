<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="w-full bg-primary">
    <div
      class="w-full max-w-[76.5rem] mx-auto flex flex-col gap-[8.25rem] pt-[4.125rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div
        class="w-full flex flex-col items-center justify-between gap-[4rem] md:flex-row md:items-start md:gap-0"
      >
        <div class="w-full max-w-[25rem] flex flex-col items-center md:items-start gap-[0.75rem]">
          <RouterLink to="/" class="text-white text-[3rem] font-raleway font-bold">JS.</RouterLink>
          <p
            class="font-raleway font-medium text-[0.875rem] text-white leading-[1.5rem] text-center md:text-left"
          >
            Soy FullStack Developer con más de 4 años de experiencia en desarollo frontend, backend
            y mobile.
          </p>

          <div class="flex flex-col gap-[0.5rem]">
            <h3 class="font-raleway font-medium text-[0.875rem] text-white">Ubícame en:</h3>
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
        </div>

        <div class="flex flex-col items-center md:items-start pt-[1.5rem]">
          <h4 class="text-[1.25rem] text-white">Contáctame:</h4>
          <div
            class="flex flex-col items-center md:items-start gap-[0.75rem] mt-[2.25rem] mb-[1.5rem]"
          >
            <div
              class="flex items-center justify-start gap-[0.25rem] whitespace-nowrap text-white text-[0.875rem] font-raleway font-normal"
            >
              <Icon icon="mdi:phone" width="24" />
              <span class="hidden xs:inline-flex">Llámame al:</span>
              <a href="tel:+51923408455" class="font-quantify"> +51 923 408 455 </a>
            </div>
            <div
              class="flex items-center justify-start gap-[0.25rem] whitespace-nowrap text-white text-[0.875rem] font-raleway font-normal"
            >
              <Icon icon="mdi:email" width="24" />
              <span class="hidden xs:inline-flex">Escríbeme al</span>
              <a href="mailto:jsandovaldev.pe@gmail.com" class="font-medium"
                >jsandovaldev.pe@gmail.com</a
              >
            </div>
          </div>
          <div class="flex flex-col xs:flex-row items-center gap-[0.625rem]">
            <img class="cursor-pointer" src="../assets/images/play-store.webp" alt="Play Store" />
            <img class="cursor-pointer" src="../assets/images/app-store.webp" alt="App Store" />
          </div>
        </div>
      </div>

      <div
        class="w-full flex flex-col items-center gap-[1rem] justify-between py-[1.5rem] border-t-[1px] border-t-white/75 lg:flex-row lg:gap-0"
      >
        <p class="font-raleway font-normal text-[0.75rem] text-white text-center xs:text-left">
          © {{ year }}. Todos los derechos reservados. Desarrollado por
          <a href="https://portfolio-jsandev.vercel.app/" target="_blank" class="font-bold"
            >Jimmy Sandoval</a
          >
        </p>

        <div class="flex flex-col xs:flex-row items-center gap-[1rem]">
          <h6 class="font-raleway font-normal text-[0.75rem] text-white">Métodos de pago:</h6>
          <div class="flex items-center gap-[0.5rem]">
            <div class="w-[3rem] h-[2rem] rounded-[0.25rem] overflow-hidden">
              <img
                src="../assets/images/paypal.jpg"
                alt="Paypal"
                class="w-full h-full origin-center object-cover"
              />
            </div>
            <div class="w-[3rem] h-[2rem] rounded-[0.25rem] overflow-hidden">
              <img
                src="../assets/images/maestro.png"
                alt="Maestro"
                class="w-full h-full origin-center object-cover"
              />
            </div>
            <div class="w-[3rem] h-[2rem] rounded-[0.25rem] overflow-hidden">
              <img
                src="../assets/images/ae.png"
                alt="American Express"
                class="w-full h-full origin-center object-cover"
              />
            </div>
            <div class="w-[3rem] h-[2rem] rounded-[0.25rem] bg-white overflow-hidden">
              <img
                src="../assets/images/visa.png"
                alt="Paypal"
                class="w-full h-full origin-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
