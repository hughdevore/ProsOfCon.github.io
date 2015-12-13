var flashvars = {
  enable_api: true,
  object_id: "myPlayer",
  url: "http://soundcloud.com/the-pros-of-con"
};
var params = {
  allowscriptaccess: "always"
};
var attributes = {
  id: "myPlayer",
  name: "myPlayer"
};
swfobject.embedSWF("http://player.soundcloud.com/player.swf", "myContent", "81", "100%", "9.0.0","expressInstall.swf", flashvars, params, attributes);