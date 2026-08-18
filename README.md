# Arky's Corner

My personal website/blog/journal/digital garden(?) built with the [Zola](https://www.getzola.org/) static site generator v0.23+ and Tera v2.

I had manually done a hundred designs that were ugly or not perfect. I decided to use Gemini to help make the design I wanted (almost the same like using a custom theme that is tweaked but its just CSS).

**The content of this website was NOT MADE WITH AI. All that shit is me.**

---

## Site Structure

```text
content/
├─ blog/
│  ├─ tech/
│  └─ general/
├─ media/
│  ├─ photos/
│  └─ music/
├─ notes/
│  ├─ about/
│  ├─ now/
│  ├─ changelog/
│  └─ lists/
└─ web/
   ├─ blogroll/
   └─ links/
```

---

## Components

The site uses Tera v2 component syntax (`{{<component_name ... />}}` and `{{<component_name>}}...{{</component_name>}}`) defined in `templates/components.html`and styled in `sass/components.scss`

### 1. `img`
Renders an optimized image with custom CSS classes and alt text. Maybe this component isn't needed idk.

- **Parameters**:
  - `src` (*string*, reqd): Path to image file (relative or absolute URL).
  - `alt` (*string*, optional, default: `"Image"`): Alternative text description.
  - `class` (*string*, optional, default: `"image"`): CSS class. Options include:
    - `"image"`: Full-width responsive container image with subtle border and card shadow.
    - `"blog-graphic"`: Floated inline graphic (15% width, left-aligned) for blog introductions.

- **Usage**:
  ```jinja
  {{<img src="repair.png" alt="Illustration" class="blog-graphic"/>}}
  ```
  ```jinja
  {{<img src="collage2024.jpg" alt="Collage 2024" class="image"/>}}
  ```

---

### 2. `box`
Renders pretty callouts.

- **Parameters**:
  - `type` (*string*, optional, default: `"blue"`): Color scheme variant. `"blue"`,`"green"`, `"orange"`,`"red"`, `"purple"`
- **Usage**:
  ```jinja
  {{<box type="green">}}
  This is text rendered inside a pretty callout box. Markdown formatting is supported!
  {{</box>}}
  ```

---

### 3. `gallery`
Creates a responsive image grid with automatic thumbnail generation (`resize_image`), lazy loading, and an optional full-screen popup lightbox (bland design). This component is also maybe not necessary I think but I'm afraid things might break if I use the other component below for everything.

- **Parameters**:
  - `images` (*array of strings*): List of image filenames located in the page's directory or asset path.
  - `page` (*map*): Pass `{page}` context for relative path resolution.
  - `ratio` (*string*, optional, default: `"square"`):
    - `"square"`: 1:1 aspect ratio (400×400px thumbnails).
    - `"wide"`: 16:9 aspect ratio (600×338px thumbnails).
  - `lightbox` (*bool*, optional, default: `true`): Enables full-screen zoom overlay on click.

- **Usage**:
  ```jinja
  {{<gallery images=["1.jpg", "2.jpg", "3.jpg"] ratio="wide" page={page}/>}}
  ```

---

### 4. `masonry`
Finds all images within an `images/` subfolder in the current page asset bundle and makes a pretty masonry grid of those pics.

- **Parameters**:
  - `page` (*map*): Pass `{page}` to inspect `page.assets`.
  - `size` (*string*, optional, default: `"medium"`): Thumbnail resolution and column distribution.
    - `"small"`: 400px width (3 to 5 columns).
    - `"medium"`: 600px width (2 to 4 columns).
    - `"large"`: 900px width (1 to 3 columns).
  - `quality` (*integer*, optional, default: `75`): Image compression quality (1–100) for thumbnail generation.
  - `lightbox` (*bool*, optional, default: `true`): Enables (bland) full-screen lightbox overlay on click.

- **Usage**:
  ```jinja
  {{<masonry page={page} size="medium" quality={80} lightbox={true}/>}}
  ```

---

## Colours defined

Colors for light theme and dark themes defined in `sass/variables.scss`

### 1. Blues & Teals
| Variable Token | Light Value | Dark Value | Background / Border Tokens |
| :--- | :--- | :--- | :--- |
| `--ink-blue` | `#2563eb` | `#60a5fa` | `--ink-blue-bg`, `--ink-blue-border` |
| `--ink-sky` | `#0284c7` | `#38bdf8` | `--ink-sky-bg`, `--ink-sky-border` |
| `--ink-teal` | `#0d9488` | `#2dd4bf` | `--ink-teal-bg`, `--ink-teal-border` |
| `--ink-indigo` | `#4338ca` | `#818cf8` | `--ink-indigo-bg`, `--ink-indigo-border` |

### 2. Greens & Earth Flora
| Variable Token | Light Value | Dark Value | Background / Border Tokens |
| :--- | :--- | :--- | :--- |
| `--ink-green` | `#16a34a` | `#34d399` | `--ink-green-bg`, `--ink-green-border` |
| `--ink-emerald` | `#059669` | `#6ee7b7` | `--ink-emerald-bg`, `--ink-emerald-border` |
| `--ink-sage` | `#4d7c0f` | `#a3e635` | `--ink-sage-bg`, `--ink-sage-border` |

### 3. Warm Oranges, Ochre & Amber
| Variable Token | Light Value | Dark Value | Background / Border Tokens |
| :--- | :--- | :--- | :--- |
| `--ink-orange` | `#ea580c` | `#fb923c` | `--ink-orange-bg`, `--ink-orange-border` |
| `--ink-amber` | `#d97706` | `#fbbf24` | `--ink-amber-bg`, `--ink-amber-border` |
| `--ink-persimmon`| `#f97316` | `#fdba74` | `--ink-persimmon-bg`, `--ink-persimmon-border` |
| `--ink-crimson` | `#dc2626` | `#f87171` | `--ink-crimson-bg`, `--ink-crimson-border` |

### 4. Purples, Berries & Pinks
| Variable Token | Light Value | Dark Value | Background / Border Tokens |
| :--- | :--- | :--- | :--- |
| `--ink-purple` | `#7c3aed` | `#a78bfa` | `--ink-purple-bg`, `--ink-purple-border` |
| `--ink-plum` | `#9333ea` | `#d8b4fe` | `--ink-plum-bg`, `--ink-plum-border` |
| `--ink-fuchsia` | `#c026d3` | `#e879f9` | `--ink-fuchsia-bg`, `--ink-fuchsia-border` |
| `--ink-pink` | `#db2777` | `#f472b6` | `--ink-pink-bg`, `--ink-pink-border` |
| `--ink-rose` | `#e11d48` | `#fb7185` | `--ink-rose-bg`, `--ink-rose-border` |

### 5. Canvas & Neutral Tokens
| Role | Light Mode | Dark Mode (`body.dark-mode`) |
| :--- | :--- | :--- |
| Background (`--body-bg-color`) | `#faf8f5` (Warm Paper) | `#121316` (Obsidian) |
| Card Surface (`--card-bg-color`) | `#ffffff` | `#1a1c22` |
| Body Text (`--body-font-color`) | `#262320` | `#e4e2df` |
| Muted Text (`--text-muted`) | `#78716c` | `#a19f9c` |
| Subtle Accent (`--text-subtle`)| `#be8f6f` | `#716f6c` |
| Headings (`--h-color`) | `#1c1917` | `#f5f5f4` |
| Main Link (`--link-color`) | `var(--ink-blue)` | `var(--ink-blue)` |

---

## Fonts

### Web Fonts (Google Fonts)
Imported via `@import` in `sass/styles.scss`:
- **Fraunces** (`--font-display`): Expressive serif used for display text and headings (`h1`–`h6`).
- **Newsreader**: Secondary display fallback serif font.
- **Plus Jakarta Sans** (`--font-body` / `--font-main`): Clean, modern geometric sans-serif for body copy and general interface elements.
- **JetBrains Mono** (`--font-mono` / `--font-secondary`): Monospace typeface for code blocks and inline code.

### Local Unused Fonts
> Because I want to use them some day

Stored under `static/fonts/` with `@font-face` definitions in `sass/fontcss/`:
- **Inter Tight** (`static/fonts/intertight/`)
- **TikTok Sans** (`static/fonts/tiktoksans/` - Regular, Condensed, SemiCondensed)
- **Bebas Neue** (`static/fonts/bebasneue/`)
- **Road Rage** (`static/fonts/roadrage/`)
- **Alegreya Sans SC** (`static/fonts/assc/`)

---

## Analytics

Uses **[Lite Analytics](https://liteanalytics.com/)**, a lightweight, cookie-less analytics (blocked by adblockers). I can see how many people and bots visit my website but I can't see who it is don't worry.

Loaded in `templates/partials/head.html`:
  ```html
  <script defer async data-host="arky.pages.dev" src="https://liteanalytics.com/lite.js"></script>
  ```