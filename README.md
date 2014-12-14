# ember-cli-zopim-live-chat

Plugin for ember-cli that injects Zopim Live chat code into HTML content.

## Installation

To install simply run:

```
npm install --save-dev ember-cli-zopim-live-chat
```

## Configuration

Add `{{content-for 'zopim'}}` to your `index.html` file, just above the `</body>` tag (**Important**, this will be below where `vendor.js` is included).

This remaining config uses the Ember CLI project's configuration as defined in `config/environment.js`.

The code will be injected only if `ENV.zopim.id` is defined. For instance, to enable the code in only the production environment:

```javascript
if (environment === 'production') {
  ENV.zopim = {
    id: 'xxx'
  };
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

**Example:**

```javascript
if (environment === 'production') {
  ENV.zopim = {
    id: 'xxx',
    window: {
      offsetVertical: 100,
      offsetHorizontal: 120,
      position: 'br',
      size: 'small'
    }
  };
}
```
