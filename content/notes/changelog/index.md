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

1. ~~Style dark mode~~
2. Add like button to blog articles
3. ~~Show an indicator for visited links~~
4. Add a widget or dashboard to homepage
5. ~~Replace Cloudflare Analytics with something else.~~
6. ~~Switch to another SSG that is more popular because it will be much easier to find out how to implement something.~~
7. ~Tweak header design~
8. ~~Get rid of changelog shortcode~~
9. Tweak footer design
10. Fix footnote design
11. Change how website looks on wide displays
12. Put dark mode toggle somewhere else
13. Add social links
14. ~Simplify code and structure of website~
