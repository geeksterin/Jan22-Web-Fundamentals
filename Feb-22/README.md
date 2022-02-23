Feb - 22

Q1. Descendant and Child Combinators:
-> We can give CSS to any child (direct or child of child or any generation) who is descendant of the parent.
-> In child combinator, it's just 1 level down.

Sibling relation.

1. General Sibling (tilde character ~) -> It should have the same parent. (And it should be AFTER the first selector).
-> Combines two selectors and the first one is the first sibling (The style is not applied to this one).
Any sibling after the selector which matches the rule and has the same parent will have the style.

2. Adjacent Sibling Combinator -> It cares ONLY about the next sibling (if that matches the selector).
Adjacent sibling -> (Plus character +) -> It checks if the adject sibling (The one next to it), matches the selector, then the style will be applied.

Combinators:
-> Descendant ( ) -> Cares about children (any generation)
-> Child (>) -> Cares about only 1 level down (direct children)
-> General Sibling (~) -> Cares about any sibling after me.
-> Adjacent Sibling (+) -> Cares about my next sibling only.

3. Color:
-> CMYK -> Cyan (Kind of blue), Magenta (Kind of pink), Yellow, Key (Black) (For print media).
-> RGB (Red Green Blue). [0 - 255] 
8bit display. 2^8 = 256 [0 - 255] (Current Technology).
0,0,0 -> Black
255,255,255 -> White
-> 16 million colors.
-> color: 140 color names

-> HEX (Hexadecimal) -> #(6 characters) [0 - F]
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

-> RGBA (RGB with Alpha (Opacity))

-> https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
> 
    CSS Level 1 only included 16 basic colors, called the VGA colors as they were taken from the set of displayable colors on VGA graphics cards.
    CSS Level 2 added the orange keyword.
    Although various colors not in the specification (mostly adapted from the X11 colors list) were supported by early browsers, it wasn't until SVG 1.0 and CSS Colors Level 3 that they were formally defined. They are called the extended color keywords, the X11 colors, or the SVG colors.
    CSS Colors Level 4 added the rebeccapurple keyword to honor web pioneer Eric Meyer.

-> https://www.google.com/search?q=color+picker
-> Color Palette (Set of colors).
-> https://colorhunt.co/
-> https://coolors.co/
-> https://mycolor.space
-> https://colors.muz.li/

4. Grouping:
-> Group selctors together.
-> Combinators will combine, needs a relation.
-> OR (comma ,).
-> AND (Stick the selectors togher)

-> Assignment 1:
A calculator. No functionality. But with the CSS.
-> https://dribbble.com/tags/calculator

Assignment 2:
A UI for rock, paper scissor.
-> https://www.rpsgame.org/random

