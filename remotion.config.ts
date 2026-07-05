/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { existsSync } from "node:fs";
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Some sandboxed dev environments block downloading Remotion's pinned
// Chrome Headless Shell. If a Playwright-managed Chromium is already
// present (e.g. PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers), reuse it
// instead of trying to fetch one.
const sandboxHeadlessShell =
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
if (
  !process.env.REMOTION_BROWSER_EXECUTABLE &&
  existsSync(sandboxHeadlessShell)
) {
  Config.setBrowserExecutable(sandboxHeadlessShell);
}
