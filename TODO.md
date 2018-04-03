# ToDo

## For Production (mandatory)

- [x] `body { margin-top: $header-ht; }` computation.
- [x] Social icons rollover.
- [x] Final icon sizes (`Icon--small` and `Icon--medium`).
- [x] Add <title> attr. to `.svg` files.
- [x] Refactor `.header` according to layout rules.
- [x] Remove minima theme styles (CSS).
- [x] Replace `.icon--small` and `.icon--large` icons and sizes (take a look at `_icons.scss`).
- [x] Mobile styles (responsive).
- [x] Clean up none-used CSS (commented code).
- [x] Minify, uglify, unify CSS files.
- [x] Create hamburger menu (mobile), and behaviour (JS).
- [x] Add `is-active` class to menu items: https://help.shopify.com/themes/liquid/filters/html-filters#script_tag
- [x] Add `is-opaque` class to `header__nav`, when scroll > 0.
- [x] `Close `header-nav` on click `js-nav-main-link` item`.
- [x] Reposition scroll towards category point (JS).

## Bugs

- [ ] Solve `.heading-sub-category` background image issue. Try single image
  with `background-size: contain` and truncate text (single line).
- [ ] "Llámanos" is not visible in "call-us.png", because is white text over
  white background (small devices only).

## Improvements (optional)

- [ ] Replace old `favicon.ico` for the new one.
- [ ] Minify, uglify, unify JS files: https://github.com/matthodan/jekyll-asset-pipeline
- [ ] Replace jQuery for Vanilla JS code.
- [ ] Remove minima theme: https://jekyllrb.com/docs/themes/#converting-gem-based-themes-to-regular-themes
- [ ] Change default locale from EN to ES.
- [ ] Move collections to specific folder: https://jekyllrb.com/docs/collections/
- [ ] Autoprefixer.
- [ ] Remove vendor-prefixes from `@mixin gradient-vertical` (if necessary).
- [ ] Check printed version.
- [ ] 404 page styles.

## Discarded

- Remove none used font faces (if any).
- Create new DatoCMS admin user (Rut).
