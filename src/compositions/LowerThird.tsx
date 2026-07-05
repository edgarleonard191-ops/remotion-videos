import { AbsoluteFill, interpolate } from "remotion";
import { z } from "zod";
import { fontFamily } from "../fonts";
import { useEnterExitProgress } from "../animations/useEnterExitProgress";

export const lowerThirdSchema = z.object({
  name: z.string(),
  role: z.string(),
});

export type LowerThirdProps = z.infer<typeof lowerThirdSchema>;

export const lowerThirdDefaultProps: LowerThirdProps = {
  name: "Jane Doe",
  role: "Replace with a title or role",
};

export const LowerThird: React.FC<LowerThirdProps> = ({ name, role }) => {
  const progress = useEnterExitProgress({
    enterDurationInFrames: 16,
    exitDurationInFrames: 16,
  });

  const translateX = interpolate(progress, [0, 1], [-48, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101014",
        justifyContent: "flex-end",
        fontFamily,
      }}
    >
      <div
        style={{
          opacity: progress,
          translate: `${translateX}px 0px`,
          display: "flex",
          alignItems: "stretch",
          // Sit inside the title-safe margin rather than flush with the edge.
          margin: "0 0 96px 96px",
        }}
      >
        <div style={{ width: 6, backgroundColor: "#F5F5F5" }} />
        <div
          style={{
            marginLeft: 20,
            backgroundColor: "rgba(16, 16, 20, 0.85)",
            padding: "14px 28px",
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#F5F5F5",
            }}
          >
            {name}
          </div>
          <div
            style={{
              marginTop: 4,
              fontSize: 22,
              fontWeight: 400,
              color: "#9A9AA2",
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
