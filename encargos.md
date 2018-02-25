---
layout: default
title: "Por encargo"
permalink: /encargos/
---

<h1>Por encargo</h1>
<ul>
  {% for encargo in site.encargos %}
    <li>
      <a href="{{ encargo.url }}">{{ encargo.title }}</a>
    </li>
  {% endfor %}
</ul>
