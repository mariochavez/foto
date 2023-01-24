---
layout: post
title: "Puente Cicatríz"
description: "Obra de teatro 'Salvador. El niño, la montaña y el mango'. Producción de Cuatro Milpas Teatro."
date: 2023-01-23 12:00:00 -0600
friendly_date: Ene 23, 2023
image: /images/puente-cicatriz/20230114-M1009569.jpg
categories: Theater
---

<div class="prose lg:prose-xl mx-auto mt-6">
  <p>Puente Cicatriz” es la propuesta de un falso documental llevado al teatro, creado por un grupo interdisciplinario de creadores colimenses y de la Ciudad de México.</p>
  <p>El registro gráfico corresponde a la presentación del sábado 14 de enero dentro del quinto Festival Internacional de Monólogos del Teatro Casa Tanicho en Mérida, Yucatán, como parte del Mérida Fest 2023.</p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.puente %}
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
  <h3>Créditos</h3>
  <ul>
    <li>Dirección: Atanasio Cadena</li>
    <li>Asistente de Dirección: Flor Larios</li>
    <li>Diseño visual y multimedia: Yoatzín Balbuena</li>
    <li>Vestuario e Iluminación: Ricardo García Luna</li>
    <li>Diseño de Movimiento: Ángel Roa</li>
    <li>Diseño escenográfico para giras: Flor Larios y César Fajardo</li>
    <li>Actríz</li>
    <ul>
      <li>Carmen Solorio</li>
    </ul>
  </ul>
</div>
