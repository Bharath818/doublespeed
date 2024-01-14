// const navSlide = () => {
//     const navMobile = document.querySelector('.nav-mobile');
//     const navBar = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     navMobile.addEventListener('click', () => {
//         navBar.classList.toggle('nav-active');
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = "";
//             } else {
//                 link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.4}s`;
//             }
//         });
//         navMobile.classList.toggle('closeNav')
//     });
    
    

// }

// navLinks.forEach((link) => {
//     link.addEventListener('click', () => {
//         navBar.classList.remove('nav-active');
//         navLinks.forEach((link) => {
//             link.style.animation = "";
//         });
//         navMobile.classList.remove('closeNav');
//     });
// });
// }

// navSlide();


const navSlide = () => {
    const navMobile = document.querySelector('.nav-mobile');
    const navBar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    navMobile.addEventListener('click', (event) => {
        // Check if the clicked element is not a nav link
        if (!event.target.classList.contains('nav-links')) {
            navBar.classList.toggle('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
            });
            navMobile.classList.toggle('closeNav');
        }
    });

    // Add an event listener for each nav link to close the menu
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navBar.classList.remove('nav-active');
            navLinks.forEach((link) => {
                link.style.animation = "";
            });
            navMobile.classList.remove('closeNav');
        });
    });
}

navSlide();

