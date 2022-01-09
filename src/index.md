---
# Feel free to add content and custom Front Matter to this file.

layout: home
image: /images/site-image.jpg
---
<div class="relative" data-controller="home">
  {% for photo in site.data.home %}
    <div class="hidden" data-name="{{ photo.name }}" data-src="{{ photo.src }}" data-home-target="photo"></div>
  {% endfor %}
  <img class="w-full h-full object-cover p-0 lg:p-6" src="/images/home-1.jpg" alt="Imágen del home" data-home-target="image">
  <p class="text-sm md:text-base absolute bottom-8 right-8 text-white bg-black bg-opacity-25 p-2 rounded-sm" data-home-target="caption">Baja California Sur &copy; Mario Alberto Chávez</p>
</div>
