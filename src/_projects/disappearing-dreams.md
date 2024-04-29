---
layout: project
title:  "Disappearing Dreams"
section: Project
description: Disappearing Dreams is a collective story of families looking for their loved ones. The goal is to bring visibility to this problem and give the spectator a chance to connect with the person who is gone and their families.
image: /images/disappearing/site-image.jpg
position: 6
---

<div class="prose lg:prose-xl mx-auto mt-12">
  <p>Since 2006, starting with the "War on drugs" led by former President Felipe Calderón, Mexico has had a humanitarian and violent crisis in almost every city, town, and community in the country.</p>
  <p>Violence is present in many forms; organized crime, the Mexican army, and law enforcement agencies take part in it. Forced disappearance is one of the many ways violence is present in families' homes. Last May 2022, the official records accounted for more than 100,000 people officially missing and more than 52,000 bodies in morgues without identification.</p>
</div>

<div class="w-full mt-28 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-32 justify-between" data-controller="reveal" data-reveal-animation-class="reveal">
  {% assign photos = site.data.disappearing %}
  {% for photo in photos %}
    {% if photo.position == "all" %}
      <div class="self-center col-span-1 sm:col-span-2">
        <figure>
          <div class="relative">
            <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
            <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
          </div>
        </figure>
      </div>
    {% else %}
      <div class="self-center">
        {% if photo.position == "right" and photo.text != "" %}
          <p class="font-marcellus text-2xl p-8 text-gray-600">{{ photo.text }}</p>
        {% endif %}

        {% if photo.position == "left" %}
          <figure>
            <div class="relative">
              <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
              <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
            </div>
          </figure>
        {% endif %}
      </div>

      <div class="self-center">
        {% if photo.position == "left" and photo.text != "" %}
          <p class="font-marcellus text-2xl p-8 text-gray-600">{{ photo.text }}</p>
        {% endif %}

        {% if photo.position == "right" %}
          <figure>
            <div class="relative">
              <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
              <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain {{ photo.options }}" loading="lazy" />
            </div>
          </figure>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<div class="prose lg:prose-xl mx-auto mt-12">
  <ul>
    <li><b>Leslie Alejandra Flores Larios</b><br/>
    Disappeared on March 1st, 2017. Villa de Alvarez, Colima. México.<br/>
    Current age, 29 years old.
    </li>
    <li><b>Christián Nicolás Ortega Velasco</b><br/>
    Disappeared on June 8th  ,2020. Colima, Colima. México.<br/>
    Current age, 37 years old.
    </li>
    <li><b>Sergio Humberto de Anda</b><br/>
    Disappeared on April 11th, 2020. Tecomán, Colima. México.<br/>
    Current age, 24 years old.
    </li>
    <li><b>Carlos Donaldo Campos Sepúlveda</b><br/>
    Disappeared on August 19th, 2018. Villa de Álvarez, Colima, México.<br/>
    Current age, 27 years old.
    </li>
    <li><b>Luis Fernando Llerenas Quintero</b><br/>
    Disappeared on Septembre 18th, 2015.<br/>
    Between Cuauhtémoc, Colima and Tonila, Jalisco, México.<br/>
    Current age, 28 years old.
    </li>
    <li><b>César Enrique García Hernández</b><br/>
    Disappeared on January 4th, 2016. Colima, Colima. México.<br/>
    Current age, 25 years old.
    </li>
  </ul>

  <p>Disappearing Dreams is a collective story of families looking for their loved ones. The goal is to bring visibility to this problem and give the spectator a chance to connect with the person who is gone and their families.</p>
  <p>The project started on March 2022, still ongoing, with the support of six families from Red Desaparecidos Colima, A.C., with whom I had a relationship of two years, working and supporting their activities to find their daughters, sons, sisters, and brothers.</p>
  <p>Over the time I have become friends with these families, I have witness firsthand all they must endure continuing their search. I have seen how they have also become victims of indolence and criminalization.</p>
  <p>The person forced to disappear, disappears on multiple occasions, first physically, then by the authorities who turn them into a number, a file, and finally by society that refuses to see what is happening.</p>
  <p>This project is important to me, because it is an opportunity to present people I only know from what their families tell me about them and through the objects they still have.</p>
</div>
