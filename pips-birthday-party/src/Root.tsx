import "./index.css";
import { Composition } from "remotion";
import { PipsBirthdayParty } from "./PipsBirthdayParty";
import { shots, SHOT_DURATION_SECONDS } from "./data/shots";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PipsBirthdayParty"
        component={PipsBirthdayParty}
        durationInFrames={shots.length * SHOT_DURATION_SECONDS * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
