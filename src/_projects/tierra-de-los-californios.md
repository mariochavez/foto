---
layout: project
title:  "Tierra de los Californios"
section: Project
description: Land of the Californios is a journey through a territory that has been inhabited since prehistory, a difficult territory due to the mountainous heights and its rugged landscape.
image: /images/californios/Baja Sur - 12.webp
position: 2
public: false
---

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.californios %}
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
  <p>
    Nací en Tijuana, Baja California, como primera generación de unos padres que venían del occidente continental de México. Nunca existió en la familia el arraigo por este territorio, quizás porque les era ajeno.
  </p>

  <p>
    Aún así, crecí escuchando y leyendo historias de lo que implicaba una travesía a través de la carretera Transpeninsular y cruzar lugares como el Desierto del Vizcaíno, el Valle de Comondú al mismo tiempo de recorrer de la costa del Pacífico hacia el mar de Cortes para rodear las sierras de San Francisco y La Giganta. Esto creo la idea de que “algún día” realizaría este recorrido.
  </p>

  <p>
    Otro punto de interés en mi, más allá de la increíble geografía, es el pensar en los seres humanos que habitaron esa región al principio de nuestra era y que sintieron la necesidad de dejar huella de su paso a través de pinturas que narran pasajes de realidad y la comunión que tenían con plantas y animales. Esta relación perduró aún con los grupos prehispánicos, quienes no tuvieron un gran desarrollo tecnológico, manteniendo de un modo de vida nómada o semi-nómada.
  </p>

  <p>
    Finalmente en el 2019 tuve la oportunidad de este primer viaje iniciando de La Paz un recorrido hacia el norte para llegar a Guerrero Negro y de regreso. En el 2020, antes del cierre por la pandemia, realicé un segundo recorrido con un trayecto similar al anterior. Ambos recorridos dejaron una satisfacción a esa inquietud de conocer ese territorio, pero abrieron una nueva necesidad de completar y revisitar toda la Península con una visión diferente.
  </p>

  <hr/>

  <p>
    I was born in Tijuana, Baja California, as the first generation of parents who came from the western mainland of Mexico. Rootedness in this territory never existed in the family, perhaps because it was alien to them.
  </p>

  <p>
    Even so, I grew up listening to and reading stories of what a journey through the Transpeninsular highway implied and crossing places like the Vizcaíno Desert, the Comondú Valley while traveling from the Pacific coast to the Sea of ​​Cortes to surround the mountains of San Francisco and La Giganta. The stories created the idea that “someday” I would take this route.
  </p>

  <p>
    This land has been inhabited probably since the beginning of our era. These humans felt the need to leave traces of their lives through paintings that narrate passages of their communion with plants and animals. This relationship lasted even with the pre-Hispanic groups, who did not have significant technological development, maintaining a nomadic or semi-nomadic way of life.
  </p>

  <p>
    Finally, in 2019 I had the opportunity of this first trip from La Paz to the north to reach Guerrero Negro and back. I made a second trip, 2020, before the closure due to the pandemic, shorter in time but with a similar route to the previous one. Both trips satisfied me and opened a new need to complete and revisit the entire Peninsula with a different vision.
  </p>
</div>
