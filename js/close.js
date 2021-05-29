'use strict'
// close navigation - if the navigation checkbox is unchecked css will hide the navigation
document.querySelector('.navigation').addEventListener('click', function(e){e.target.closest('.navigation__nav') ? document.getElementById('navi-toggle').checked = false : ''; });
// close popup - if the popup is no longer a target (.popup:target) css style will hide it
document.querySelector('.popup').addEventListener('click', function(e){e.target.closest('.popup') ? window.location.hash = "#section-tours" : ''; });

