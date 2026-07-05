import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Returns a 0 -> 1 -> 0 progress value: eases in over the first
 * `enterDurationInFrames`, holds at 1, then eases out over the last
 * `exitDurationInFrames`. Use it directly as opacity, or as the input to
 * interpolate() for scale/translate, so every composition gets a full
 * enter AND exit instead of popping in or cutting off mid-animation.
 */
export const useEnterExitProgress = ({
  enterDurationInFrames = 18,
  exitDurationInFrames = 18,
}: {
  enterDurationInFrames?: number;
  exitDurationInFrames?: number;
} = {}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const enter = interpolate(frame, [0, enterDurationInFrames], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exit = interpolate(
    frame,
    [durationInFrames - exitDurationInFrames, durationInFrames],
    [1, 0],
    {
      easing: Easing.in(Easing.cubic),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return Math.min(enter, exit);
};
