// script.js

const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('selected-count');
const total = document.getElementById('total-price');
const confirmButton = document.getElementById('confirm-selection');
const modal = document.getElementById('confirmation-modal');
const modalCount = document.getElementById('modal-count');
const modalPrice = document.getElementById('modal-price');
const closeModalButton = document.getElementById('close-modal');

const ticketPrice = 10; // Price per seat

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});

// Confirm button click event
confirmButton.addEventListener('click', () => {
    modalCount.innerText = count.innerText;
    modalPrice.innerText = total.innerText;
    modal.classList.add('show');
});

// Close modal event
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
});
