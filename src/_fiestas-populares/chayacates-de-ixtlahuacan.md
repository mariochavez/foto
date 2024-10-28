---
layout: project
title:  "Chayacates de Ixtlahuacán"
section: Fiestas Populares
description: La fiesta popular de "Los Chayacates de Ixtlahuacán" sucede cada 5 y 6 de Enero en la cabecera municipal de Ixtlahuacán de los Reyes, Colima.
image: /images/chayacates/20220105-DSCF9643.jpg
position: 1
---

<div class="bg-white whitespace-nowrap overflow-hidden relative mt-12 border rounded" data-controller="book">
  <div class="transition duration-500 ease-in flex flex-nowrap flex-row justify-between" data-book-target="wrapper">
    {% for page in (0..22) %}
      {% assign paddedPage = page | prepend: '00' | slice: -2, 2 %}
      <div class="w-full h-60 inline-block shrink-0 md:h-96 lg:h-[31rem] xl:h-[45rem] bg-gray-100 book-page" data-book-target="page">
        <img src="{{ "/images/chayacates/chayacates_libro/" | append: paddedPage | append: ".jpg" }}" loading="lazy" class="block max-h-full mx-auto cursor-pointer" />
      </div>
    {% endfor %}
  </div>
  <div class="absolute bottom-2 md:bottom-6 left-[43%] md:left-1/2 text-sm z-10 p-2 bg-gray-300/50 rounded text-white" data-book-target="paginator"></div>
</div>
<p class="font-sans text-xs font-semibold text-center text-gray-600 mt-4">Utilice las flechas del teclado para cambiar página<p>

<div class="prose lg:prose-xl mx-auto mt-6">
  <h3>Libro: Los Chayacates de Ixtlahuacán. Una Historia de tradición y devoción.</h3>

  <p>La fiesta popular de "Los Chayacates de Ixtlahuacán" sucede cada 5 y 6 de Enero en la cabecera municipal de Ixtlahuacán de los Reyes, Colima.</p>
  <p>El fervor de los habitantes del pueblo se manifiesta en el colorido, la participación, y la unión para celebrar el evento de la Epifanía con devoción y respecto, en un sincretismo de las creencias religiosas con pinceladas de ritos prehispánicos.</p>
  <p>Los Chayacates, son cuatro hermitaños indígenas, ataviados con máscaras blancas de madera de colorín, trenzas de fibra de acapán y vestuario de ixtle. Ellos, al igual que los Reyes Magos, se enteran del nacimiento de Jesús en Belén y son guiados por el olfato de sus perros  hasta él con la inteción de protegerlo de Herodes.</p>
  <p>La fiesta alcanza a todo el pueblo, los Chayacates visitan domicilios con su danza y cánticos preguntando en náhuatl "Campa mutla catiles, endios sipilzin" por el niño Dios. El día 6 junto con la pastorela acompañan a José y María a Belem.</p>
</div>

<div class="mt-12 w-full flex flex-wrap justify-between items-center flex-row large-grid" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.chayacates %}
    <figure class="relative {{ photo.options }}">
      {% if photo.empty != true %}
        <div class="">
          <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
          <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain" loading="lazy" />
        </div>
      {% endif %}
    </figure>
  {% endfor %}
</div>

<div class="prose lg:prose-xl mx-auto mt-6">
  <h3>Press</h3>
  <ul>
    <li>"Los Chayacates, la legendaria fiesta originaria de Colima llega a un libro". Aristegui Noticias, 02/09/2021, <a href="https://aristeguinoticias.com/0209/libros/los-chayacates-la-legendaria-fiesta-originaria-de-colima-llega-a-un-libro" target="_blank">https://aristeguinoticias.com/0209/libros/los-chayacates-la-legendaria-fiesta-originaria-de-colima-llega-a-un-libro/</a></li>
    <li>"El libro “Los Chayacates de Ixtlahuacán. Una historia de tradición y devoción” busca preservar una de las fiestas más antiguas de Colima". Secretaría de Cultura de México, 01/09/2021, <a href="https://www.gob.mx/cultura/prensa/el-libro-los-chayacates-de-ixtlahuacan-una-historia-de-tradicion-y-devocion-busca-preservar-una-de-las-fiestas-mas-antiguas-de-colima?idiom=es" target="_blank">https://www.gob.mx/cultura/prensa/el-libro-los-chayacates-de-ixtlahuacan-una-historia-de-tradicion-y-devocion-busca-preservar-una-de-las-fiestas-mas-antiguas-de-colima?idiom=es</a></li>
  </ul>
</div>
