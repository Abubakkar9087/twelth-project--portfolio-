    // Navbar Fade In
    gsap.fromTo("nav ul li", {
        autoAlpha: 0,    // Start with opacity 0 (invisible)
        y: -50           // Move it upward off the screen
    }, {
        autoAlpha: 1,    // End at opacity 1 (fully visible)
        y: 0,            // End at its natural position
        duration: 1,
        delay: 0.1,
        stagger: 0.2     // Stagger animation for each nav item
    });

    // Home Page Text Animations
    gsap.fromTo(".home p", {
        autoAlpha: 0,
        x: -100           // Start from left side
    }, {
        autoAlpha: 1,
        x: 0,             // Return to its original position
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.fromTo(".home h1", {
        autoAlpha: 0,
        x: 100
    }, {
        autoAlpha: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.6
    });

    gsap.fromTo(".home h3", {
        autoAlpha: 0,
        y: 50
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.9
    });

    // Buttons Animation
    gsap.fromTo(".btns a", {
        autoAlpha: 0,
        y: 50            // Start buttons from below
    }, {
        autoAlpha: 1,
        y: 0,            // End at their original position
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.0
    });

    // Profile Image Slide In
    gsap.fromTo(".home .child img", {
        autoAlpha: 0,
        x: 100            // Start image from right side
    }, {
        autoAlpha: 1,
        x: 0,             // Return to its natural position
        duration: 1.5,
        ease: "power2.out",
        delay: 1.3
    });

    // About Section Fade In on Scroll
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".about .child", {
        autoAlpha: 0,
        y: 50             // Start from below
    }, {
        autoAlpha: 1,
        y: 0,             // Return to original position
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about",
            start: "top center"
        }
    });

    // Skills Section Fade In on Scroll
    gsap.fromTo(".skills .child", {
        autoAlpha: 0,
        y: 50
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".skills",
            start: "top center"
        }
    });

    // Projects Section Zoom In on Scroll
    gsap.fromTo(".project .child", {
        autoAlpha: 0,
        scale: 0.9        // Start projects slightly zoomed out
    }, {
        autoAlpha: 1,
        scale: 1,         // End at original size
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".project",
            start: "top 70%"    // Trigger when 70% in view
        }
    });

    // Contact Section Slide In
    gsap.fromTo(".contact .child", {
        autoAlpha: 0,
        x: 100            // Start sliding from the right
    }, {
        autoAlpha: 1,
        x: 0,             // Return to natural position
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".contact",
            start: "top center"
        }
    });

    // Footer Animation
    gsap.fromTo("footer", {
        autoAlpha: 0,
        y: 50             // Start from below
    }, {
        autoAlpha: 1,
        y: 0,             // End at its original position
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5
    });

 const education = document.getElementById('education');
 const experience = document.getElementById('experience');
 const edu = document.getElementById('edu');
 const exp = document.getElementById('exp');

 education.addEventListener('click', ()=>{
    education.style.backgroundColor = "blue";
    education.style.color = "white";
    experience.style.backgroundColor = "transparent";
    experience.style.color = "black";
     edu.style.display = 'flex';
     exp.style.display = 'none';
 });

 experience.addEventListener('click', ()=>{
    education.style.backgroundColor = "transparent";
    experience.style.backgroundColor = "blue";
    education.style.color = "black";
    experience.style.color = "white";
     exp.style.display = 'flex';
     edu.style.display = 'none';
 });

 const hamburger = document.getElementById('hamburger');
 const nav = document.getElementById('nav');
 const navham = document.getElementById('ham-nav');
 const header = document.getElementById('header');
 const navitem = document.getElementById('nav-item');

 hamburger.addEventListener('click',()=>{
    if (navham.style.display === 'flex') {
        navham.style.display = 'none';
        header.style.backgroundColor = '#4e54c8';
    } else {
        header.style.backgroundColor = '#00347c';
        navham.style.display = 'flex';
    }
 });

