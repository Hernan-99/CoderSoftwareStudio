<template>
  <div>
    <section class="container xl:min-w-[75%] mb-32 md:mb-48 lg:mb-64 xl:mb-96">
      <h3
        class="text-white text-center text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold mb-4 lg:mb-8"
      >
        Potenciamos tu presencia online
      </h3>
      <p
        class="text-sm md:text-lg lg:text-2xl xl:text-4xl text-white text-center font-bold mb-10"
      >
        Brindamos soluciones digitales adaptadas a su Emprendimiento, Pyme o
        Empresa.
      </p>
    </section>

    <section
      class="w-100 h-[1030px] md:h-[1230px] xl:h-[1300px] bg-white relative flex justify-center items-center"
    >
      <article
        class="container xl:min-w-[75%] absolute -top-[80px] md:-top-[130px] lg:-top-[200px] xl:-top-[310px] flex flex-col items-center"
      >
        <video
          class="rounded-xl w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1100px] mb-8 md:mb-16"
          src="../assets/video/video.mp4"
          type="video/mp4"
          controls
        ></video>
        <div>
          <h3
            class="text-xl md:text-3xl lg:text-4xl text-center font-bold mb-8"
          >
            Tecnologias con las que trabajamos
          </h3>
          <div
            class="grid grid-cols-3 gap-y-10 justify-items-center mb-10 md:mb-16"
          >
            <FontAwesome class="text-black text-6xl" :icon="['fab', 'html5']" />
            <FontAwesome
              class="text-black text-6xl"
              :icon="['fab', 'css3-alt']"
            />
            <FontAwesome class="text-black text-6xl" :icon="['fab', 'js']" />
            <FontAwesome class="text-black text-6xl" :icon="['fab', 'vuejs']" />
            <FontAwesome class="text-black text-6xl" :icon="['fab', 'node']" />
          </div>

          <div>
            <h3
              class="text-xl md:text-3xl text-center lg:text-start font-bold mb-6"
            >
              Por que elegirnos
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
              <div
                class="rounded-xl w-[278px] h-[260px] lg:w-[372px] lg:h-[500px] xl:w-[500px] xl:h-[390px] elegir text-center mx-auto lg:mx-0 mb-8"
              ></div>
              <div>
                <p class="text-xl md:text-3xl font-bold mb-2">Nosotros</p>
                <p class="text-sm md:text-lg xl:text-2xl text-justify">
                  Somos una Startup que ofrece servicios tecnológicos enfocados
                  en desarrollo web. Durante los últimos años, trabajamos con
                  emprendedores, pymes y empresas de todo el país, ayudándolos
                  potenciar su presencia online. Nuestro equipo está compuesto
                  por desarrolladores y diseñadores dedicados que comparten una
                  visión común: crear soluciones web innovadoras y efectivas que
                  impulsen a nuestros clientes hacia el éxito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="bg-gradient py-8 mb-8">
      <article class="container xl:min-w-[75%]">
        <div class="mb-8 md:mb-16">
          <h3
            class="text-center text-white text-xl md:text-3xl lg:text-start font-bold mb-2 md:mb-4"
          >
            Nuestra misión
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="lg:order-1 flex justify-end">
              <div
                class="rounded-xl w-[278px] h-[260px] xl:w-[500px] xl:h-[390px] bg-gray-400 text-center mx-auto lg:mx-0 mb-4"
              >
                imagen
              </div>
            </div>
            <div>
              <p
                class="lg:order-2 text-sm md:text-lg xl:text-2xl text-justify text-white"
              >
                Nuestra misión es transformar ideas en realidades digitales,
                brindando servicios de desarrollo y diseño web de alta calidad
                que no solo cumplan con las expectativas de nuestros clientes,
                sino que las superen. Creemos en el poder de internet para
                conectar personas, impulsar negocios y generar cambios
                positivos.
              </p>
            </div>
          </div>
        </div>

        <div class="mb-20 md:mb-16">
          <h3
            class="text-center lg:text-end text-white text-xl md:text-3xl font-bold mb-2"
          >
            Nuestra visión
          </h3>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div
              class="rounded-xl w-[278px] h-[260px] xl:w-[500px] xl:h-[390px] bg-gray-400 text-center mx-auto lg:mx-0 mb-4"
            >
              imagen
            </div>
            <div>
              <p class="text-sm md:text-lg xl:text-2xl text-justify text-white">
                Aspiramos a ser una referencia en el ámbito del desarrollo web
                en Argentina y más allá, reconocidos por nuestra creatividad,
                innovación y compromiso con la excelencia. Buscamos construir
                relaciones duraderas con nuestros clientes, basadas en la
                confianza, la transparencia y los resultados tangibles.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup></script>
<style scoped>
.elegir {
  background-image: url("../assets/images/vision.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-gradient {
  background: radial-gradient(
      circle at top right,
      rgba(128, 0, 128, 0.5),
      transparent
    ),
    radial-gradient(circle at bottom left, rgba(0, 0, 128, 0.5), transparent);
}
</style>
