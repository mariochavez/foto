---
# Feel free to add content and custom Front Matter to this file.

layout: home
image: /images/site-image.jpg
---
<div class="columns-1 md:columns-3 transition-all duration-500 ease-in-out gap-x-8 mt-24">
  {% for photo in site.data.home %}
    <figure class="mb-8 inline-block align-top">
      <div class="relative">
        <a href="#" class="absolute block inset-0 z-10" data-action="modal#toggle"></a>
        <img src="{{ photo.src }}" alt="{{ photo.name }}" data-description="{{ photo.description }}" class="w-full h-full object-contain transition-all duration-500 ease-in-out" loading="lazy" />
      </div>
    </figure>
  {% endfor %}
</div>
