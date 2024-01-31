<template>
  <section
    id="courses"
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

    <div
      class="w-full grid grid-cols-1 xs:grid-cols-10 auto-rows-auto sm:auto-rows-[20rem] lg:auto-rows-[22.5rem] gap-[1.875rem]"
    >
      <div
        class="bg-white order-3 relative w-full h-[20rem] md:h-auto xs:col-span-10 rounded-[1.25rem] px-[1rem] lg:px-[3.125rem] pt-[2.5rem] overflow-hidden shadow-[2px_4px_60px_0px_rgba(0,0,0,0.15)] sm:col-span-5 md:order-1 md:col-span-3"
      >
        <h1 class="text-[1.25rem] text-center text-secondary">
          Introducción al Arte del Trading y Forex
        </h1>
        <div
          class="absolute w-[10rem] md:w-[9rem] lg:w-[12rem] bottom-[-8.125rem] left-[50%] -translate-x-1/2"
        >
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            src="../assets/images/course1.jpg"
            alt="Introducción al Arte del Trading y Forex"
          />
        </div>
      </div>
      <div
        class="relative order-1 w-full flex flex-col justify-end gap-[1.5rem] p-[1.5rem] overflow-hidden rounded-[1.25rem] xs:col-span-10 xs:pt-[5rem] xs:p-[1.875rem] md:col-span-7 md:order-2"
      >
        <img
          loading="lazy"
          class="w-full absolute top-0 left-0 z-[-2] h-full object-cover object-center"
          src="../assets/images/course2.webp"
          alt="Bitcoin: Fundamentos y Oportunidades"
        />
        <h1
          class="w-full md:max-w-[26.625rem] text-[1.5rem] text-center leading-[1.75rem] text-white xs:text-[1.75rem] sm:text-left md:text-[2.25rem] md:leading-[2.25rem]"
        >
          Bitcoin: Fundamentos y Oportunidades
        </h1>
        <p
          class="w-full font-raleway font-medium text-[0.875rem] text-center text-white sm:text-left"
        >
          Adquiere conocimientos profundos sobre la criptomoneda líder. Explora los fundamentos de
          Bitcoin, comprende su tecnología subyacente y descubre las oportunidades únicas que ofrece
          en el mundo financiero actual. Prepárate para capitalizar el potencial de esta
          revolucionaria moneda digital.
        </p>
        <div
          class="w-full h-full z-[-1] bg-gradient-to-b from-transparent to-primary absolute top-0 left-0"
        ></div>
      </div>
      <div
        class="relative order-2 w-full flex flex-col justify-end gap-[1.5rem] p-[1.5rem] overflow-hidden rounded-[1.25rem] xs:pt-[5rem] xs:p-[1.875rem] xs:col-span-10 md:col-span-7 md:order-3"
      >
        <h1
          class="w-full md:max-w-[26.625rem] text-[1.5rem] text-center leading-[1.75rem] text-white xs:text-[1.75rem] sm:text-left md:text-[2.25rem] md:leading-[2.25rem]"
        >
          Análisis Técnico para principiantes
        </h1>
        <p
          class="w-full font-raleway font-medium text-[0.875rem] text-center text-white sm:text-left"
        >
          Adquiere las habilidades esenciales para interpretar gráficos, reconocer patrones y tomar
          decisiones informadas en el mercado de divisas. Este curso te proporcionará una base
          sólida en análisis técnico, permitiéndote abordar el trading con confianza y comprensión.
        </p>

        <img
          loading="lazy"
          class="w-full absolute top-0 left-0 z-[-2] h-full object-cover object-center"
          src="../assets/images/course3.webp"
          alt="Bitcoin: Fundamentos y Oportunidades"
        />
        <div
          class="w-full h-full z-[-1] bg-gradient-to-b from-transparent to-primary absolute top-0 left-0"
        ></div>
      </div>
      <div
        class="bg-white order-4 w-full h-full flex flex-col items-center justify-center xs:col-span-10 rounded-[1.25rem] p-[1rem] overflow-hidden shadow-[2px_4px_60px_0px_rgba(0,0,0,0.15)] sm:col-span-5 md:col-span-3 md:px-[1.875rem]"
      >
        <div class="w-full max-w-[200px]">
          <img
            loading="lazy"
            src="../assets/images/course4.webp"
            alt="Análisis técnico para principiantes"
          />
        </div>
        <h1 class="text-[1.25rem] text-center text-secondary">Trading Avanzado</h1>
      </div>
    </div>
  </section>
</template>
