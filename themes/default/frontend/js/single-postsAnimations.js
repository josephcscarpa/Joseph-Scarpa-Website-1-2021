var tl = anime.timeline({ easing: "easeOutExpo", duration: 750 });
// Add children
tl.add({ targets: "#preload-waiter", opacity: 1, duration: 200 })
  .add({ targets: "#nav-title", opacity: 1, translateY: 100, duration: 200 })
  .add({ targets: "#nav-list", opacity: 1, translateY: 100, duration: 200 })
  .add({ targets: "#title", opacity: 1, translateY: 100, duration: 200 })
  .add({ targets: "#tagline", opacity: 1, translateY: 100, duration: 200 })
  .add({ targets: "#divider", opacity: 1, translateY: 100, duration: 400 })
  .add({ targets: "#content", opacity: 1, duration: 600, translateY: -50 });
