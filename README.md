# Motion Graphics Starter (Remotion)

A minimal, neutral Remotion starter for designing motion graphics
programmatically and exporting them into any video editor — as an MP4, as a
transparent-alpha overlay, or as a PNG sequence.

This is deliberately **not** a finished visual style. Four bare-bones example
graphics are included so the plumbing (canvas config, schemas, enter/exit
timing, transparency, rendering) is already working — the actual look is
yours to design.

## Preview

```bash
npm install
npm run studio
```

This opens Remotion Studio, where you can scrub every composition frame by
frame and edit its props live (title text, name/role, colors, etc. — see
"Adding a new graphic" below for how the props panel is wired up).

## Project structure

```
src/
  Root.tsx            — registers every composition (the entry point Studio/render reads)
  config.ts           — shared canvas settings: width, height, fps
  fonts.ts            — the one place a Google Font is loaded, reused everywhere
  animations/
    useEnterExitProgress.ts  — shared enter/exit timing hook
  compositions/       — one file per graphic
    TitleCard.tsx
    LowerThird.tsx
    KineticText.tsx
    TransparentBadge.tsx
public/
  fonts/              — local font files, if you'd rather not use Google Fonts
  images/             — logos, images, anything you staticFile() into a composition
  audio/              — sound effects / music you staticFile() into a composition
out/                  — rendered output lands here (gitignored)
```

## Canvas settings (resolution / fps)

Everything reads from `src/config.ts`:

```ts
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;
```

To switch the whole project to 4K/60fps, change these two constants — every
`<Composition>` in `Root.tsx` picks them up automatically. If a specific
graphic needs a different size on its own (e.g. a 1080x1920 vertical badge),
just pass different `width`/`height` on that one `<Composition>` instead of
importing from `config.ts`.

## The four starter compositions

| id | What it demonstrates |
|---|---|
| `TitleCard` | Centered title + subtitle. Fade + rise on enter, mirrored on exit. Also shows the optional sound-effect pattern (see below). |
| `LowerThird` | Broadcast-style name/role bar, bottom-left. Slide + fade enter/exit. |
| `KineticText` | Word-by-word kinetic typography using `spring()`, staggered per word, with a group fade-out exit. |
| `TransparentBadge` | A badge on a **transparent** background — the reference composition for alpha-channel export. |

Every composition has a **zod schema + defaultProps**, so its fields show up
as editable inputs in the Studio's right-hand props panel — no code changes
needed to try different text.

## Adding a new graphic

1. Create `src/compositions/YourGraphic.tsx`. Export:
   - the component
   - a zod schema for its props (`export const yourGraphicSchema = z.object({...})`)
   - `defaultProps` matching that schema
2. Register it in `src/Root.tsx`:
   ```tsx
   <Composition
     id="YourGraphic"
     component={YourGraphic}
     width={VIDEO_WIDTH}
     height={VIDEO_HEIGHT}
     fps={VIDEO_FPS}
     durationInFrames={4 * VIDEO_FPS}
     schema={yourGraphicSchema}
     defaultProps={yourGraphicDefaultProps}
   />
   ```
3. Give it a full enter **and** exit — `useEnterExitProgress()` (in
   `src/animations/`) already does this for a simple fade/rise; reuse it or
   write your own timing the same way (see "Tips" below).

## Rendering

**Standard MP4** (opaque background, e.g. `TitleCard`, `LowerThird`, `KineticText`):

```bash
npx remotion render TitleCard out/TitleCard.mp4 --codec=h264 --crf=18
```

**Transparent, for overlaying in an editor** (e.g. `TransparentBadge` — only
works if the composition's background is actually transparent, see that
file's comment):

```bash
npx remotion render TransparentBadge out/TransparentBadge.mov --codec=prores \
  --prores-profile=4444 --pixel-format=yuva444p10le --imageformat=png
```

**PNG sequence** (for editors/compositors that prefer frames over a video file):

```bash
npx remotion render TitleCard out/TitleCard/frame-%04d.png --image-format=png
```

Swap `TitleCard` / `TransparentBadge` for any composition `id` from `Root.tsx`.

## Tips

- **Title-safe area**: keep important text within roughly the middle 80% of
  the frame (see the `maxWidth: "80%"` pattern already used in `TitleCard`)
  so nothing gets cropped by a broadcast overscan or a social-media crop.
- **Always animate a full enter *and* exit.** Nothing should pop into
  existence on frame 1 or cut off abruptly on the last frame — every starter
  composition here eases in and eases back out, even if the hold in the
  middle is instant. `useEnterExitProgress()` is the shared building block
  for this.
- **Trim leading silence on sound effects.** A `.wav`/`.mp3` with even 50ms
  of silence at the start reads as sluggish/late once it's synced to an
  animation. Trim it in an audio editor (or `ffmpeg -af silenceremove=...`)
  before dropping it in `public/audio/`.
- Prefer `interpolate()` with `Easing.bezier(...)` for most motion; reach for
  `spring()` specifically when you want physical, bouncy motion (see
  `KineticText.tsx`).

## Sound effects

The pattern for adding one to any composition:

```tsx
import { Audio, Sequence, staticFile } from "remotion";

<Sequence durationInFrames={20}>
  <Audio src={staticFile("audio/whoosh.mp3")} />
</Sequence>
```

Put the file in `public/audio/`, `staticFile()` resolves the path, and the
surrounding `<Sequence>` controls exactly when it plays relative to the rest
of the composition. `TitleCard.tsx` has this wired in behind an optional
`sfxSrc` prop (empty by default, since no audio ships with this starter) —
set it to a filename and it'll play on entrance.

## Google Fonts

`src/fonts.ts` loads Inter once via `@remotion/google-fonts` and every
composition imports `fontFamily` from there:

```ts
import { loadFont } from "@remotion/google-fonts/Inter";

export const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700"],
});
```

To change the project's typeface, swap the import path (e.g.
`@remotion/google-fonts/RobotoMono`) — every composition picks up the new
`fontFamily` automatically.

## Other commands

```bash
npx remotion upgrade   # bump Remotion to the latest version
npm run lint            # eslint + tsc --noEmit
```
