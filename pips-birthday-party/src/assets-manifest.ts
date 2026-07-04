import { shots } from "./data/shots";
import { dialogue } from "./data/dialogue";

/**
 * Flip a shot to `true` once its generated clip is saved as
 * public/videos/shot-XX.mp4 (see shots.ts for the id -> prompt mapping).
 * Until then, the composition shows a placeholder card instead.
 */
export const shotVideoAvailable: Record<number, boolean> = Object.fromEntries(
  shots.map((shot) => [shot.id, false]),
) as Record<number, boolean>;

/**
 * Flip a line to `true` once its generated voice-over is saved locally as
 * public/audio/line-XX.wav (see dialogue.ts for the line -> text mapping,
 * and audio-sources.ts for the Higgsfield URL to download it from). Until
 * then, the composition falls back to the remote Higgsfield URL.
 */
export const lineAudioAvailable: Record<number, boolean> = Object.fromEntries(
  dialogue.map((line) => [line.line, false]),
) as Record<number, boolean>;

export const shotVideoFileName = (shotId: number) =>
  `videos/shot-${String(shotId).padStart(2, "0")}.mp4`;

export const lineAudioFileName = (lineNumber: number) =>
  `audio/line-${String(lineNumber).padStart(2, "0")}.wav`;
