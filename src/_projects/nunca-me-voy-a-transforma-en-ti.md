---
layout: project
title:  "Nunca me voy a transformar en ti"
section: Project
description: Esta es un proyecto personal a partir de la pregunta a mi hijo ¿Qué quieres ser cuando seas grande? y su respuesta que a algo diferente a lo que yo me deicaba, desarrollo de software. Hoy Alexis es desarrollador de software y comenzó con su interés por la fotografía.
image: /images/nunca/start.webp
position: 4
---

<div class="bg-white whitespace-nowrap overflow-hidden relative mt-12 border rounded" data-controller="book">
  <div class="transition duration-500 ease-in flex flex-nowrap flex-row justify-between" data-book-target="wrapper">
    {% for page in (0..14) %}
      {% assign paddedPage = page | prepend: '00' | slice: -2, 2 %}
      <div class="w-full h-60 inline-block shrink-0 md:h-96 lg:h-[31rem] xl:h-[37rem] bg-gray-100 book-page" data-book-target="page">
        <img src="{{ "/images/nunca/" | append: paddedPage | append: ".webp" }}" loading="lazy" class="block max-h-full mx-auto cursor-pointer" />
      </div>
    {% endfor %}
  </div>
  <div class="absolute bottom-2 md:bottom-6 left-[43%] md:left-1/2 text-sm z-10 p-2 bg-gray-300/50 rounded text-white" data-book-target="paginator"></div>
</div>
<p class="font-sans text-xs font-semibold text-center text-gray-600 mt-4">Utilice las flechas del teclado para cambiar página<p>

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>Cuando somos apenas niños es común que nos hagan la pregunta de ¿Qué queremos ser cuando seamos grandes?. La respuesta puede variar entre una profesión idealizada cuando eramos niños, o quizás la misma profesión de los padres o simplemente no saber.</p>
  <p>Recuerdo que cuando mi hijo Alexis era pequeño, me acompañaba a las reuniones que hacía con otras personas de mi profesión <i>original</i> para platicar de desarrollo de software, patrones de diseño, herramientas y experiencias. Era común que le preguntaran que si se iba a dedicar a lo mismo que yo, a lo que él siempre respondía que no; no sabía a qué, pero no quería estar todo el día frente a un computador.</p>
  <p>Es precisamente sobre esa respuesta que está basado este trabajo fotográfico que comprende "Nunca me voy a transformar en ti" y que está conformado por imágenes de archivo, más en el sentido de imágenes vernáculas a diferencia de un trabajo exprofeso de imagen para este fin.</p>
  <p>A Alexis le tocó conocer la parte de trabajo remoto que yo realizaba mucho antes de existiera lo que hoy llamanos "home office" o que el desarrollo de software fuera una actividad tan demandada como es hoy en día.</p>
  <p>Aunque nunca existió una condición explícita sobre Alexis para que se dedicara a esta carrera, nuestra historia de vida de alguna forma se encargó de que así sucediera; primero, cuando lo invité hace algunos años a aprender sobre el tema y posteriormente cuando obtuvo su primer empleo como desarrollador de software.</p>
  <p>La cámara y la fotografía es otro de los elementos que por varios años él me ha visto utilizar y destinar tiempo a proyectos personales de fotografía. Al igual que el desarrollo de software, Alexis, no parecía tener mucho interés en el tema.</p>
  <p>Hace algunos meses me mandó un mensaje preguntando sobre mi opinión referente a una cámara que le interesaba comprar. En ese momento inició su historia con la fotografía.</p>
  <p>Cuando inicié este proyecto se lo envié a Alexis sin decirle mucho, cuando me preguntó en cuanto al título del trabajo le comenté que era alrededor de la pregunta que le hacían de niño sobre a qué se iba a dedicar y su respuesta que no a lo que yo hacía. Me comentó que no recuerda esa respuesta pero que  hoy no la comparte.</p>
</div>
