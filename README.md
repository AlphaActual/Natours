# Natours - Tourist agency website

This website was created for the purpose of learning advanced CSS building techniques and features.
Things covered by this project are among others:
- Learning SASS syntax and features such as variables, mixins, functions, nesting etc.
- Different types of media queries
- Breakpoints based on design and screen size of popular devices
- Responsive design principles
- Good design practises with the user experience in mind
- Mobile vs Desktop first development, pros and cons
- BEM - Block Element Modifier methodology
- Organization of files and folders using 7-1 pattern
- Optimization of images - different loading techiques - art direction, resolution switching, density switching
- Advanced animations and transitions
- Using the transform property to manipulate elements with scale, skew, rotate, translate etc.
- Using different types of gradients - linear, radial, "solid-color"
- Correct usage of different units such as px, em, rem, %, vh, vw
- Creating a grid system using rows and columns based on floats
- Styling forms checkboxes, radio buttons etc.
- Implementing rhomboid design using clip-path and skew techniques
- Using pseudo elements and selectors such as :target and :checked to implement navigation and pop-up functionality without using JS
- Deep study of css behind the scenes including cascade, importance, specificity, loading order, parsing...
- Testing for browser support using @supports query
- Site deployment process - compiling SASS, combining stylesheets (concat), compressing

I implemented 2 simple JS scripts only to add small functionality to the site.
- First one is to automatically calculate and maintain the desired angle of the clip-path polygon as the screen width changes using resize observer API.
- The second one is to close the navigation when user clicks anywhere within it.
In case the user has disabled JS, the fallback is using media query breakpoints to keep the angle within the acceptable margins.
Since the focus of this project was to use CSS to its maximum potential i kept the JavaScript to a bare minimum.


