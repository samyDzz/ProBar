# ProBar

ProBar is a progress bar with multiple options.

# Features !

  - config a ProBar color.
  - config a ProBar background.
  - config a Speed of ProBar.
  - config a "Goto" option with timing.
  - cutomize with your own CSS.

### Requirement

ProBar require [JQuery](https://code.jquery.com/).

# How to Use :

#### FIRST require CDN JQuery:

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
```

#### Link `ProBar.js` from your html file
```html
<script src="/your/path/to/ProBar.js"></script>
```

#### Secondly instantiate ProBar:

```js
var probar = new ProBar(options);
```

#### The options :

```js
{
    color : "#2a2a2a", // color of the Progress bar. 
    bgColor : "#efefef", // color background of the Progress bar
    speed 0.3, // speed of animation. ( unit in secondes )
    wrapper : "body" // the wrapper who append ProBar. if class ".class" ,if id "#id" 
}
```

#### Functions :

```js
probar.setColor("#2980b9"); // change color of ProBar.
probar.setWrapperColor("#ecf0f1"); // change background color of ProBar.
probar.setSpeed(3000); // change Speed to 3 secondes.
probar.goto(100); // reach 100%.
probar.goto(100,2000); // reach 100% in 2 secondes.
```

#### Upcoming features 

 - Add Multiple Instantiation.
 - Remove JQuery requirement.

License
----

MIT

# ** Made with love ❤ **

[jQuery]: <https://jquery.com>