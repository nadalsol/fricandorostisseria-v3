---
layout: default
title: "Para comer"
permalink: /comidas/
---

<h1>Para comer</h1>
<ul>
  {% for comida in site.comidas %}
    <li>
      <a href="{{ comida.url }}">{{ comida.title }}</a>
    </li>
  {% endfor %}
</ul>
