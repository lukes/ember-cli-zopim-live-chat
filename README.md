# ember-cli-zopim-live-chat

Plugin for ember-cli to integrate with Zopim Live chat.

## Installation

To install, run:

```
ember install ember-cli-zopim-live-chat
```

Or, for older versions of Ember CLI, run:

```
npm install --save-dev ember-cli-zopim-live-chat
```

## Configuration

### index.html

Add `{{content-for 'zopim'}}` to your `index.html` file, just above the `</body>` tag.

**Important**, this must be below where `vendor.js` is included.

### config/environment.js

The zopim code will be injected only if `ENV.zopim.id` is defined. For instance, to enable the code in only the production environment:

```javascript
if (environment === 'production') {
  ENV.zopim = {
    id: 'xxx'
  };
}
```

If you have `ember-cli-content-security-policy` enabled, you will get Content Security Policy warnings in your console. Add the following policy for `script-src`:

```javascript
ENV.contentSecurityPolicy = {
  'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *.zopim.com"
}
```

## Where do I find the value for `id`?

Zopim provides a Javascript snippet which contains your `id`.

Everything after the `?` and before `;` in the following portion of the snippet is your `id`:

```javascript
$.src='//v2.zopim.com/?[this-is-your-id]';z.t=+new Date;$.
```

## Config parameters

### `ENV.zopim.window`

* `offsetVertical`: Set the vertical offset of the chat window from the edge of the browser window
  * **Allowed value** Integer pixel value
* `offsetHorizontal`: Set the horizontal offset of the chat window from the edge of the browser window in pixels
  * **Allowed value** Integer pixel value
* `position`: Set position of the chat window.
  * **Allowed values:** `br` (Bottom right), `bl` (Bottom left), `tr` (Top right), `tl` (Top left)
* `size`: Set the size of the chat window.
  * **Allowed values:** `small`, `medium`, `large`.
* `title`: Set the title of the chat window.
  * **Allowed value:** String title.

**Example:**

```javascript
if (environment === 'production') {
  ENV.zopim = {
    id: 'xxx',
    window: {
      offsetVertical: 100,
      offsetHorizontal: 120,
      position: 'br',
      size: 'small',
      title: 'Chat Support'
    }
  };
}
```

### `ENV.zopim.bubble`

* `color`: Set the color of the chat bubble.
  * **Allowed value** hexadecimal color (‘#3300cc’)

**Example:**

```javascript
if (environment === 'production') {
  ENV.zopim = {
    id: 'xxx',
    bubble: {
      color: '#3300cc'
    }
  };
}
```
