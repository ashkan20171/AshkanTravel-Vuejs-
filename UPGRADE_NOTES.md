# AshkanTravel — Review and upgrade

## Changes
- Removed duplicate nested `src/src` tree, bundled `node_modules`, repository internals, and nested archive.
- Added localized 404 route and accessible return link.
- Corrected misleading booking success message: current booking form is a **demo only**, not a live reservation.
- Improved focus visibility, reduced-motion accessibility, card interaction and dark-mode color scheme.
- Kept Persian/English, tours, favorites, theme toggle, and original components.

## Before production
- Implement a real booking backend with server-side validation, persistence, rate limits and consent/privacy handling.
- Connect tour inventory, price and seat availability to a trusted backend; current figures are illustrative.
- Add licensed destination photography stored locally or on a reliable image CDN with fallbacks.
- Run `npm install`, `npm run build`, and `npm run lint` before deployment.
- Configure SPA fallback to index.html on your web server for deep links.
