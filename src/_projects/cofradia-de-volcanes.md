---
layout: project
title:  "Cofradía de Volcanes"
section: Project
description: Cofradía de Volcanes es un proyecto realizado por los últimos 7 años y que comprende de la exploración del territorio en la región de los estados de Jalisco y Colima en México, donde el autor construye un imaginario visual que reafirma su sentido de pertenencia y arraigo.
image: /images/cofradia-volcanes/site-image.jpg
position: 5
---
<div class="w-full mt-12" data-controller="reveal" data-reveal-animation-class="reveal">
  <figure class="m-0 md:m-16">
    <div class="relative">
      <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
      <img src="/images/cofradia-volcanes/cofradia-volcanes-0.webp" alt="Cofradía de Volcanes" data-description="Atardecer en el Nevado" class="w-full h-full object-contain reveal" loading="lazy">
    </div>
  </figure>
</div>

<div class="prose lg:prose-xl mx-auto mt-12">

  <blockquote>Una exploración del territorio para crear un imaginario personal mediante el cual reafirmar mi identidad y sentido de pertenencia.
- Mario Alberto Chávez 
  </blockquote>
</div>

<div class="w-full flex gap-x-2 justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "1" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure>
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "2" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>Hace más de 10 años a mi llegada a la región de Jalisco y Colima, en el occidente de México, comencé a fotografiar alrededor de los volcanes Nevado y de Fuego. Inicialmente influenciado por las novelas y cuentos del realismo mágico, además de otras expresiones artísticas de la región. Posteriormente, me di cuenta de que la fotografía era una forma de reencontrarme en este territorio, una reafirmación de mi pertenencia a partir de un imaginario visual íntimo que configura mi biografía. Así es como nace este relato visual "Cofradía de Volcanes".</p>
</div>

<div class="w-full flex gap-x-2 justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "3" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure>
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="w-full" data-controller="reveal" data-reveal-animation-class="reveal">
  <figure class="m-0 md:m-16">
    <div class="relative">
      <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
      <img src="/images/cofradia-volcanes/cofradia-volcanes-group-1.webp" alt="Cofradía de Volcanes" data-description="Exploración del territorio para crear un imaginario visual personal mediante el cual reafirmar mi identidad y sentido de pertenencia." class="w-full h-full object-contain reveal" loading="lazy">
    </div>
  </figure>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "4" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="prose lg:prose-xl mx-auto mt-6">
  <p>More than ten years ago, upon my arrival in the region of Jalisco and Colima, in western Mexico, I began photographing around the Nevado and Fuego volcanoes. I was initially influenced by the novels and stories of magical realism, as well as other artistic expressions of the region. Later, I realized that photography was a way of rediscovering myself in this territory and reaffirming my belonging based on intimate visual imagery that shapes my biography. This is how this visual story, "Cofradía de volcanes" was born</p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "5" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="w-full flex gap-x-2 justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign block = site.data.cofradia | where: "block", "6" %}
  {% for photo in block %}
    {% assign weight = site.data.weights | sample %}
    <figure>
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>

<div class="w-full" data-controller="reveal" data-reveal-animation-class="reveal">
  <figure class="m-0 md:m-16">
    <div class="relative">
      <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
      <img src="/images/cofradia-volcanes/cofradia-volcanes-group-2.webp" alt="Cofradía de Volcanes" data-description="Exploración del territorio para crear un imaginario visual personal mediante el cual reafirmar mi identidad y sentido de pertenencia." class="w-full h-full object-contain reveal" loading="lazy">
    </div>
  </figure>
</div>

<div class="prose lg:prose-xl mx-auto mt-12">
  <hr/>

  <h3>Exhibitions</h3>
  <ul>
    <li>2022 Aug-Nov. Pinacoteca Universitaria. Calle Vicente Guerrero #35, Zona Centro, Colima, México.</li>
  </ul>

  <h3>Press</h3>
  <ul>
    <li>"Cofradía de volcanes, conferencia y expo de Mario Chávez, en la Pinacoteca". El Comentario - Universidad de Colima, 11/08/2022, <a href="https://elcomentario.ucol.mx/cofradia-de-volcanes-conferencia-y-expo-de-mario-chavez-en-la-pinacoteca/" target="_blank">https://elcomentario.ucol.mx/cofradia-de-volcanes-conferencia-y-expo-de-mario-chavez-en-la-pinacoteca/</a></li>
    <li>"Cofradía de volcanes llega a la Pinacoteca de la Universidad de Colima". Estación Pacífico, 12/08/2022, <a href="https://estacionpacifico.com/2022/08/12/cofradia-de-volcanes-llega-a-la-pinacoteca-de-la-universidad-de-colima/" target="_blank">https://estacionpacifico.com/2022/08/12/cofradia-de-volcanes-llega-a-la-pinacoteca-de-la-universidad-de-colima/</a></li>
    <li>"Cofradía de Volcanes, exposición fotográfica de Mario Chávez". Agencia f/64, 12/08/2022, <a href="https://agencia.f64.io/cofradia-de-volcanes-exposicion-fotografica-de-mario-chavez" target="_blank">https://agencia.f64.io/cofradia-de-volcanes-exposicion-fotografica-de-mario-chavez</a></li>
    <li>"Mario Chávez nos entrega la luz con Cofradía de volcanes". El Comentarios UdC - Sugey Navarro, 13/09/2022, <a href="https://elcomentario.ucol.mx/columna-divagaciones-de-una-mente-sin-reposo-19/" target="_blank">https://elcomentario.ucol.mx/columna-divagaciones-de-una-mente-sin-reposo-19/</a></li>
  </ul>
</div>
