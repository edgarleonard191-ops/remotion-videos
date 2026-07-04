import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { shots, SHOT_DURATION_SECONDS } from "./data/shots";
import { dialogue } from "./data/dialogue";
import {
  lineAudioAvailable,
  lineAudioFileName,
  shotVideoAvailable,
  shotVideoFileName,
} from "./assets-manifest";
import { ShotPlaceholder } from "./components/ShotPlaceholder";
import { DialogueCaption } from "./components/DialogueCaption";

const msToFrames = (ms: number, fps: number) => Math.round((ms / 1000) * fps);

export const PipsBirthdayParty: React.FC = () => {
  const { fps } = useVideoConfig();
  const shotDurationInFrames = SHOT_DURATION_SECONDS * fps;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {shots.map((shot, index) => (
        <Sequence
          key={shot.id}
          from={index * shotDurationInFrames}
          durationInFrames={shotDurationInFrames}
          premountFor={shotDurationInFrames}
        >
          <ShotPlaceholder
            shot={shot}
            hasVideo={shotVideoAvailable[shot.id]}
            videoSrc={shotVideoFileName(shot.id)}
          />
        </Sequence>
      ))}

      {dialogue.map((line) => {
        const from = msToFrames(line.startMs, fps);
        const durationInFrames = msToFrames(line.endMs - line.startMs, fps);

        return (
          <Sequence
            key={line.line}
            from={from}
            durationInFrames={durationInFrames}
            premountFor={fps / 2}
          >
            <DialogueCaption line={line} />
            {lineAudioAvailable[line.line] ? (
              <Audio src={staticFile(lineAudioFileName(line.line))} />
            ) : null}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
