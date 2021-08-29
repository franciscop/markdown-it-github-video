import mdit from "markdown-it";
import github_video from "./index.js";

const md = mdit().use(github_video);

const out = md.render(`# Hello

https://user-images.githubusercontent.com/2801252/131257834-bfd9b6c6-f22e-46f2-9d06-8c14ac7f2708.mp4`);

console.log(out);
