# DARKSIGHT
>v2.1

A dark-themed, CSS library composed of a series of re-usable, responsive, material design components.
Created for [Vue.js][vue], developed in Gulp, styled with SASS, and lovingly crafted by Front-End Developer [John Durtche][email].

Divided into 8 main categories: Typography, Grid System, Color Palette, Icons, Components, Utilities, and Release Notes.

## The Principles

These three principles of compact, powerful, and simple make Darksight unique.

- COMPACT - You can use all of the library by importing one cascading style sheet (CSS) file&mdash;no JavaScript required. The annoying class name prefixes found in other frameworks have been omitted (-vs-, -tw-, -v-, etc.), since they are understandable but unneccesary. A limited color palette but with variations for both opacity and application of colors to text, borders, backgrounds and more.
- POWERFUL - Using the best of the latest HTML and CSS element tags, classes, pseudo-elements, transitions, filters, and transforms, the framework has dozens of pre-built components that are ready to include in your web projects and has many generic styles that can be applied to various elements, giving you more flexibility in designing your own components.
- SIMPLE - Built from the ground with a minimalist, semantic-above-all-else approach to keep the framework from devolving into a cluster of confusing class names and overriding, conflicting styles like other libraries, it contains class names that are divided into 7 major categories: Typography, Grid System, Color Palette, Icons, Components, and Utilities.

## Installation

Using the library in your HTML is as easy as adding the following line of code into the top of your HTML &lt;head&gt; element:

```sh
<link href="/css/index.css" rel="stylesheet">
```

<b>Note:</b> This is the default path where Gulp exports only the CSS styles from the library that you have included in your HTML files!

## Development

You can clone this version (2.1) of Darksight or build your own. You'll need to install NodeJS and use the following dependencies:

```sh
npm install boxicons --save
npm install gulp gulp-sass sass
npm install gulp-purge-css -D
npx gulp
```

## Customizing

You can now customize Darksight to apply themes or SASS overrides.

Add your SASS override files to the following path:

```sh
darksight/sass/OVERRIDEFILE.scss
```

You can also include your own theme easily by adding it to the following path:

```sh
darksight/themes/YOURTHEMENAME.scss
```

Once you have included your new theme SASS file, simply replace the default theme import at the bottom of the <code>_variables.scss</code> file with the relative path of your new theme file:

```sh
@import 'themes/YOURTHEMENAME.scss';
```

## Contribute
Want to contribute? Great!

John Durtche uses Gulp + SASS for the fastest development but recommends Vue + Vite for builds.

If you have comments, suggestions, bugs, or anything to report, you can contact John directly by [email].

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [email]: <mailto:johndurtche@gmail.com>
   [vue]: <https://vuejs.org>
