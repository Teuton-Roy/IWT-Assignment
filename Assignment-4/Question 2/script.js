const eventDateInput = document.getElementById('event-date');
const ageOnEventInput = document.getElementById('age-on-event');

eventDateInput.addEventListener('change', e => {
  const selectedDate = new Date(e.target.value);
  const today = new Date();
  const ageInMilliseconds = today - selectedDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  ageOnEventInput.value = Math.floor(ageInYears);
});
