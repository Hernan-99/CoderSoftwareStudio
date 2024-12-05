<template>
  <footer>
    <!-- Newsletter -->
    <section class="container text-white mb-10">
      <!-- <div
        class="bg-[#FF34A6] border border-[#FF00DD] shadow-md shadow-[#FF00DD] py-4 rounded-md"
      > -->
      <div>
        <div class="flex items-center justify-center flex-col md:flex-row">
          <img class="w-[60px]" src="/coders.png" alt="logo vivotek" />
          <h3 class="text-center">CODERS SOFTWARE STUDIO</h3>
        </div>
      </div>
    </section>

    <!-- Redes sociales -->
    <!-- <section class="container mt-16 mb-10">
      <div class="border-b border-[#FF34A6] relative">
        <div
          class="absolute top-0 -translate-y-1/2 left-0 right-0 max-w-36 mx-auto"
        >
          <div class="bg-[#FF34A6] text-lg text-center space-x-2">
            <FontAwesome
              class="text-white hover:text-pink-800 duration-300 cursor-pointer"
              :icon="['fab', 'instagram-square']"
            />

            <FontAwesome
              class="text-white hover:text-pink-800 duration-300 cursor-pointer"
              :icon="['fab', 'linkedin']"
            />
          </div>
        </div>
      </div>
    </section> -->

    <!-- contacto -->
    <section
      class="container grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-start"
    >
      <!-- item 1 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white text-center">
          Servicios populares
        </p>
        <div class="flex flex-col items-center gap-1">
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
            >Desarrollo Web</NuxtLink
          >
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
            >Diseño Web</NuxtLink
          >
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
            >Asesoramiento</NuxtLink
          >
        </div>
      </div>

      <!-- item 2 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white text-center">Contacto</p>
        <div class="flex flex-col items-center gap-1">
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
          >
            1234567890
          </NuxtLink>
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
          >
            coders.software.studio@gmail.com
          </NuxtLink>
        </div>
      </div>

      <!-- item 3 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white text-center">
          Redes sociales
        </p>
        <div class="flex flex-col items-center gap-1">
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
          >
            Instagram
          </NuxtLink>
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
          >
            Facebook
          </NuxtLink>
          <NuxtLink
            class="text-pink-400 font-bold hover:text-white duration-300"
            to="#"
          >
            Linkedin
          </NuxtLink>
        </div>
      </div>
    </section>

    <section>
      <p class="text-center mt-10 text-white p-5">
        Copyright &copy; All rights reserved -
        <span class="hover:text-[#FF34A6] duration-300">CODERS</span>
      </p>
    </section>
  </footer>
</template>

<style scoped>
h3,
span {
  font-family: "Dela Gothic One";
}
</style>
