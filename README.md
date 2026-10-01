# Howe Academy — Dewalt Family

Deployment of the Howe Academy app for the Dewalt family (four kids).

- App code (`index.html`, `notebooks.js`, `play.js`, `sw.js`, `tts/`) is copied from
  the main [howe-academy](https://github.com/adrienne-debug/howe-academy) repo —
  do not edit it here; fix in the main repo and re-copy.
- `family-config.js` is the ONLY file unique to this deployment: the Dewalt
  Firebase project + first-boot kid roster.
- Database: Firebase project `howe-academy-dewalt` (Realtime Database).

Copied from howe-academy @ `0dbe861` on 2026-10-01.

## Known gap

Weekly notebooks are not available to this family yet. `notebooks.js` hardcodes its
generator registry to the Howe kid ids (`lincoln`/`ellis`/`lucy`/`julian`), so
`HoweNotebooks.generate(kid)` throws for any other id. The grade-template mapping
layer (kid id → grade template + display grade label) has not been built. Everything
else — schedule, chores, drills, points, Grid — works off the roster below.
