---
layout: default
title: "Menús"
permalink: /menus/
---

<h1>Menús y platos especiales</h1>
<div>
  {% for menu in site.menus %}
    <p>
      <a href="{{ menu.url }}">{{ menu.title }}</a>
    </p>
  {% endfor %}
</div>
