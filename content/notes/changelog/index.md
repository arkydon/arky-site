---
title: Website Changes
---

{%- set changelog_data = load_data(path="content/notes/changelog/changelog.yaml") -%}
{%- for log in changelog_data %}
<dl class="changelog">
    <dt>{{ log.date }}</dt>
    {%- for change in log.changes %}
    <dd>{{ change }}</dd>
    {%- endfor %}
</dl>
{%- endfor %}

### Todo

1. Style dark mode
2. Add like button to blog articles
3. ~~Show an indicator for visited links~~
4. Add a widget or dashboard to homepage
5. ~~Replace Cloudflare Analytics with something else.~~
6. ~~Switch to another SSG~~
7. Make a better homepage
8. ~~Get rid of changelog shortcode~~
9. Tweak footer design
10. Fix footnotes design
11. Style widescreen design
12. Add dark mode toggle
13. Add social links
14. ~~Simplify code and structure of website~~
15. Change bland lightbox gallery design
16. Move font import from google to local