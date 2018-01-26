---
layout: default
title: "Products"
permalink: /products/
---

<h1>Catalog</h1>
<div>
  {% for product in site.products %}
    <p>
      <a href="{{ product.url }}" >{{ product.title }}</a>
    </p>
  {% endfor %}
</div>
