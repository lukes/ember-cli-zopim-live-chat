'use strict';

function zopimCore(config) {
  var id = config.id;
  return [
    "<script type='text/javascript'>",
    "window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=",
    "d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.",
    "_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');",
    "$.src='//v2.zopim.com/?"+id+"';z.t=+new Date;$.",
    "type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');",
    "</script>"
  ];
}

function zopimWindow(config) {
  if (!config) {
    return [];
  }

  var prefix = '$zopim.livechat.window.';
  var settings = [];

  if (config.offsetVertical) {
    settings.push(prefix+'setOffsetVertical('+config.offsetVertical+');')
  }
  if (config.offsetHorizontal) {
    settings.push(prefix+'setOffsetHorizontal('+config.offsetHorizontal+');')
  }
  if (config.position) {
    settings.push(prefix+'setPosition('+config.position+');')
  }
  if (config.size) {
    settings.push(prefix+'setSize('+config.size+');')
  }

  return [
    "<script type='text/javascript'>",
    "$(document).ready(function() {",
    "$zopim(function() {",
    settings.join("\n"),
    "});",
    "});",
    "</script>"
  ];
}

module.exports = {
  name: 'ember-cli-zopim-live-chat',

  contentFor: function(type, config) {
    var zopimConfig = config.zopim;

    if (type === 'zopim' && zopimConfig) {
      var content = [];
      content = content.concat(zopimCore(zopimConfig));
      content = content.concat(zopimWindow(zopimConfig.window));
      return content.join("\n");
    }
    return '';
  }
};
