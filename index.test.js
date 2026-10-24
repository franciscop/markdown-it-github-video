// Barebones smoke test, not a full suite
import { describe, expect, it } from "bun:test";
import mdit from "markdown-it";
import github_video from "./index.js";

const md = mdit().use(github_video);
const url =
  "https://user-images.githubusercontent.com/2801252/131257834-bfd9b6c6-f22e-46f2-9d06-8c14ac7f2708.mp4";

describe("markdown-it-github-video", () => {
  it("renders a GitHub video link as a video", () => {
    expect(md.render(url)).toContain(`<video src="${url}" controls></video>`);
  });

  it("leaves normal text alone", () => {
    expect(md.render("Hello")).toBe("<p>Hello</p>\n");
  });
});
