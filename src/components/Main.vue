<script setup lang="ts"></script>

<template>
  <section class="relative w-full bg-primary">
    <div
      class="w-full max-w-[76.5rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-[6rem] pt-[4rem] md:pt-[5rem] pb-[3rem] px-[1.5rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]"
    >
      <div class="flex flex-col items-center md:items-start">
        <h1
          class="w-full max-w-[31.25rem] font-bold text-white text-[1.5rem] leading-[1.5rem] text-center lg:text-[2.25rem] lg:leading-[2.25rem] md:text-left"
        >
          Así es como convertimos a personas normales en traders ganadores consistentes
        </h1>
        <p
          class="font-raleway font-medium text-[1rem] text-white text-center mt-[1.875rem] mb-[2.5rem] md:text-left"
        >
          Descarga ahora y haz que tu dinero trabaje para ti. Conquista los mercados con nuestra app
          de trading y forex.
        </p>

        <small class="font-raleway font-normal text-white text-[0.75rem] mb-[0.25rem]"
          >Descárgalo ya!</small
        >
        <div class="flex flex-col sm:flex-row items-center gap-[0.625rem]">
          <img class="cursor-pointer" src="../assets/images/play-store.webp" alt="Play Store" />
          <img class="cursor-pointer" src="../assets/images/app-store.webp" alt="App Store" />
        </div>
      </div>
      <div>
        <img src="../assets/images/main.webp" alt="Main" />
      </div>
    </div>

    <div class="w-full absolute bottom-[-240px] left-0 h-[240px]">
      <div
        class="absolute top-0 left-[50%] -translate-x-1/2 w-[1.5rem] h-[2.875rem] rounded-[1.75rem] border-[0.125rem] border-white animate-bounce -ml-[1rem] md:-ml-[2rem]"
      >
        <div
          class="absolute top-[8px] left-[50%] -translate-x-1/2 w-[0.1875rem] h-[0.375rem] rounded-[0.125rem] bg-white"
        ></div>
      </div>
      <img class="w-full h-full object-cover object-bottom" src="/wave.svg" alt="" />
    </div>
  </section>
</template>
