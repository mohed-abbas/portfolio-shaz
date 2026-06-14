import { Fragment } from "react";

export type Segment = { text: string; em?: boolean };

// Renders a content string broken into segments, wrapping any segment
// marked `em: true` in `emClass`. Lets emphasized copy live in JSON data
// while keeping its styling in the component. Bake spacing into segment
// text (leading/trailing spaces) — there is no implicit whitespace.
export default function RichText({
  segments,
  emClass,
}: {
  segments: Segment[];
  emClass: string;
}) {
  return (
    <>
      {segments.map((s, i) =>
        s.em ? (
          <span key={i} className={emClass}>
            {s.text}
          </span>
        ) : (
          <Fragment key={i}>{s.text}</Fragment>
        )
      )}
    </>
  );
}
