import { AbsoluteFill, Audio, Sequence, interpolate, staticFile } from "remotion";
import { z } from "zod";
import { fontFamily } from "../fonts";
import { useEnterExitProgress } from "../animations/useEnterExitProgress";

export const titleCardSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  // Optional: name a file in public/audio/ (e.g. "whoosh.mp3") to play a
  // sound effect on entrance. Left empty by default since no audio ships
  // with this starter. This is also the reference pattern for wiring any
  // <Audio> into a composition via <Sequence>.
  sfxSrc: z.string().optional(),
});

export type TitleCardProps = z.infer<typeof titleCardSchema>;

export const titleCardDefaultProps: TitleCardProps = {
  title: "Title Card",
  subtitle: "Replace this with your own copy",
  sfxSrc: undefined,
};

export const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  sfxSrc,
}) => {
  const progress = useEnterExitProgress({
    enterDurationInFrames: 20,
    exitDurationInFrames: 20,
  });

  const translateY = interpolate(progress, [0, 1], [24, 0]);

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
          opacity: progress,
          translate: `0px ${translateY}px`,
          textAlign: "center",
          // Keep copy comfortably inside the title-safe area.
          maxWidth: "80%",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#F5F5F5",
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            fontWeight: 400,
            color: "#9A9AA2",
          }}
        >
          {subtitle}
        </div>
      </div>
      {sfxSrc ? (
        // Reference pattern: any sound effect goes in a <Sequence> so its
        // timing is independent of the visuals. Trim leading silence in
        // the source file itself — see the README tip on this.
        <Sequence durationInFrames={20}>
          <Audio src={staticFile(sfxSrc)} />
        </Sequence>
      ) : null}
    </AbsoluteFill>
  );
};
