---
layout: page
title: Publicaciones recientes
---

<div class="relative mx-auto">
  <div class="mt-8 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
    {% for post in collections.posts.resources %}
      <div>
        <div class="flex-shrink-0 h-40 overflow-hidden rounded-t-md relative">
          <div class="absolute inset-0 top-2 left-2">
            <a href="{{ post.relative_url }}" class="inline-block">
              <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-800 hover:text-sky-900"> {{ post.categories[0] }} </span>
            </a>
          </div>
          <a href="{{ post.relative_url }}">
            <img class="h-48 w-full object-cover" src="{{ post.image }}" alt="{{ post.title }}">
          </a>
        </div>
        <a href="{{ post.relative_url }}" class="block mt-4">
          <p class="text-xl font-semibold text-gray-800 hover:text-sky-900">{{ post.title }}</p>
          <p class="mt-3 text-base text-gray-600 hover:text-gray-700">{{ post.description }}</p>
        </a>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="{{ post.relative_url }}">
              <span class="sr-only">{{ post.author }}</span>
              <img class="h-10 w-10 rounded-full" src="/images/mario.jpg" alt="{{ post.author }}">
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="{{ post.relative_url }}"> {{ post.author }} </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="{{ post.date }}"> {{ post.friendly_date }} </time>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
