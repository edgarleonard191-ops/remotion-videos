import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";
import { fontFamily } from "../fonts";

export const kineticTextSchema = z.object({
  text: z.string(),
});

export type KineticTextProps = z.infer<typeof kineticTextSchema>;

export const kineticTextDefaultProps: KineticTextProps = {
  text: "Kinetic Text Starter",
};

const STAGGER_FRAMES = 6;
const EXIT_DURATION_FRAMES = 20;

export const KineticText: React.FC<KineticTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const words = text.split(" ").filter(Boolean);

  // Words pop in individually via spring(); the whole group fades out
  // together at the end so the composition still gets a clean exit.
  const groupExit = interpolate(
    frame,
    [durationInFrames - EXIT_DURATION_FRAMES, durationInFrames],
    [1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101014",
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          opacity: groupExit,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "80%",
          gap: "0 20px",
        }}
      >
        {words.map((word, i) => {
          const delay = i * STAGGER_FRAMES;
          const wordProgress = spring({
            frame: Math.max(0, frame - delay),
            fps,
            config: { damping: 14, mass: 0.6 },
          });
          const scale = interpolate(wordProgress, [0, 1], [0.6, 1]);

          return (
            <span
              key={i}
              style={{
                opacity: wordProgress,
                scale,
                fontSize: 72,
                fontWeight: 700,
                color: "#F5F5F5",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
