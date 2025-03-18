document.addEventListener('scroll', () => {
    const header = document.querySelector('nav', '/AICTE.html>nav');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


for (let i = 1; i <= 8; i++) {
    // Determine which div the paragraph belongs to
    const divClass = i <= 4 ? '.info1' : '.info2';
    const paragraphIndex = i <= 4 ? i : i - 4;

    // Select the specific key and corresponding paragraph
    const key = document.querySelector(`.key${i}`);
    const infoParagraph = document.querySelector(`${divClass} p:nth-of-type(${paragraphIndex})`);

    // Add event listeners for mouseover and mouseout
    key.addEventListener('mouseover', () => {
        infoParagraph.style.color = 'white';
        infoParagraph.style.backgroundColor = "navy";
    });

    key.addEventListener('mouseout', () => {
        infoParagraph.style.color = 'black';
        infoParagraph.style.backgroundColor = "";
    });
}





// home Slider

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);


// off-screen-ham-menu

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const menuItems = document.querySelectorAll('.menu-item');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        offScreenMenu.classList.remove('active');
        hamMenu.classList.remove('active');
    });
});

// club

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.club_container');

    const handleScroll = () => {
        containers.forEach((container) => {
            const containerPosition = container.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            if (containerPosition.top < screenHeight - 70 && containerPosition.bottom > 10) {
                // Add 'visible' if the container is in the viewport
                container.classList.add('visible');
            } else {
                // Remove 'visible' if the container leaves the viewport
                container.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scroll event once to handle any visible containers on page load
    handleScroll();
});



// infrastructure


// Optional: JavaScript to make sure only one checkbox can be checked at a time
const checkboxes = document.querySelectorAll('.card-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Uncheck all other checkboxes
        checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== this) {
                otherCheckbox.checked = false;
            }
        });
    });
});
