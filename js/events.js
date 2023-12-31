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
// Get references to the modal and button elements
const modal = document.getElementById('notificationModal');
const showModalButton = document.getElementById('showNotification');
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