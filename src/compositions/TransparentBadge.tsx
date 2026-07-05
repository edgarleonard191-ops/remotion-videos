import { AbsoluteFill, interpolate } from "remotion";
import { z } from "zod";
import { fontFamily } from "../fonts";
import { useEnterExitProgress } from "../animations/useEnterExitProgress";

export const transparentBadgeSchema = z.object({
  label: z.string(),
});

export type TransparentBadgeProps = z.infer<typeof transparentBadgeSchema>;

export const transparentBadgeDefaultProps: TransparentBadgeProps = {
  label: "Live",
};

export const TransparentBadge: React.FC<TransparentBadgeProps> = ({
  label,
}) => {
  const progress = useEnterExitProgress({
    enterDurationInFrames: 15,
    exitDurationInFrames: 15,
  });

  const scale = interpolate(progress, [0, 1], [0.7, 1]);

  return (
    // No backgroundColor here on purpose — this AbsoluteFill stays
    // transparent so the alpha channel survives at render time. See the
    // README for the --codec/--pixel-format flags needed to keep it.
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          opacity: progress,
          scale,
          backgroundColor: "#F5F5F5",
          borderRadius: 999,
          padding: "18px 44px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#101014",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      </div>
    </AbsoluteFill>
  );
};
