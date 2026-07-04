import {
  AbsoluteFill,
  Easing,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import type { Shot } from "../data/shots";

// Cycles through a small warm palette so the placeholder deck reads as
// distinct scenes at a glance while real clips are still being generated.
const PLACEHOLDER_GRADIENTS = [
  ["#2b1d13", "#5c3a21"],
  ["#1d2b1e", "#3a5c3f"],
  ["#1d2230", "#3a4a5c"],
  ["#2b1d2a", "#5c3a54"],
];

export const ShotPlaceholder: React.FC<{
  shot: Shot;
  hasVideo: boolean;
  videoSrc: string;
}> = ({ shot, hasVideo, videoSrc }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (hasVideo) {
    return (
      <AbsoluteFill style={{ opacity: fadeIn }}>
        <OffthreadVideo src={staticFile(videoSrc)} />
      </AbsoluteFill>
    );
  }

  const [from, to] = PLACEHOLDER_GRADIENTS[shot.id % PLACEHOLDER_GRADIENTS.length];

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        opacity: fadeIn,
        justifyContent: "center",
        alignItems: "center",
        padding: 96,
      }}
    >
      <div
        style={{
          fontFamily: "Georgia, serif",
          color: "#f4e9d8",
          textAlign: "center",
          maxWidth: 1200,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, opacity: 0.7 }}>
          SHOT {String(shot.id).padStart(2, "0")} / 36 — {shot.scene.toUpperCase()}
        </div>
        <div style={{ fontSize: 34, marginTop: 32, lineHeight: 1.4 }}>
          {shot.prompt}
        </div>
        <div style={{ fontSize: 20, marginTop: 40, opacity: 0.5 }}>
          Drop the generated clip at public/{videoSrc} to replace this placeholder.
        </div>
      </div>
    </AbsoluteFill>
  );
};
