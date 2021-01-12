var tl = anime.timeline({easing: 'easeOutExpo', duration: 750});

// Add children
tl.add({targets: '#preload-waiter', opacity: 1, duration: 200}).add({targets: '#nav-title', opacity: 1, translateY: 100, duration: 200}).add({targets: '#nav-list', opacity: 1, translateY: 100, duration: 200}).add({targets: '#name-intro', opacity: 1, translateY: 100, duration: 200}).add({targets: '#name', opacity: 1, translateY: 100, duration: 200}).add({targets: '#tagline', opacity: 1, translateY: 100, duration: 200}).add({targets: '#paragraph-bio', opacity: 1, translateY: -100, duration: 200}).add({targets: '#learn-more', opacity: 1, scale: 1, duration: 200}).add({targets: '#scroll-mouse', opacity: 1, duration: 1000})
let aboutCardAnimation = anime({
targets: '#about-me',
// Properties
translateY: -100,
opacity: 1,
duration: 200,
easing: 'linear',
autoplay: false
});
let resumeCardAnimation = anime({
targets: '#resume',
// Properties
translateY: -100,
opacity: 1,
duration: 200,
easing: 'linear',
autoplay: false
});
let contactCardAnimation = anime({
targets: '#contact-me',
// Properties
translateY: -100,
opacity: 1,
duration: 200,
easing: 'linear',
autoplay: false
});
var isAboutCardTriggered = false;
var isResumeCardTriggered = false;
var isContactCardTriggered = false;
var waypoint = new Waypoint({
element: document.getElementById('about-me'),
handler: function (direction) {
if (! isAboutCardTriggered) {
aboutCardAnimation.play();
isAboutCardTriggered = true;
}
},
offset: '60%'
})
var waypoint = new Waypoint({
element: document.getElementById('resume'),
handler: function (direction) {
if (! isResumeCardTriggered) {
resumeCardAnimation.play();
isResumeCardTriggered = true;
}
},
offset: '60%'
})
var waypoint = new Waypoint({
element: document.getElementById('contact-me'),
handler: function (direction) {
if (! isContactCardTriggered) {
contactCardAnimation.play();
isContactCardTriggered = true;
}
},
offset: '90%'
})