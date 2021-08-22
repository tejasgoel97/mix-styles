mix-styles
==============
Mix styles and classname when using css modules.


[](https://www.npmjs.com/package/react-markdown#install)Install
---------------------------------------------------------------

[npm](https://docs.npmjs.com/cli/install):

```source-shell
npm install mix-styles --save
```
--------------------------------------------------------------------------
[](https://www.npmjs.com/package/mix-styles#why-this-one)Why this one?
It was observed that when developers use css modules inside their project(eg React, NextJs, Gatsby, Vuejs, Angular) and try to add the styles or classname to their components they often face challenge adding multiple classes at a time. This logic is complex and may lead to some mistakes as make embedded expressions using Template Literals.
Using mix-styles solves this issue.
See here the importance of using [CSS Modules](https://css-tricks.com/css-modules-part-1-need/)



# Use-Cases
First we will look at Harder Way and then move to easier way.

Suppose we have defined three styles based on classNames as following and saved them in myStyles.module.css

```css
.bg_yellow {
	background: yellow;
}
.p_4 {
	padding: 4px;
}
.b_solid{
	border: 3px solid black
}
```
#### Harder Way
We can add this to one of the element.
```js
import styles from "myStyles.module.css"

export default function MyComponent(){
	return (
		<div className={`${styles.bg_yellow} ${styles.p_4} ${styles.b_solid}`}>
			The Harder Way
		</div>
	)
}
```
In above code we used Template Literals(Introduced in Javascript ES6).
#### Easy Way (using mix-styles)
```js
import styles from "myStyles.module.css"
import ms from "mix-styles"

export default function MyComponent(){
	return (
		<div className={ms(styles.bg_yellow, styles.p_4, styles.b_solid)}>
			The Easy Way
		</div>
	)
}
```
In above examples we have provided all of our styles as the argument to our imported mix style module. Just use commas, no fancy template literals or string concatenation.

## Use with Other style libraries like Bootstrap

With 'mix-styles' we can add our own css module styles and bootstrap styles together.
Suppose you want to apply "d-flex" and 'container'(provided by bootstrap) classname and your predefined classnames in the above examples.
```js
import styles from "myStyles.module.css"
import ms from "mix-styles"

export default function MyComponent(){
	return (
		<div className={ms(styles.bg_yellow, styles.p_4, "d-flex", "container")}>
			Using Bootstrap with your own Classnames
		</div>
	)
}
```
The "mix-style" package automatically handles the mixing of styles created by you and the bootstrap styles.
Similarly we can use mix-styles to combine our styles classnames with other design libraries availabe(such as [Tailwindcss](https://tailwindcss.com/docs), [Material.io](https://material.io/design))

#### Whats next
* Our next step is to test this library to other view Libraries in market.
* Make mix-styles compatible with react native stylesheet.

### Contributors 
### [TheJavaScript.org](thejavascript.org)
