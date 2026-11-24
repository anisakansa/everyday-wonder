// Everyday Wonder, Two Days to Find the Line — one-line entry.
// Candidates scored against the sibling one-liner rubric
// (wonder voice > specific humour > twist > density); every count
// measured with a tool, every candidate one line, all <= 120 chars.
//
// A (19/20) — "The kettle clicks off the exact second I reach for it, and for one morning the universe keeps its appointments." (111)
//   Wonder 5: an ordinary kettle becomes a cosmic appointment.
//   Specific 5: kettle timing, a daily ritual anyone recognises.
//   Twist 5: the universe — not the kettle — keeps its appointments.
//   Density 4: one clause could be tighter, but the payoff lands.
// B (17/20) — "Sunlight hits the same cracked tile every morning, and somehow it still feels like the first time." (98)
// C (17/20) — "The bus always arrives the moment I stop checking, as if the city only runs on time when no one is watching." (108)
// D (18/20) — "Rain on the window sounds like static until you listen closely, then it turns out the sky was applauding." (105)
// E (18/20) — "My plant grew one new leaf overnight, quietly, like it had been saving the good news for morning." (97)
//
// Winner: A — the only candidate scoring 5 on wonder, specificity,
// and twist at once; the wonder lives in an ordinary morning.
// D and E tie at 18 (D's twist is strong but its image is familiar;
// E is warm but its twist resolves too gently), B and C at 17.
// A wins because the twist reframes the whole sentence: the kettle
// is on time, but the joke is that the universe is the one keeping
// appointments — wonder as punctuality, not spectacle.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The kettle clicks off the exact second I reach for it, and for one morning the universe keeps its appointments.";

// Deterministic guards: no wall-clock, no Date, no Math.random.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`line must be 1-120 chars, got ${chars.length}`);
}
if (LINE.includes("\n")) throw new Error("line must be a single line");
if (LINE.trim() !== LINE) {
  throw new Error("line must not have leading/trailing whitespace");
}
if (LINE.includes("  ")) {
  throw new Error("line must not contain double spaces");
}
if (!/^[\x20-\x7E]*$/.test(LINE)) {
  throw new Error("line must be pure ASCII");
}
if (chars.length !== 111) {
  throw new Error(`line pinned at 111 chars, got ${chars.length}`);
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE); // no trailing newline
