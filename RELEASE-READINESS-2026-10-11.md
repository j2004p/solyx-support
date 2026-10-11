# Solyx Website Release Readiness

Status: **NOT DEPLOYED. FINAL LAUNCH COPY PREPARED LOCALLY.**

Do not publish until the coordinated release gate is satisfied. The preparation
agent must not commit, push or deploy; the parent may commit after review.
Committing does not authorize publication.

## Ownership and baseline

- Website repo: `/Users/joseph/Developer/solyx-support`.
- Work performed only in its existing `/Users/joseph/Developer/solyx-launch-link`
  worktree, branch `website/app-store-launch`, baseline `9cfdb79`.
- The main website checkout contains earlier dirty work and was not changed.
  The existing untracked `.DS_Store` in this worktree was also left alone.
- No iOS files, simulator actions, Store configuration, purchases, public uploads,
  paid services, new dependencies, commits, pushes, or deployments.
- Read website DESIGN.md and README plus Solyx product/design/toolkit guidance.
  Impeccable context launcher was not executable; existing context was read
  directly. Approved galaxy, typography, sequential phones and catalog remain.
- Read-only check of https://solyxapp.com/ on October 11 confirmed the old slogan,
  108 counts, and subscription-only copy. That public site was not changed.

## Prepared changes

- Exact thesis: `Your habits build your galaxy.` in hero, title and social/search
  metadata. Copy says `100+ planets. 100+ constellations.`
- Homepage FAQ, download note and support contain final launch-ready copy:
  monthly/yearly subscriptions OR Lifetime for $79.99 USD once, with local pricing
  in the app. The yearly trial remains limited to eligible new subscribers.
  Support covers Restore Purchases for subscriptions and Lifetime, and explicitly
  says Lifetime does not renew. No "coming soon" copy remains to edit at launch.
  These local claims are staged for the release, not evidence it is already live.
- Privacy terminology now covers purchases/options/access including Lifetime.
  Effective September 29, 2026 is preserved, as are analytics, retention, data,
  notifications and other legal claims. Parent reports the published ASC privacy
  URL was already verified against the manifest; that verification is not redone
  or represented as a website deployment here.
- The October 11 close Galaxy capture shows constellation bands, spiral dust and
  updated sun. The old reveal screenshot is replaced by the current marketing
  Archive capture rather than misrepresenting an old interaction as the new one.
  Mission Control continues to show history/consistency; no fabricated new-history
  or reveal image is used.
- Five WebP assets total 253,752 bytes vs 5,599,063 bytes for the five formerly
  referenced PNGs (95.5% smaller). Original files remain for provenance/rollback.
- Phone WebGL contexts and textures now initialize within 300px of the viewport.
  Native lazy loading can still prefetch nearby images, as intended.
- Hero fallback is visible with JavaScript disabled or a failed module load,
  then hidden only after the actual galaxy renderer is ready.
- Scroll story preserves real screen-reader text; its previous aria-label on a
  paragraph hid all words from Chromium's accessibility tree. Dim word color now
  starts at #949494 on #050505 instead of #343434, retaining legible contrast.
- Standalone navigation/footer links have 44px minimum height; document text can
  wrap long addresses. Support/privacy gain first-focus skip links and canonicals.
- Local preview serves WebP/JPEG/XML with correct types and exposes robots/sitemap
  for inspection. Existing canonical production URLs, sitemap, robots, official
  App Store link and noindex legacy confirmation route are preserved.
- No invented ratings, reviews, free price, or pre-release Lifetime offer schema.

## Source images

`scripts/prepare-release-images.cjs` creates the following derivatives without
altering the source captures:

| Output under assets/ | Source | Dimensions |
| --- | --- | --- |
| habits-20261011.webp | solyx-screenshots/public/screenshots/solyx/01-habit-list.png | 660x1435 |
| galaxy-overview-20261011.webp | Solyx/Marketing/AppStore/2026-10-11-refresh/sources/iphone/03-galaxy-close.png | 660x1434 |
| archive-20261011.webp | solyx-screenshots/public/screenshots/solyx/04-archive.png | 660x1434 |
| mission-control-20261011.webp | solyx-screenshots/public/screenshots/solyx/02-mission-control.png | 660x1435 |
| galaxy-fallback-20261011.webp | Existing website assets/galaxy.png | 1100x2392 |

External source paths above are relative to `/Users/joseph/Developer/`.
The App Store refresh README identifies the Galaxy as an isolated synthetic
marketing fixture, not owner data. Habit list, Archive and Mission Control are
the unchanged sources used by that refresh. The site hero remains the separately
approved illustrative galaxy, not a claim of a literal in-app screenshot.

## Verification

- Eleven local preview regressions pass: exact thesis, catalog counts, final
  pricing/trial/download wording, deferred distant textures, accessible story,
  support/privacy canonical and keyboard entry, Lifetime restore/nonrenewal,
  privacy terminology/date, and no-JavaScript hero fallback.
- Three fail-closed release-gate tests pass: absent, generic `true`, and partial
  `app-live` confirmations all exit 2 before browser checks. New copy/privacy
  assertions and gate tests failed against the previous preparation before the
  fixes, then passed. No real release confirmation was supplied during this work.
- Before implementation, tests reproduced old copy, eager texture requests,
  inaccessible story, and missing document canonicals. The fallback assertion ran
  after its fix, so it is regression coverage, not a recorded red/green result.
