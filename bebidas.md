---
layout: default
title: "Para beber"
permalink: /bebidas/
---

<h1>Para beber</h1>
<ul>
  {% for bebida in site.bebidas %}
    <li>
      <a href="{{ bebida.url }}">{{ bebida.title }}</a>
    </li>
  {% endfor %}
</ul>
