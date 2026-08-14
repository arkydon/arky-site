---
title : "About"
---
<div class="biocard">
   <div class="card-avatar">
    <img src="/favicon.ico" 
        style="width:70px;object-fit: cover; /* This is crucial for cropping the image */
        border-radius: 50%; /* This makes the image circular */
        border: 2px solid rgb(185 148 82 / 37%);">
        <img>
   </div>
   <div class="card-details">
      <div class="name">Arky</div>
      <div class="name-label">Name</div>
      <div class="card-about">
         <div class="item">
            <span class="value">Shillong</span>
            <span class="label">Home</span>
         </div>
         <div class="item">
            <span class="value">35</span>
            <span class="label">Age</span>
         </div>
      </div>
   </div>
</div>

## Preferences

<div class="card">

## Likes
   * Astronomy: Comets, meteors 🌠, solar activity ☀️
   * Exploring the web, searching for websites with cool designs or interesting content
   * *Sunsets* 🌄
   * Pretty *rocks* 🪨
   * *Arranging* things 
   * Collecting things (physical or digital)
   * Pictures
   * Frutiger Aero 🫧
   * Cyberpunk
   * Pop and edm music 🎵
</div>

<div class="card">

## Dislikes
   * Walking in the rain
   * Small talk
   * Sports
   * Fake politeness
   * Narcissists
   * Stan wars
   * Authority

</div>

## Favourites
{%- for title, items in config.extra.favourites %}
<details class="favourite">
    <summary>{{ title }}</summary>
    <ul>
        {%- for item in items %}
        <li>{{ item }}</li>
        {%- endfor %}
    </ul>
</details>
{%- endfor -%}
