---
layout: project
title:  "Fragmentos Urbanos"
position: 2
---

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>
    Fragmentos Urbanos es un proyecto visual acerca de como quienes habitamos una ciudad nos apropiamos del espacio público, en busca de nuestra comodidad, cambios pequeños apenas visibles, otras mas intrusivas.
  </p>

  <p>
    Urban Fragments is a visual project about how those of us who inhabit a city appropriate the public space, in search of our comfort, barely visible small changes, others more intrusive.
  </p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 irregular" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.fragmentos_urbanos %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>
