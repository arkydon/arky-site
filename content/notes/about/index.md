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
            <span class="value">Nov 22, '90</span>
            <span class="label">DOB</span>
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
<!-- Place a NEWLINE before and after each call to favourite shortcode to prevent an empty <p> at the top and bottom -->
{{favourites()}}

<style scoped>
    /* ====== About styling ==== */
    table.table-about {
        /* margin-block-start: 5px; */
        padding: 1rem;
    }
    table.table-about td {
        padding-inline-end: 1em;
        /* border: 1px solid #393939; */
        /* border-collapse: collapse; */
    }
    table.table-about tr td:first-child {
        /* color: red; */
        font-weight: 500;
        /*font-family: var(--font-condensed);*/
        text-transform: uppercase;
    }
</style>



<style scoped>
    :root {
        --background: white;
        --primary:rgb(184, 184, 184);
        /*--secondary:rgb(204, 204, 204);*/
    }
    .biocard { 
        display: grid;
        grid-template-columns: 35% auto;
        border-radius: 9px;
        border: 1px solid #dfdfdf;
        border: 1px solid rgb(185 148 82 / 37%);
        background: rgb(185 148 82 / 8%);
        margin-block: 1rem;
        box-shadow: 1px 1px 0px 0px #754f2e66;        
        font-family: "Alegreya Sans SC", "Bebas Neue";

        width: 300px;
        align-self: center;
    }

    .card-avatar {
        /*display: grid; */
        /* place-items: center; */
        align-content: center;
        text-align: center;
        border-right: 1px solid #80808021;
        border-right: 1px solid rgb(185 148 82 / 26%);
    }

    .card-details {
        padding: 1rem;
    }

    .name {
        font-size: 1.25rem;
        color: rgb(185 148 82);
    }

    .name-label {
        font-weight: 500;
        color: var(--primary);
    }

    .card-about {
        margin-top: 1rem;
        display: grid;
        grid-auto-flow: column;
    }

    .item {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
    
        .value {
            font-size: 1rem;
            color: rgb(185 148 82);
        }
        
        .label {
            margin-top: 0.15rem;
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--primary);
        }
    }
    
    svg {
        fill: white;
        width: 65%;
    }

    .skills {
        display: flex;
        flex-direction: column;
        margin-top: 0.75rem;
        
        .label {
            font-size: 1rem;
            font-weight: 500;
            color: var(--primary);
        }
        
        .value {
            margin-top: 0.15rem;
            font-size: 0.75rem;
            line-height: 1.25rem;
        }
    }

</style>