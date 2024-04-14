// Smooth scroll to sections using data-target on links in top navbar
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[data-target]");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = -80; // Offset by 80 pixels (5rem) above the target section
                const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: targetTop + offset,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Smooth scroll and mouse-draggable media for slide-container
const slider = document.querySelector('.slide-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

// Event to display hidden accordion content when header is clicked
const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (accordionHeader) {
        var content = accordionHeader.nextElementSibling;
        if (content.classList.contains('accordion-content')) {
            accordionHeader.addEventListener('click', function () {
                if (this.classList.contains('is-active')) {
                    this.classList.remove('is-active');
                    content.style.maxHeight = null;
                } else {
                    this.classList.add('is-active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });
});

// Get references to the modal and button elements
const modal = document.getElementById('isModal');
const showModalButton = document.getElementById('showModal');
const closeModalButton = document.getElementById('closeModal');

// Function to show the modal
function showModal() {
    modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}

// Event listener to show the modal when the button is clicked
showModalButton.addEventListener('click', showModal);

// Event listener to hide the modal when the close button is clicked
closeModalButton.addEventListener('click', hideModal);

// Event listener to hide the modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

// Get references to the notification and button elements
const notification = document.getElementById('isNotification');
const showNotificationButton = document.getElementById('showNotification');
const closeNotificationButton = document.getElementById('closeNotification');

// Function to show the notification
function showNotification() {
    notification.style.display = 'block';
}

// Function to hide the notification
function hideNotification() {
    notification.style.display = 'none';
}

// Event listener to show the notification when the button is clicked
showNotificationButton.addEventListener('click', showNotification);

// Event listener to hide the notification when the close button is clicked
closeNotificationButton.addEventListener('click', hideNotification);

// Event listener to hide the notification when clicking outside the notification
window.addEventListener('click', (event) => {
    if (event.target === notification) {
        hideNotification();
    }
});