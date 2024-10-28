---
layout: project
title:  "Lo Privado de lo Público"
section: Project
description: The Private of the Public is a visual project about how those of us who inhabit a city appropriate the public space, in search of our comfort, barely visible small changes, others more intrusive.
image: /images/privado-publico/20200918-DSCF0987.webp
position: 1
public: false
---

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>
    Caminar por las calles de casi cualquier ciudad es una oportunidad para encontrar estos "hacks" o apropiaciones que se realizan por necesidad, oportunismo o comodidad de quienes habitan la ciudad. Estas apropiaciones no siempre están pensadas en el bien común.
  </p>

  <p>
    Walking the streets of almost any city is an opportunity to find "hacks" or appropriations made out of necessity, opportunism, or comfort of those who inhabit the city. These appropriations are not always intended for the common good.
  </p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 irregular" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.privado_publico %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>
