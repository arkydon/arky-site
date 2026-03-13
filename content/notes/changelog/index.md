---
title: Website Changes
---

<!-- ### Changelog -->

{{changelog()}}



<!-- Alt way using markdown only
### Changelog
Jun 24, 2025:
: Redesign About page

Jun 23, 2025:
: Changed header title font to **Amatic SC**
: Changed heading font to **Archivo**
: Tweaked variable font settings of body font (Counter width and grade of Roboto Flex)
: Changed body font word spacing
: Tweaked nav design
-->
---

### Todo

1. ~~Style dark mode~~
2. Add like button to blog pages
3. ~~Show an indicator for visited links~~
4. Add a widget or dashboard to homepage
5. ~~Replace Cloudflare Analytics with something else.~~
6. ~~Switch to another SSG that is more popular because it will be much easier to find out how to implement something.~~
7. Tweak header design
{.changelog}

<style scoped>

    /*=== Changelog styling ===*/
    dl.changelog dt {
        font-weight: normal;
        font-size: 90%;
        color: var(--main-color);
    }
    dl.changelog dd {
        /* font-family: var(--font-condensed);*/
        font-size: 80%;
        /*font-variation-settings: "wdth" 35;   */
        font-stretch: ultra-condensed;
        //margin-block: 0.2rem;
        margin-inline-start: 2rem;    
    }    
    dl.changelog {
        /* border-inline-start: 2px solid rgb(26 26 26); */
        /* padding-inline-start: 15px; */
        margin-inline-start: 12px;
        margin-block: 0;
        padding-block: 0;
    }
    ul.changelog li li, ol.changelog li {
        font-size: 90%;
        font-stretch: ultra-condensed;
        /*font-family: var(--font-condensed);*/
        /*font-variation-settings: "wdth" 35;*/
    }

    /* Make a treee design*/
    dl.changelog {
        margin-inline-start: 10px;
        /* padding-inline-start: 10px; */
        border-inline-start: 2px solid var(--main-color);
    }

    dl.changelog dt:before {
        content: "➠";
        margin-right: 9px;
        color: var(--main-color);
    }
</style>