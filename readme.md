# Markdown It Github Video Plugin [![npm install markdown-it-github-video](https://img.shields.io/badge/npm%20install-markdown--it--github--video-blue.svg)](https://www.npmjs.com/package/markdown-it-github-video) [![tests](https://github.com/franciscop/markdown-it-github-video/workflows/tests/badge.svg)](https://github.com/franciscop/markdown-it-github-video/actions) [![gzip size](https://img.badgesize.io/franciscop/markdown-it-github-video/master/index.js.svg?label=gzip&logo=&compression=gzip)](https://github.com/franciscop/markdown-it-github-video/blob/master/index.js) [![deps](https://img.shields.io/badge/deps-0-limegreen.svg)](https://github.com/franciscop/markdown-it-github-video/blob/master/package.json)

A plugin for rendering Github Videos also in plain Markdown. Videos embedded in Github look like this:

https://user-images.githubusercontent.com/2801252/131259499-54a3188d-46c3-4015-98e3-2477684351b6.mp4

> Note: the above link works on Github, but not on npm website as of now

There was no solution to parse the same github links into a `<video>` for your own website. Now there is with `markdown-it-github-video`!

To upload a video to Github Readme, just drop it while editing the readme.md, see the instructions by the CEO of Github:

https://twitter.com/natfriedman/status/1383169112948449286

## Getting started

Install the plugin:

```bash
npm i markdown-it-github-video
```

```js
import mdit from "markdown-it";
import github_video from "./index.js";

const md = mdit().use(github_video);

const out = md.render(`# Hello

https://user-images.githubusercontent.com/2801252/131257834-bfd9b6c6-f22e-46f2-9d06-8c14ac7f2708.mp4`);
console.log(out);
// <h1>Hello</h1>
// <p><video src="https://user-images.githubusercontent.com/2801252/131257834-bfd9b6c6-f22e-46f2-9d06-8c14ac7f2708.mp4" controls></video></p>
```
