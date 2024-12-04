<template>
  <header class="bg-[#11151C]">
    <nav class="py-5">
      <div
        class="container xl:min-w-[80%] flex flex-wrap items-center justify-between mx-auto"
      >
        <NuxtLink class="mx-0 flex items-center space-x-3 md:mx-auto md:mb-4 lg:mx-0 mb-0 lg:mb-0">
          <NuxtImg class="w-[70px] md:w-[50px]" src="/coders.png" />
          <span class="text-white">CODERS</span>
        </NuxtLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-pink-400 duration-300 focus:outline-none focus:text-pink-400"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white hover:text-pink-500 duration-300 rounded md:bg-transparent md:p-0"
                aria-current="page"
                >Nosotros</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white hover:text-pink-500 duration-300 rounded md:bg-transparent md:p-0"
                aria-current="page"
                >Trabajos</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white hover:text-pink-500 duration-300 rounded md:bg-transparent md:p-0"
                aria-current="page"
                >Planes y servicios</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white hover:text-pink-500 duration-300 rounded md:bg-transparent md:p-0"
                aria-current="page"
                >Contacto</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useFlowbite } from "../composables/useFlowbite";

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>

<style scoped>
span {
  font-family: "Dela Gothic One";
}
</style>
