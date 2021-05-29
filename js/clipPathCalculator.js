'use strict';

// select all elements to be clipped 
const clippedElements = document.querySelectorAll('.clipped');  
const ANGLE = 6; // desired angle in degrees
const SECTION_PADDING = 50; // section padding

// Calculate new clip-path coordinates to maintain the desired angle on page resize
function definePolygon(entries) {
  for (const entry of entries) {
      
    const width = entry.contentRect.width; // value in px
    const height = entry.contentRect.height; // value in px
    // simple trigonometry:  y = height - width * tan(ANGLE) 

    // for header shape
    if (entry.target.classList.contains('header')) {
        const y = height - (width * Math.tan(ANGLE * Math.PI / 180));
        entry.target.style.clipPath = `polygon(0 0, 100% 0, 100% ${y}px, 0 100%)`; 
        
    } else {
        // for section shape
        const y = width * Math.tan(ANGLE * Math.PI / 180);
        entry.target.style.clipPath = `polygon(0 ${y}px, 100% 0, 100% calc(100% - ${y}px), 0 100%)`;
        // padding to compensate clipped shape + some additional padding
        entry.target.style.padding = `${y + SECTION_PADDING}px 0`;
    }
    
  };
};

// Create resize observer and observe
const resizeObserver = new ResizeObserver(definePolygon);
clippedElements.forEach(e => resizeObserver.observe(e));