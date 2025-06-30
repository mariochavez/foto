---
layout: post
title: "September 19th earthquake, Colima-Michoacan, Mexico"
description: "A 7.7 earthquake shocked the Mexican Pacific coast; the toll was five deceased people and more than 7,000 damaged houses."
date: 2022-10-12 12:00:00 -0600
friendly_date: Oct 12, 2022
image: /images/sismo-19s/20221001-L1006919-head.jpg
categories: Disasters
---

<div class="prose lg:prose-xl mx-auto mt-6">
  <p>
    Mexico has a long history of violent earthquakes; two previous on the same date, September 19th but one in 1985 and the second in 2017. It becomes difficult for people not to believe it is just a coincidence.
  </p>
  <p>
    This past September 19th, half an hour after the national simulacrum commemorating past earthquakes, a 7.7 earthquake with an epicenter in Coalcoman, Michoacán succumbed to the western zone of Mexico.
  </p>
  <p>
    A few hours later, after the shock, the report was that the major cities of Michoacán, Colima, and Jalisco had minor damages and people with nervous crises. On the coastal towns of Colima and Michoacán, the story was different.
  </p>
  <p>
    Five dead, two small children, were the earthquake casualties in Colima state. More than 7,000 houses were damaged, including government buildings and state roads. Damages include homes with cracks that didn't pose a risk to the structure and places that collapsed or are about to collapse where people lost everything.
  </p>
  <p>
    Two primary replicas, 6.9 on September 22th and 5.3 on September 23rd, increased the damages to many homes. Almost a month later, people lived in public parks or moved with family because it was risky to return to their damaged homes.
  </p>
  <p>
    Help from the government is still not there. The people have started the reconstruction or at least the cleaning of debris to try to rescue what they can to move forward and start over.
  </p>
</div>

<div class="w-full flex flex-wrap justify-between mt-6 md:mt-0 large" data-controller="reveal" data-reveal-animation-class="reveal">
  {% for photo in site.data.sismo19s %}
    {% assign weight = site.data.weights | sample %}
    <figure class="{{ weight.class }}">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>
