<template>
  <section
    id="how-works"
    class="w-full max-w-[76.5rem] mx-auto flex flex-col items-center gap-[5rem] pt-[6.875rem] pb-[9.375rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
  >
    <div class="flex flex-col items-center gap-[1rem]">
      <h1 class="text-[1.75rem] text-primary text-center">¿Como funciona nuesta aplicación?</h1>
      <p
        class="w-full max-w-[40.3125rem] font-raleway font-medium text-[1rem] text-center text-secondary"
      >
        Accede a análisis en tiempo real, ejecuta transacciones intuitivas y alcanza el éxito
        financiero con facilidad
      </p>
    </div>

    <div
      class="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-[6.25rem]"
    >
      <div class="w-full max-w-[400px] lg:max-w-[38.75rem]">
        <img
          loading="lazy"
          class="w-full object-cover"
          src="../assets/images/howworks.webp"
          alt="Como funciona el app"
        />
      </div>

      <div class="w-full max-w-[30rem] flex flex-col items-center lg:items-start gap-[2rem]">
        <h3 class="hidden lg:inline-flex text-[1.75rem] text-primary">
          Pasos para lograr tus metas
        </h3>
        <div class="relative flex flex-col gap-[3.4375rem]">
          <div
            class="hidden lg:block h-full w-[0.0813rem] bg-primary absolute top-0 left-[2.3125rem] -z-[1]"
          ></div>

          <div
            class="group grid grid-cols-1 lg:grid-cols-[4.75rem_1fr] gap-[1.5rem] justify-items-center lg:items-center lg:gap-[2.5rem]"
          >
            <div
              class="w-[4.75rem] h-[4.75rem] bg-white rounded-full flex items-center border-[1.5px] border-primary justify-center text-primary text-[2.5rem] lg:group-hover:bg-primary lg:group-hover:text-white transition-colors select-none"
            >
              1
            </div>
            <div class="flex flex-col gap-[0.625rem]">
              <h6 class="text-[1.25rem] text-primary text-center lg:text-left">Regístrate</h6>
              <p
                class="font-raleway font-normal text-[0.875rem] text-secondary leading-[1.5rem] text-center lg:text-left"
              >
                Únete con nosotros y logra tus objetivos a corto, mediano y largo plazo, accediendo
                a los mejores cursos
              </p>
            </div>
          </div>
          <div
            class="group grid grid-cols-1 lg:grid-cols-[4.75rem_1fr] gap-[1.5rem] justify-items-center lg:items-center lg:gap-[2.5rem]"
          >
            <div
              class="w-[4.75rem] h-[4.75rem] bg-white rounded-full flex items-center border-[0.0938rem] border-primary justify-center text-primary text-[2.5rem] lg:group-hover:bg-primary lg:group-hover:text-white transition-colors select-none"
            >
              2
            </div>
            <div class="flex flex-col gap-[0.625rem]">
              <h6 class="text-[1.25rem] text-primary text-center lg:text-left">Pagos seguros</h6>
              <p
                class="font-raleway font-normal text-[0.875rem] text-secondary leading-[1.5rem] text-center lg:text-left"
              >
                Aceptamos todo tipo de tarjeta, ofrecemos seguridad y confiabilidad en tus pagos.
                Utilizando tecnologías de alta calidad.
              </p>
            </div>
          </div>
          <div
            class="group grid grid-cols-1 lg:grid-cols-[4.75rem_1fr] gap-[1.5rem] justify-items-center lg:items-center lg:gap-[2.5rem]"
          >
            <div
              class="w-[4.75rem] h-[4.75rem] bg-white rounded-full flex items-center border-[0.0938rem] border-primary justify-center text-primary text-[2.5rem] lg:group-hover:bg-primary lg:group-hover:text-white transition-colors select-none"
            >
              3
            </div>
            <div class="flex flex-col gap-[0.625rem]">
              <h6 class="text-[1.25rem] text-primary text-center lg:text-left">
                Certifícate con nosotros
              </h6>
              <p
                class="font-raleway font-normal text-[0.875rem] text-secondary leading-[1.5rem] text-center lg:text-left"
              >
                Certifícate y transforma tu camino financiero. Abre puertas a nuevas oportunidades
                en el trading y forex
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
