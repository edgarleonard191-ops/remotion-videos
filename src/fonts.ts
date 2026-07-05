import { loadFont } from "@remotion/google-fonts/Inter";

// Loaded once and reused across every composition. Swap the import path
// (e.g. "@remotion/google-fonts/RobotoMono") to change the project-wide
// typeface.
export const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});
