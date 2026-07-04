import type { CharacterId } from "./characters";

export type DialogueLine = {
  /** 1-based line number, matches the ElevenLabs voice line breakdown and public/audio/line-XX.mp3 naming. */
  line: number;
  speaker: CharacterId;
  text: string;
  /** Which shot (src/data/shots.ts) this line plays over. */
  shotId: number;
  startMs: number;
  endMs: number;
};

// Timed to the actual generated voice-over durations (Higgsfield seed_audio),
// in composition-global milliseconds. endMs = startMs + measured audio length + ~200ms tail.
export const dialogue: DialogueLine[] = [
  { line: 1, speaker: "jane", shotId: 1, startMs: 500, endMs: 5632, text: "In the heart of Whispering Hollow, one very special morning was beginning..." },
  { line: 2, speaker: "finn", shotId: 2, startMs: 10500, endMs: 14914, text: "Today's the day! Pip's turning six — and we've got a party to build!" },
  { line: 3, speaker: "remy", shotId: 3, startMs: 20500, endMs: 23550, text: "A party? With snacks?! I'm in!" },
  { line: 4, speaker: "blu", shotId: 4, startMs: 30500, endMs: 33050, text: "Ooh — I'll bring the music!" },
  { line: 5, speaker: "prof", shotId: 5, startMs: 40500, endMs: 43130, text: "Punctuality, as always, will be key." },
  { line: 6, speaker: "luna", shotId: 6, startMs: 50500, endMs: 55685, text: "Pip's birthday already? Time flies." },
  { line: 7, speaker: "biscuit", shotId: 7, startMs: 60500, endMs: 62925, text: "Wha— party?! Did somebody say CAKE?!" },
  { line: 8, speaker: "remy", shotId: 9, startMs: 80500, endMs: 83895, text: "Careful with the acorn lanterns, Biscuit!" },
  { line: 9, speaker: "biscuit", shotId: 9, startMs: 84500, endMs: 85845, text: "No promises!" },
  { line: 10, speaker: "prof", shotId: 10, startMs: 90500, endMs: 92775, text: "Symmetry, everyone. Symmetry." },
  { line: 11, speaker: "all", shotId: 13, startMs: 120500, endMs: 121710, text: "SURPRISE!!" },
  { line: 12, speaker: "pip", shotId: 13, startMs: 123000, endMs: 125955, text: "You guys... this is the best morning ever!" },
  { line: 13, speaker: "finn", shotId: 14, startMs: 130500, endMs: 135325, text: "So you never lose your way exploring — but you always find your way back to us." },
  { line: 14, speaker: "pip", shotId: 14, startMs: 136000, endMs: 137525, text: "Finn, it's perfect." },
  { line: 15, speaker: "remy", shotId: 15, startMs: 140500, endMs: 145592, text: "Snacks for the road. Don't eat 'em all in one day — like I would." },
  { line: 16, speaker: "pip", shotId: 15, startMs: 145700, endMs: 146865, text: "No promises!" },
  { line: 17, speaker: "blu", shotId: 16, startMs: 150500, endMs: 155245, text: "Made it myself. Catches the wind and hums your favorite tune." },
  { line: 18, speaker: "pip", shotId: 16, startMs: 155500, endMs: 157380, text: "It's beautiful, Blu." },
  { line: 19, speaker: "prof", shotId: 17, startMs: 160500, endMs: 166780, text: "Every good explorer needs a map, my boy. Or, in your case, six of them." },
  { line: 20, speaker: "pip", shotId: 17, startMs: 166900, endMs: 169405, text: "I'll fill it with new places!" },
  { line: 21, speaker: "luna", shotId: 18, startMs: 170500, endMs: 175130, text: "For stargazing nights. So you're never cold looking up." },
  { line: 22, speaker: "pip", shotId: 18, startMs: 175500, endMs: 178180, text: "I love it, Luna. Thank you." },
  { line: 23, speaker: "biscuit", shotId: 19, startMs: 180500, endMs: 186030, text: "I made you a pie! I— may have tested a corner. Or three." },
  { line: 24, speaker: "pip", shotId: 19, startMs: 186100, endMs: 188710, text: "Biscuit! That's so exactly you." },
  { line: 25, speaker: "remy", shotId: 21, startMs: 200500, endMs: 203385, text: "Bullseye! Told you I had good aim." },
  { line: 26, speaker: "finn", shotId: 21, startMs: 204000, endMs: 205104, text: "Beginner's luck!" },
  { line: 27, speaker: "pip", shotId: 23, startMs: 220500, endMs: 223535, text: "Found you, Biscuit — your tail gave it away!" },
  { line: 28, speaker: "biscuit", shotId: 23, startMs: 224500, endMs: 226686, text: "It always does." },
  { line: 29, speaker: "prof", shotId: 26, startMs: 250500, endMs: 253450, text: "And Luna takes the crown — by a whisker!" },
  { line: 30, speaker: "luna", shotId: 26, startMs: 255000, endMs: 257465, text: "Just quick paws, that's all." },
  { line: 31, speaker: "all", shotId: 28, startMs: 270500, endMs: 280625, text: "Happy, happy birthday, dear Pip, today, Whispering Hollow sings this way, six years of you, bright as the sun, here's to all the fun to come!" },
  { line: 32, speaker: "pip", shotId: 29, startMs: 285000, endMs: 287070, text: "Best birthday wish ever." },
  { line: 33, speaker: "finn", shotId: 31, startMs: 300500, endMs: 301762, text: "What'd you wish for?" },
  { line: 34, speaker: "pip", shotId: 31, startMs: 303500, endMs: 306055, text: "If I tell you, it won't come true!" },
  { line: 35, speaker: "pip", shotId: 33, startMs: 320500, endMs: 324099, text: "Thank you all. This was the best day in the whole forest." },
  { line: 36, speaker: "luna", shotId: 34, startMs: 330500, endMs: 334510, text: "Every year, Pip. Every single year." },
  { line: 37, speaker: "biscuit", shotId: 35, startMs: 340500, endMs: 343660, text: "Same time next year — but bigger cake!" },
  { line: 38, speaker: "jane", shotId: 36, startMs: 350500, endMs: 358791, text: "And so, under a blanket of stars, Whispering Hollow tucked in another perfect birthday... until next year." },
];
