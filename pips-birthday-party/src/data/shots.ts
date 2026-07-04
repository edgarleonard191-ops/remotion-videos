export const SHOT_DURATION_SECONDS = 10;

export type Shot = {
  id: number;
  scene: string;
  /** Ready to paste into Vidu Q3 Pro / Kling. Append the style anchor from the project README. */
  prompt: string;
};

// 36 shots x 10s = 360s (6:00). Matches the scene-by-scene script 1:1.
export const shots: Shot[] = [
  { id: 1, scene: "Forest Morning", prompt: "Wide aerial glide through misty forest canopy at sunrise, golden light rays piercing leaves, dew sparkling, camera slowly descending toward a large hollow oak tree. No dialogue, ambient birdsong." },
  { id: 2, scene: "Finn's Wake-Up Call", prompt: "Low tracking shot through ferns toward a fox's den entrance; a young red fox (Finn) bursts out clutching a rolled leaf-scroll, tail flagging with excitement, big eager grin." },
  { id: 3, scene: "Gathering the Crew", prompt: "Finn runs along a mossy branch toward a squirrel's tree hollow, knocks; a red squirrel (Remy) pokes head out mid-yawn, then grins wide." },
  { id: 4, scene: "Gathering the Crew", prompt: "Finn whistles up toward a nest; a small sky-blue bird (Blu) flutters down mid-air, wings spread, sleepy-to-excited expression change." },
  { id: 5, scene: "Gathering the Crew", prompt: "Finn taps on a knot-hole \"window\" in a tree trunk; an owl (Prof) wearing round spectacles peers out, adjusts glasses, nods primly." },
  { id: 6, scene: "Gathering the Crew", prompt: "Finn gently nudges a sleeping silver-white wolf pup (Luna) curled under a large fern frond; she blinks awake with a soft, dreamy smile." },
  { id: 7, scene: "Gathering the Crew", prompt: "Finn splashes creek water on a sleeping golden retriever pup (Biscuit) napping on a rock; Biscuit startles awake, spluttering, ears flopping." },
  { id: 8, scene: "Gathering the Crew", prompt: "Group shot: all five animals converging on a sunlit forest clearing, laughing, carrying party supplies (jars, ribbon, leaves)." },
  { id: 9, scene: "Decorating the Clearing", prompt: "Close-up: Remy and Biscuit hanging firefly-filled glass jars from low branches, jars glowing soft gold, careful hands." },
  { id: 10, scene: "Decorating the Clearing", prompt: "Blu flying loops trailing a string of leaf-bunting, draping it between two branches; Prof below measuring spacing with a twig ruler, looking satisfied." },
  { id: 11, scene: "Decorating the Clearing", prompt: "Wide shot: finished clearing reveal — mushroom-cap stools, moss table, glowing fireflies, bunting swaying gently in breeze." },
  { id: 12, scene: "Pip's Entrance", prompt: "Bushes rustle; a small hedgehog (Pip) peeks through leaves, eyes widening in wonder at the decorated clearing." },
  { id: 13, scene: "Pip's Entrance", prompt: "All five animals leap out from hiding spots around the clearing shouting \"Surprise!\", confetti of flower petals falling; Pip's face lights up with joy." },
  { id: 14, scene: "Gift-Passing Circle", prompt: "Circle of animals seated on mushroom stools around Pip; Finn hands Pip a small carved wooden compass, warm close-up on both faces." },
  { id: 15, scene: "Gift-Passing Circle", prompt: "Remy presents an acorn-shell box of roasted seeds to Pip, grinning proudly; Pip laughs and peeks inside." },
  { id: 16, scene: "Gift-Passing Circle", prompt: "Blu flutters down and hangs a tiny feather-and-twig wind chime near Pip, it tinkles softly in close-up." },
  { id: 17, scene: "Gift-Passing Circle", prompt: "Prof solemnly hands Pip a small leather-bound book of hand-drawn forest maps, adjusting his spectacles with pride." },
  { id: 18, scene: "Gift-Passing Circle", prompt: "Luna wraps a soft moss-woven blanket around Pip's shoulders, both sharing a gentle, warm smile." },
  { id: 19, scene: "Gift-Passing Circle", prompt: "Biscuit proudly holds up a lopsided berry pie with bite marks in one corner; Pip laughs, patting Biscuit's head." },
  { id: 20, scene: "Party Games — Acorn Toss", prompt: "Wide shot: whole group setting up mushroom-stump acorn-toss game, Remy lining up a shot with focused determination." },
  { id: 21, scene: "Party Games — Acorn Toss", prompt: "Slow-motion close-up: acorn arcs through the air and lands perfectly in a hollow log; Remy throws paws up in triumph, Finn laughs beside him." },
  { id: 22, scene: "Party Games — Hide-and-Seek", prompt: "Pip covers his eyes against the oak trunk counting; the others scatter and duck behind ferns and mushrooms, giggling." },
  { id: 23, scene: "Party Games — Hide-and-Seek", prompt: "Comedic beat: Biscuit poorly hidden behind a small bush with his tail sticking straight out, wagging; Pip tiptoes up grinning." },
  { id: 24, scene: "Party Games — Bramble Race", prompt: "Group obstacle race: animals hopping over tangled roots, ducking under a mossy fallen log, laughing and stumbling playfully." },
  { id: 25, scene: "Party Games — Bramble Race", prompt: "Luna gracefully leaps across a row of stepping stones ahead of the pack, silver fur catching the light; Prof watches holding a leaf-blade \"stopwatch.\"" },
  { id: 26, scene: "Party Games — Bramble Race", prompt: "Prof announces the winner with a flourish, gesturing to Luna; Luna gives a shy, bashful smile as others cheer." },
  { id: 27, scene: "The Cake Moment", prompt: "Blu and Remy roll out a berry-and-honey cake on a broad leaf platter into the circle, six tiny fireflies glowing gently on top like candles." },
  { id: 28, scene: "The Cake Moment", prompt: "Wide shot: whole group gathered around the cake, mouths open mid-song, warm firelight-like glow on their faces." },
  { id: 29, scene: "The Cake Moment", prompt: "Close-up on Pip, eyes closed, making a wish, small smile; fireflies lift softly off the cake into the air around him." },
  { id: 30, scene: "The Cake Moment", prompt: "Fireflies drift upward in a lazy spiral above the group, twinkling like stars; everyone looking up in delighted awe." },
  { id: 31, scene: "The Cake Moment", prompt: "Finn leans toward Pip grinning, asking about the wish; Pip grins back, playfully shaking his head \"no.\"" },
  { id: 32, scene: "The Cake Moment", prompt: "Whole group bursts into laughter, close two-shot of Pip and Biscuit sharing a big slice of cake, crumbs everywhere." },
  { id: 33, scene: "Sunset Goodbye", prompt: "Golden-hour wide shot: the group huddled together in a group hug, fireflies circling slowly around them." },
  { id: 34, scene: "Sunset Goodbye", prompt: "Close-up: Luna and Pip sharing a warm quiet smile; soft dusk light, first stars appearing above the canopy." },
  { id: 35, scene: "Sunset Goodbye", prompt: "Biscuit throws paws up shouting about \"bigger cake next year,\" everyone laughing, camera slowly pulling back." },
  { id: 36, scene: "Sunset Goodbye", prompt: "Final wide aerial pull-back over the whole glowing clearing at dusk, fireflies rising into a heart-shaped spiral against a darkening starry sky, fade to soft black." },
];
