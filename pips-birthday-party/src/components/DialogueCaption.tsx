import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CHARACTERS } from "../data/characters";
import type { DialogueLine } from "../data/dialogue";

export const DialogueCaption: React.FC<{ line: DialogueLine }> = ({ line }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const enter = interpolate(frame, [0, 6], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exit = interpolate(
    frame,
    [durationInFrames - 6, durationInFrames],
    [1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  const opacity = Math.min(enter, exit);
  const translateY = interpolate(enter, [0, 1], [12, 0]);

  const character = CHARACTERS[line.speaker];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 90,
      }}
    >
      <div
        style={{
          opacity,
          translate: `0px ${translateY}px`,
          maxWidth: "78%",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.55)",
          borderRadius: 20,
          padding: "18px 36px",
        }}
      >
        {line.speaker !== "jane" ? (
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 22,
              fontWeight: 700,
              color: character.color,
              marginBottom: 6,
              letterSpacing: 1,
            }}
          >
            {character.name.toUpperCase()}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 36,
            fontStyle: character.italic ? "italic" : "normal",
            color: "#ffffff",
            lineHeight: 1.3,
            whiteSpace: "pre-wrap",
          }}
        >
          {line.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};
