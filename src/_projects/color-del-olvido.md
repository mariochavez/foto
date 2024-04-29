---
layout: project
title:  "El Color del Olvido"
section: Project
description: El Color del Olvido, is a journey thru the historical poligon at Colima city. The images portray colorful abandoned houses far away from their best time and today have no habitants. They have become a fading memory of the city's history turned into ruins.
image: /images/color/11.webp
position: 3
---

<div class="bg-white whitespace-nowrap overflow-hidden relative mt-12 border rounded" data-controller="book">
  <div class="transition duration-500 ease-in flex flex-nowrap flex-row justify-between" data-book-target="wrapper">
    {% for page in (0..19) %}
      {% assign paddedPage = page | prepend: '00' | slice: -2, 2 %}
      <div class="w-full h-60 inline-block shrink-0 md:h-96 lg:h-[31rem] xl:h-[37rem] bg-gray-100 book-page" data-book-target="page">
        <img src="{{ "/images/color/" | append: paddedPage | append: ".webp" }}" loading="lazy" class="block max-h-full mx-auto cursor-pointer" />
      </div>
    {% endfor %}
  </div>
  <div class="absolute bottom-2 md:bottom-6 left-[43%] md:left-1/2 text-sm z-10 p-2 bg-gray-300/50 rounded text-white" data-book-target="paginator"></div>
</div>
<p class="font-sans text-xs font-semibold text-center text-gray-600 mt-4">Utilice las flechas del teclado para cambiar página<p>

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>Recorrer caminando las calles de centro histórico de la ciudad de Colima es caminar hacia el pasado de la ciudad fundada en 1525. Este espacio, con una superficie de 1.32km2, fue designado como centro histórico en 1985. La designación protege a todo mueble e inmueble cuya construcción se haya realizado hasta el siglo XIX de alteraciones o remoción que atenten contra su carácter de memoria, monumento y/o patrimonio arquitectónico.</p>

  <p>Durante su historia el centro histórico ha sufrido de efectos naturales, sociales y económicos que han impactado la preservación del mismo. Sismos, negligencia y abandono son causantes del deterioro físico, visible y palpable al recorrer las calles de estos barrios antiguos. </p>

  <p>Esfuerzos públicos y privados se han realizado por restaurar, rescatar y modernizar el centro histórico, sin embargo, no han sido suficientes con relación a lo económico y la regulación para la preservación del patrimonio, además de que han fallado en involucrar a quienes aún lo habitan.</p>

<hr/>

  <p>Walking through the streets of the historic center of Colima city is like walking into the past of the town founded in 1525. With an area of 1.32km2, this space was designated as a historical center in 1985. The designation protects all furniture and property whose construction was carried out until the 19th century of alterations or removal that threaten its character of memory, monument, and architectural heritage.</p>

  <p>The historic center has suffered from natural, social and economic effects that have impacted its preservation during its history. Earthquakes, neglect, and abandonment cause physical deterioration, visible and palpable when walking the streets of these old neighborhoods.</p>

  <p>Public and private efforts have been made to restore, rescue, and modernize the historic center. However, they have not been sufficient concerning the economy and the regulation for preserving heritage and failing to involve those who still inhabit it.</p>
</div>
