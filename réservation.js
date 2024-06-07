const saveCheckbox = document.getElementById('save-info');
saveCheckbox.addEventListener('change', handleReservationSave);

function handleReservationSave() {
  if (saveCheckbox.checked) {
    showReservationConfirmation();
  }
}

function showReservationConfirmation() {
  // Création du message de confirmation
  const confirmationMessage = document.createElement('div');
  confirmationMessage.classList.add('confirmation-message');
  confirmationMessage.textContent = 'Merci d\'avoir enregistré votre réservation ! Nous vous invitons maintenant à découvrir nos chambres et nos plats sur la page de visite de Lotus.';

  // Ajout du message de confirmation à la page
  const confirmationContainer = document.querySelector('.confirmation-container');
  confirmationContainer.appendChild(confirmationMessage);

  // Redirection vers la section "Chambre" après 5 secondes
  setTimeout(() => {
    confirmationMessage.remove();
    window.location.href = 'index.html#chambre';
  }, 5000);
}