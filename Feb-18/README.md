Feb-18

1. Pseudo Selectors
- It is a fake / false selector, it needs a base selector to work with.
- It cannot be used on it's own.
(:hover) -> Apply CSS when I am hovering my mouse over any element.

2. padding
Margin -> it gives space AROUND the element (basically, outside the boundary ❌ / border ✔).
Padding -> It gives space within the element. (Inside the border).

Shorthand for Padding and margin:
-> 4 values (Clockwise, top right bottom left)
-> 3 values (top, horizontal -> left & right same, bottom).
-> 2 values (vertical (top + bottom), horizontal (left + right))
-> 1 value (All 4 sides)

3. Pseudo Classes
-> hover -> When mouse is hovered (on top of the element) on the element
-> active -> If I am actively engaging with the element (Basically, click). If I am activating the element by clicking on it.
-> focus -> When I am focused on something. (If I type, then it will input in that field).
-> first-child -> Whether I AM the first child of my parent or not.
-> last-child -> Whether I AM the last child of my parent or not.
-> nth-child() -> Whether I AM the nth child of my parent or not.
--> n (2n, 2n+1) -> Odd even alternating row styles. (odd, even).

Further Reading ->
(checked, disabled, only-child, required).
-> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

Assignment:
-> Create a table (Class Schedule) and give alternating background colors. But I want three alternating (lightgray, gray, darkgray, lightgray, gray, darkgray, lightgray, gray, darkgray). (Atleast have 10-12 rows).
* Use nth-child with equations.