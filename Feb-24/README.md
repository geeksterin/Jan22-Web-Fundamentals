Feb-24

1. Important!
-> This makes exception to the specificity rule. If we give !important to any selector property, that will become highest priority. If more than one has !important, then it will fallback to the specificity priority and compare which is higher priority from those 2.

1. Pseudo with ID
2. ID Selector
3. Pseudo with Class / Attribute
4. Class Selector / Attribute Selector
5. Pseudo with Tag Type
6. Tag Type selector
7. Universal

-> The sequence of class names / attributes in the HTML does not matter. In CSS for same selector levels, which ever is written after will override the previous one.

2. Positioning - 
-> static - (Default) -> The default position decided by the browser during rendering.
-> relative -> It will shift the element with respect to the initial position. (The initial position is retained, that means, empty space WILL be there).
-> fixed -> It will place the element with respect to the viewpoert. (The initial position WILL NOT be retained, the element is REMOVED from the document flow and is pasted on the top).
-> absolute -> It will place the element with respect to the closest positioned ancestor. (It is removed from the document flow).
-> sticky -> It behaves as a regular element until and unless the top / left condition is satisfied. Once that is satisfied, then itbehaves like a fixed element. (It will not place itself WRT the viewport, but the parent).

-> Closest -> If grandparent and greatgrand parent, both have position property, then the old closest to me. (Grandparent).
-> Positioned -> Having some position property (it should not be default, static).
-> Ancestor -> Parent, Parent of Parent, Great Grand parent, etc etc etc, eventually HTML.

-> Document Flow -> How things are rendered by default in the webpage. (Rendering flow).

-> Viewport -> The area where user can VIEW the website. The polygon where the HTML document is rendered.

Assignment 1:
Start working on your landing pages which you picked up from dribbble (Atleast the navigation bar and 1 section from that).

Assignment 2:
-> Facebook Chatbox (UI shared in the image).







5. Intro to JS

-> Flex justify content vs margin.


Viewport vs Display diff.


cursor uring image.

Shorthand for border.
-> What do you mean by Cascading in CSS?



-> details and summary
-> Units of measurement


-> meta (share in facebook)
-> doctype

text-transform CSS
calc

A bit more HTML tags.



Input type hidden.


1. font.
-> Adding custom font.
-> Bold / Italic / Underline.
-> 