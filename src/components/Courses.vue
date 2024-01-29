<template>
  <section
    class="w-full max-w-[76.5rem] mx-auto flex flex-col items-center gap-[5rem] py-[6.25rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
  >
    <div class="flex flex-col items-center gap-[1.25rem]">
      <h1 class="text-[1.75rem] text-primary text-center">Cursos</h1>
      <p
        class="w-full max-w-[40.3125rem] font-raleway font-medium text-[1rem] text-center text-secondary"
      >
        Aprende estrategias efectivas y análisis de mercado en tiempo real para potenciar tu éxito
        financiero
      </p>
    </div>

    <div class="w-full grid grid-cols-10 auto-rows-[26.25rem] gap-[1.875rem]">
      <div
        class="bg-white relative w-full col-span-3 rounded-[1.25rem] px-[3.125rem] pt-[2.5rem] overflow-hidden shadow-[2px_4px_60px_0px_rgba(0,0,0,0.15)]"
      >
        <h1 class="text-[1.25rem] text-center text-secondary">
          Introducción al Arte del Trading y Forex
        </h1>
        <div
          class="absolute w-[12rem] h-[24.125rem] bottom-[-8.125rem] left-[50%] -translate-x-1/2"
        >
          <img
            class="w-full h-full object-cover"
            src="../assets/images/course1.jpg"
            alt="Introducción al Arte del Trading y Forex"
          />
        </div>
      </div>
      <div class="relative w-full overflow-hidden rounded-[1.25rem] col-span-7">
        <img
          class="w-full h-full object-cover object-center"
          src="../assets/images/course2.webp"
          alt="Bitcoin: Fundamentos y Oportunidades"
        />
        <div
          class="w-full h-full bg-gradient-to-b from-transparent to-primary absolute top-0 left-0 flex flex-col justify-end gap-[1.5rem] pb-[1.875rem] px-[1.875rem]"
        >
          <h1 class="w-full max-w-[26.625rem] text-[2.25rem] leading-[2.25rem] text-white">
            Bitcoin: Fundamentos y Oportunidades
          </h1>
          <p class="w-full font-raleway font-medium text-[0.875rem] text-white">
            Adquiere conocimientos profundos sobre la criptomoneda líder. Explora los fundamentos de
            Bitcoin, comprende su tecnología subyacente y descubre las oportunidades únicas que
            ofrece en el mundo financiero actual. Prepárate para capitalizar el potencial de esta
            revolucionaria moneda digital.
          </p>
        </div>
      </div>
      <div class="relative w-full overflow-hidden rounded-[1.25rem] col-span-7">
        <img
          class="w-full h-full object-cover object-center"
          src="../assets/images/course3.webp"
          alt="Bitcoin: Fundamentos y Oportunidades"
        />
        <div
          class="w-full h-full bg-gradient-to-b from-transparent to-primary absolute top-0 left-0 flex flex-col justify-end gap-[1.5rem] pb-[1.875rem] px-[1.875rem]"
        >
          <h1 class="w-full max-w-[26.625rem] text-[2.25rem] leading-[2.25rem] text-white">
            Análisis Técnico para principiantes
          </h1>
          <p class="w-full font-raleway font-medium text-[0.875rem] text-white">
            Adquiere las habilidades esenciales para interpretar gráficos, reconocer patrones y
            tomar decisiones informadas en el mercado de divisas. Este curso te proporcionará una
            base sólida en análisis técnico, permitiéndote abordar el trading con confianza y
            comprensión.
          </p>
        </div>
      </div>
      <div
        class="bg-white relative w-full flex flex-col items-center justify-center col-span-3 rounded-[1.25rem] px-[1.875rem] overflow-hidden shadow-[2px_4px_60px_0px_rgba(0,0,0,0.15)]"
      >
        <img src="../assets/images/course4.webp" alt="Análisis técnico para principiantes" />
        <h1 class="text-[1.25rem] text-center text-secondary">Trading Avanzado</h1>
      </div>
    </div>
  </section>
</template>
