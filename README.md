# Cabjs

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

A framework to draw canvas with Babel

## Usage

```
var ret = CabJS.RectClass.extend({
    x: 0,
    y: 0,
    width: 20,
    height: 100,
    color: "#000",
    keyframe: function() {
        this.x += 1;
        this.y += 0.5;
    }
});
CabJS.start("mycanvas");
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/cabjs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cabjs
[downloads-image]: http://img.shields.io/npm/dm/cabjs.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cabjs
[travis-image]: https://img.shields.io/travis/Secbone/cabjs.svg?style=flat-square
[travis-url]: https://travis-ci.org/Secbone/cabjs
