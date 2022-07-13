---
layout: project
title:  "Cofradía de Volcanes"
section: Project
description: Cofradía de Volcanes es un proyecto realizado por los últimos 7 años y que comprende de la exploración del territorio en la región de los estados de Jalisco y Colima en México, donde el autor construye un imaginario visual que reafirma su sentido de pertenencia y arraigo.
image: /images/cofradia-volcanes/cofradia-volcanes.jpg
position: 5
---
<div class="prose lg:prose-xl mx-auto mt-12">
  <h3 class="text-center" style="margin-top: 4em !important;">Próximamente</h3>
</div>

<div class="w-full flex flex-wrap justify-between mt-1 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.cofradia %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>
