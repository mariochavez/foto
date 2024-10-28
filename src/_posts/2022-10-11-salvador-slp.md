---
layout: post
title: "Salvador. El niño, la montaña y el mango"
description: "Obra de teatro 'Salvador. El niño, la montaña y el mango'. Producción de Cuatro Milpas Teatro."
date: 2022-10-11 12:00:00 -0600
friendly_date: Oct 11, 2022
image: /images/slp-salvador/20211106-_06B7682-head.jpg
categories: Theater
---

<div class="prose lg:prose-xl mx-auto mt-6">
  <p>La obra de teatro "Salvador, el niño, la montaña y el mango" se presentó en noviembre 2021 dentro del Festival 
    Kuitólil, en las instalaciones del Teatro Polivalente del Centro de las Artes de San Luís Potosí.</p>
  <p>La serie fotográfica muestra el trabajo de la compañía Cuatro Milpas Teatro y el personal técnico del Teatro Polivalente 
    durante el montaja de escenografía y programación de luces del día 1</p>
    <p>El segundo día comprende el trabajo en camerinos y la preparación previa a del grupo actoral antes de la tercera llamada.</p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.slp-salvador %}
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
    <li>Salvador. El niño, la montaña y el mango de Suzanne Lebeau</li>
    <li>Dirección: Janet Pinela (miembro del Sistema Nacional de Creadores de Arte 2019-2022)</li>
    <li>Escenografía: Jesús Hernández</li>
    <li>Vestuario: Jerildy Bosch</li>
    <li>Producción: Cuatro Milpas Teatro A.C.</li>
    <li>Actrices y Actores</li>
    <ul>
      <li>César Fajardo</li>
      <li>Flor Larios</li>
      <li>Paco Novoa</li>
      <li>Rubí Salas</li>
      <li>Nadia Flores *</li>
      <li>Brenda Gutiérrez *</li>
      <li>Lupita Chávez</li>
    </ul>
  </ul>
</div>