- Chromium browser audit rerun with final launch copy: **85/85 checks passed**, zero page exceptions or HTTP
  errors, at 320, 390, 768, 1440 and 1920 CSS-pixel widths. Checks cover actual
  nonblank/changing hero canvas pixels, all four rendered phone textures, catalog
  population, FAQ disclosure, one H1/main per route, all-route horizontal overflow,
  keyboard skip navigation, stable reduced-motion pixels, paused reduced-motion
  catalog, and no-JavaScript image/FAQ fallback. These are emulated viewports, not
  physical-device or synthesized touch testing.
- Desktop/mobile hero, Galaxy chapter and full-page captures were visually
  inspected. Evidence and machine-readable results live under
  `qa/2026-10-11-release/`. No incoherent text/image overlap appeared in the
  inspected captures. The initial audit harness timed out while scrolling at
  1440px; instant test scrolling and a 30-second timeout completed the full rerun.
  Full-page captures are layout-only evidence: Chromium can omit the offscreen
  WebGL phone buffers and displace fixed focus elements when capturing a long
  page. Use the focused `galaxy-chapter-*` captures and per-phone pixel checks
  as rendering evidence, not the blank phone regions in `full-1440.jpg`.
- Final pricing and support were also captured at 390px and 1440px in
  `final-pricing-*.png` and `final-support-*.png`; inspected mobile support and
  both pricing captures have readable wrapping and no text overlap. All product
  screenshots remain the same approved captures; no new simulator work.
- JavaScript syntax checks and `git diff --check` pass.
- This is not a full WCAG certification, physical-device test, field Core Web
  Vitals measurement, or iOS 17 sign-off. The other agent owns native testing.

## Release gates and remaining issues

1. BLOCKER: Joseph must authorize a coordinated website deployment after the new
   app version and Lifetime product are live and production purchase/restore,
   localized pricing, entitlement access and existing-subscriber behavior have
   been independently verified. The launch copy is already final, but this report
   does not assert that availability has been verified.
2. Run the release check with `SOLYX_RELEASE_CONFIRMED=app-and-lifetime-live` only
   after the operator confirms those facts. Without that exact value the default
   command exits 2. `--preview` validates content without satisfying the release
   gate and clearly labels its result NOT DEPLOYED. The command never deploys or
   checks App Store/RevenueCat state itself; the value is an operator attestation,
   not automated proof. GitHub Pages has no new deployment lock: a publishing-
   branch push can bypass this procedural check and remains prohibited here.
3. Privacy terminology preparation is complete. Other legal claims and effective
   date are deliberately unchanged as requested. No launch-day copy rewrite or
   date change is left as a required task.
4. A dedicated current three-second reveal capture and any newly changed history
   surface are not in the approved refresh source set. Keep the truthful Archive
   and Mission Control imagery or obtain approved marketing captures separately.
   No simulators were opened to fill this gap.
5. Residual accessibility risk: the approved auto-moving catalog and hero have no
   on-page pause control. Reduced Motion is supported, but that alone does not
   establish WCAG 2.2.2 compliance. Resolving this requires an approved interaction
   change; the existing design explicitly says no visible motion toggle.
6. Residual performance risk: self-hosted Three.js remains a substantial initial
   script, and desktop headless WebGL is not a mobile GPU/battery benchmark.
   Measure real-device Safari and field CWV before promising performance scores.
7. Main checkout reconciliation remains an owner action. Do not overwrite the
   dirty `solyx-support` tree or blindly commit its unrelated changes.

## Reproduce locally

Use the already installed bundled Node/packages; nothing needs to be purchased
or installed. From this worktree:

```sh
export PATH="/Users/joseph/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
export NODE_PATH="/Users/joseph/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules"
PORT=4186 node scripts/preview.mjs
# In another terminal:
node --test scripts/release-gate.test.cjs
node scripts/release-check.cjs --preview
node scripts/browser-audit.cjs
```

After review and independent production verification, the parent/operator may
run the gated check (this command itself does not publish):

```sh
SOLYX_RELEASE_CONFIRMED=app-and-lifetime-live node scripts/release-check.cjs
```

Do not set this value simply to get a passing result during preparation.

Preview: http://127.0.0.1:4186/ (loopback only). Set `PREVIEW_URL` on both test
commands if a different preview port is needed. To regenerate assets, run
`node scripts/prepare-release-images.cjs`; optional `SOLYX_MARKETING` and
`SOLYX_CAPTURES` override external source directories.
The verification preview server was stopped after testing; run the command above
to reopen it. Opening the HTML directly shows the static fallback only.

## Changed paths

- `index.html`, `styles.css`, `site.js`, `assets/product-scenes.js`
- `support/index.html`, `privacy/index.html`
- `scripts/preview.mjs`
- `scripts/release-check.cjs`, `scripts/browser-audit.cjs`, `scripts/prepare-release-images.cjs`
- `scripts/release-gate.test.cjs`
- `assets/habits-20261011.webp`, `assets/galaxy-overview-20261011.webp`
- `assets/archive-20261011.webp`, `assets/mission-control-20261011.webp`
- `assets/galaxy-fallback-20261011.webp`
- `qa/2026-10-11-release/` (browser captures and results)
- `README.md`, `RELEASE-READINESS-2026-10-11.md`

At this handoff, all preparation is unstaged and uncommitted by this agent.
The parent may commit after review; deployment remains separately gated.
