---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>
{% include_relative includes/intro.md %}

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}


<footer> 
  <hr>
  <p>Last updated on <span style="color: blue" id="date"></span></p>

<script>
  var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + today.getFullYear();
  dateElement.innerHTML = formattedDate;
</script>  
</footer>

