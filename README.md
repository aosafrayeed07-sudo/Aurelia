# /public/videos/

This folder is reserved for **optional real video clips** that can replace the
procedural 3D scenes in the two cinematic intros on the site.

Each intro currently falls back to a beautifully animated procedural Three.js
scene. If you place video files here with the names below, the corresponding
intro will **automatically use them instead**.

## Reserve intro (clicking "Reserve a Table")

The intro shows the restaurant doors swinging open and the camera dollying
through them into the dining room.

| Scene        | Preferred    | Fallback     | Suggested content                              |
|--------------|--------------|--------------|------------------------------------------------|
| Entry        | entry.webm   | entry.mp4    | Walking through a doorway / corridor / facade  |
| Dining       | dining.webm  | dining.mp4   | Candle-lit dining room, ambient b-roll          |
| Dish         | dish.webm    | dish.mp4     | Close-up of a plated dish / steam / wine        |

The three scenes play in this order:
1. **Entry**    → 0.4s — 1.7s
2. **Dining**   → 1.7s — 3.1s
3. **Dish**     → 3.1s — 4.7s
4. Title "Your Table Awaits" → 5.6s — 6.2s
5. Fade out → scroll to #reservations

## Menu intro (clicking "Explore the Menu")

The intro shows dishes being served onto a candle-lit table, one course at a
time, ending on the full menu.

| Scene   | Preferred   | Fallback    | Suggested content                              |
|---------|-------------|-------------|------------------------------------------------|
| Menu    | menu.webm   | menu.mp4    | Plates being served, plated dishes, table b-roll |

The single scene plays across the whole sequence (≈6s):
1. Fade in over the table
2. Plates arriving one course at a time
3. Title "The Menu" + fade out → scroll to #menu

## Recommended sources (free)

- **Pexels**: https://www.pexels.com/videos/  (royalty-free, no attribution required)
- **Pixabay**: https://pixabay.com/videos/  (royalty-free)

For each scene, search something like:
- "restaurant entrance" / "walking through doors"
- "candle lit restaurant interior"
- "plated dish close up"
- "waiter serving food"
- "food being plated"

Download in **WebM (VP9)** or **MP4 (H.264)**, ideally under 1080p and a few MB each.

## How it's used

Both intro components (`src/components/ReserveIntro.jsx` and
`src/components/MenuIntro.jsx`) try each video URL via a hidden
`<video preload="metadata">`. If `loadedmetadata` fires, the video is shown.
If it errors (e.g. file missing), the procedural scene is used instead. **No
build step needed — drop the files in and refresh.**
