#animate-css-webpack

Webpack loader for animate.css


you want to keep your css small this is the way to go


create the following file in your config and in your webpack config
load it as:

```
  entry: {
    'main': [
      'bootstrap-sass!./src/theme/bootstrap.config.js',
      'font-awesome-webpack!./src/theme/font-awesome.config.js',
      'animate-css-webpack!./src/theme/animate-css.config.js',
      './src/client.js'
    ]
  },

```

```javascript
module.exports = {
  // Default for the style loading
  styleLoader: 'style-loader!css-loader',

  styles: {

    "attention_seekers": {
      "bounce": true,
      "flash": true,
      "pulse": true,
      "rubberBand": true,
      "shake": true,
      "headShake": true,
      "swing": true,
      "tada": true,
      "wobble": true,
      "jello": true,
    },

    "bouncing_entrances": {
      "bounceIn": true,
      "bounceInDown": true,
      "bounceInLeft": true,
      "bounceInRight": true,
      "bounceInUp": true,
    },

    "bouncing_exits": {
      "bounceOut": true,
      "bounceOutDown": true,
      "bounceOutLeft": true,
      "bounceOutRight": true,
      "bounceOutUp": true,
    },

    "fading_entrances": {
      "fadeIn": true,
      "fadeInDown": true,
      "fadeInDownBig": true,
      "fadeInLeft": true,
      "fadeInLeftBig": true,
      "fadeInRight": true,
      "fadeInRightBig": true,
      "fadeInUp": true,
      "fadeInUpBig": true,
    },

    "fading_exits": {
      "fadeOut": true,
      "fadeOutDown": true,
      "fadeOutDownBig": true,
      "fadeOutLeft": true,
      "fadeOutLeftBig": true,
      "fadeOutRight": true,
      "fadeOutRightBig": true,
      "fadeOutUp": true,
      "fadeOutUpBig": true,
    },

    "flippers": {
      "flip": true,
      "flipInX": true,
      "flipInY": true,
      "flipOutX": true,
      "flipOutY": true,
    },

    "lightspeed": {
      "lightSpeedIn": true,
      "lightSpeedOut": true,
    },

    "rotating_entrances": {
      "rotateIn": true,
      "rotateInDownLeft": true,
      "rotateInDownRight": true,
      "rotateInUpLeft": true,
      "rotateInUpRight": true,
    },

    "rotating_exits": {
      "rotateOut": true,
      "rotateOutDownLeft": true,
      "rotateOutDownRight": true,
      "rotateOutUpLeft": true,
      "rotateOutUpRight": true,
    },

    "specials": {
      "hinge": true,
      "rollIn": true,
      "rollOut": true,
    },

    "zooming_entrances": {
      "zoomIn": true,
      "zoomInDown": true,
      "zoomInLeft": true,
      "zoomInRight": true,
      "zoomInUp": true,
    },

    "zooming_exits": {
      "zoomOut": true,
      "zoomOutDown": true,
      "zoomOutLeft": true,
      "zoomOutRight": true,
      "zoomOutUp": true,
    },

    "sliding_entrances": {
      "slideInDown": true,
      "slideInLeft": true,
      "slideInRight": true,
      "slideInUp": true,
    },

    "sliding_exits": {
      "slideOutDown": true,
      "slideOutLeft": true,
      "slideOutRight": true,
      "slideOutUp": true,
    }
  }
}
```

## License
animate-css-webpack is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
Pull requests are the way to go here. Submit a PR and I will review
once I get a chance, there are no hard guidelines for PRs just follow
some sort of a sesnible style similar to what is there.
