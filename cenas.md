---
layout: default
title: "Para cenar"
permalink: /cenas/
---

<h1>Para cenar</h1>
<ul>
  {% for cena in site.cenas %}
    <li>
      <a href="{{ cena.url }}">{{ cena.title }}</a>
    </li>
  {% endfor %}
</ul>
