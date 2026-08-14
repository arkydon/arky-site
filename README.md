My personal website built using Zola static site generator

<!--
Sections and subsections and pages (denoted by []) :

```

├─ blog 
│  ├─ tech
│  └─ general
├─ media
│  ├─ photos
│  └─ music
├─ notes
│  ├─ [about]
│  ├─ [now]
│  └─ [changelog]
└─ web
   ├─ [blogroll]
   └─ links
```
-->

<!--
# Shortcodes

### Gallery
Creates a responsive image gallery with an integrated lightbox and automatic image resizing.

**Usage:**
```jinja
{{ gallery(images=["image1.jpg", "image2.jpg"], ratio="wide") }}
```

**Parameters:**
- `images`: (Required) A list of image filenames relative to the page or section.
- `ratio`: (Optional) The aspect ratio for thumbnails. 
    - `"square"` (default): 1:1 ratio (400x400px).
    - `"wide"`: 16:9 ratio (600x338px).

**Features:**
- Automatic image resizing using Zola's `resize_image`.
- Built-in lightbox: Clicking a thumbnail opens the full image in an overlay.
- Lazy loading for better performance.
- Responsive grid (2 columns on mobile, up to 6 on ultra-wide screens).

### Box
### Favourite
### Changelog
--->