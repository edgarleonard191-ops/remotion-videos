import "./index.css";
import { Composition, Folder } from "remotion";
import { VIDEO_WIDTH, VIDEO_HEIGHT, VIDEO_FPS } from "./config";
import {
  TitleCard,
  titleCardSchema,
  titleCardDefaultProps,
} from "./compositions/TitleCard";
import {
  LowerThird,
  lowerThirdSchema,
  lowerThirdDefaultProps,
} from "./compositions/LowerThird";
import {
  KineticText,
  kineticTextSchema,
  kineticTextDefaultProps,
} from "./compositions/KineticText";
import {
  TransparentBadge,
  transparentBadgeSchema,
  transparentBadgeDefaultProps,
} from "./compositions/TransparentBadge";

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="starter-graphics">
      <Composition
        id="TitleCard"
        component={TitleCard}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        fps={VIDEO_FPS}
        durationInFrames={4 * VIDEO_FPS}
        schema={titleCardSchema}
        defaultProps={titleCardDefaultProps}
      />
      <Composition
        id="LowerThird"
        component={LowerThird}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        fps={VIDEO_FPS}
        durationInFrames={5 * VIDEO_FPS}
        schema={lowerThirdSchema}
        defaultProps={lowerThirdDefaultProps}
      />
      <Composition
        id="KineticText"
        component={KineticText}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        fps={VIDEO_FPS}
        durationInFrames={5 * VIDEO_FPS}
        schema={kineticTextSchema}
        defaultProps={kineticTextDefaultProps}
      />
      <Composition
        id="TransparentBadge"
        component={TransparentBadge}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        fps={VIDEO_FPS}
        durationInFrames={3 * VIDEO_FPS}
        schema={transparentBadgeSchema}
        defaultProps={transparentBadgeDefaultProps}
      />
    </Folder>
  );
};
