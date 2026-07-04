# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Pip's Big Day in Whispering Hollow

This project assembles a 6-minute birthday video from clips generated in
Vidu Q3 Pro / Kling and voice lines generated in ElevenLabs, with captions
and timing already wired up.

**Structure**

- `src/data/shots.ts` — the 36 shots (10s each), in order, with the exact
  prompt text to paste into Vidu/Kling. Style anchor to append to every
  prompt: *"Warm Pixar-style 3D animated forest, soft painterly golden-hour
  lighting, shallow depth of field, cinematic handheld-but-smooth camera
  moves, high-detail fur/feather textures, family-friendly, whimsical
  firefly lighting accents."*
- `src/data/dialogue.ts` — all 38 lines of dialogue/narration, timed to the
  composition's global timeline, in the order to hand to ElevenLabs.
- `src/data/characters.ts` — caption name-tag colors per character.
- `src/assets-manifest.ts` — toggles that switch each shot/line from
  placeholder to real media.

**Dropping in generated clips**

1. Generate the clip for shot `N` and save it as `public/videos/shot-NN.mp4`
   (zero-padded, e.g. `shot-01.mp4`).
2. In `src/assets-manifest.ts`, flip `shotVideoAvailable[N]` to `true`.
3. Reload the Studio preview — the placeholder card is replaced by the clip.

**Dropping in ElevenLabs voice lines**

1. Generate line `N` (see `src/data/dialogue.ts` for the text/speaker) and
   save it as `public/audio/line-NN.mp3`.
2. In `src/assets-manifest.ts`, flip `lineAudioAvailable[N]` to `true`.
3. The `<Audio>` track will play alongside the caption automatically.

Once every shot and line is flipped on, render the full video with
`npx remotion render PipsBirthdayParty out/pips-birthday-party.mp4`.

> This sandbox blocks downloading Remotion's pinned Chrome Headless Shell.
> `remotion.config.ts` auto-detects the Playwright Chromium already
> installed at `/opt/pw-browsers` and points Remotion at it. If you hit a
> 403 on `remotion.media` elsewhere, pass
> `--browser-executable=<path-to-chrome>` or set `REMOTION_BROWSER_EXECUTABLE`.

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
