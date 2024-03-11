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

{% include_relative includes/pubs.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}


<footer> 
  <hr>
<p>Last updated on：<span id="date"></span> . This guy makes a nice <a href="https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io?style=social">   webpage.</a></p>

<script>
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var dateElement = document.getElementById("date");
    var formattedDate = ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + today.getDate()).slice(-2) + "-" + today.getFullYear();
    dateElement.innerHTML = formattedDate;
</script>


  


</footer>

