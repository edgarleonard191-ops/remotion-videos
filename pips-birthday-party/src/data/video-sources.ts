/**
 * Real generated shot clips from Higgsfield (kling3_0_turbo, text-to-video),
 * keyed by shot id (see shots.ts). Only a subset of the 36 shots have been
 * generated so far — the rest still render as placeholder cards.
 *
 * These are hosted on Higgsfield's CDN. The sandbox this project was built
 * in blocks direct HTTPS access to that CDN host, so the files could not be
 * downloaded to public/videos/ locally (same constraint as
 * audio-sources.ts). Remotion's <OffthreadVideo> supports a remote src
 * directly, so these URLs are wired in as-is and resolve normally in any
 * environment with regular internet access (your machine, CI, etc) — that
 * is also where `npx remotion render` needs to actually run, since this
 * sandbox's render process hits the same CDN block mid-render.
 *
 * To make a shot fully self-contained instead: download its URL below to
 * public/videos/shot-NN.mp4 (matching the shot id), then flip that shot to
 * `true` in shotVideoAvailable (assets-manifest.ts).
 *
 * IMPORTANT — known quality issue: these clips were generated as pure
 * text-to-video with no character reference image, so Pip/Finn/etc. are
 * not guaranteed to match the character reference prompts in SCRIPT.md, or
 * to look consistent from one clip to the next. Fixing that requires
 * generating consistent reference images per character first and passing
 * them as a start_image/reference to each shot's generation — not yet done
 * here.
 */
export const remoteVideoUrl: Record<number, string> = {
  1: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260705_073239_d1b90332-bc8c-41d9-a329-aad123359983.mp4",
  13: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260705_073828_3e9ddae1-ed47-463b-885d-9ba3af439f49.mp4",
  27: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260705_073832_e9e8df74-6a62-42c5-b28f-43766debf3de.mp4",
  29: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260705_073834_26c37595-47d2-43aa-9e66-591439ae9c3a.mp4",
  36: "https://d8j0ntlcm91z4.cloudfront.net/user_3EqZgzXGQxrLUNafaYjSlHxxoQz/hf_20260705_073836_19480de4-6bbe-408e-b7f7-91ea808c1445.mp4",
};
