export default function github_video_plugin(md, mdOptions) {
  const defaultTextRenderer = md.renderer.rules.text;
  const videoRegexp = /^https:\/\/user-images.githubusercontent.com\/\d+\/[a-zA-Z0-9-]*.mp4/;

  md.renderer.rules.text = function(tokens, idx, options, env, self) {
    var token = tokens[idx];
    if (videoRegexp.test(token.content)) {
      return `<video src="${token.content}" controls></video>`;
    }
    return defaultTextRenderer(tokens, idx, options, env, self);
  };
}
