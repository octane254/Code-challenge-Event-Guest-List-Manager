document.addEventListener('DOMContentLoaded', () => {
  const guestForm = document.getElementById('guest-form');
  const guestNameInput = document.getElementById('guest-name');
  const guestCategorySelect = document.getElementById('guest-category');
  const guestList = document.getElementById('guest-list');
  const clearListBtn = document.getElementById('clear-list');

  // Add guest to the list
  guestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = guestNameInput.value.trim();
    const category = guestCategorySelect.value;

    if (name === '') return;

    const li = document.createElement('li');
    li.textContent = `${name} (${category})`;

    // Optional: Add a remove button for each guest
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      guestList.removeChild(li);
    });

    li.appendChild(removeBtn);
    guestList.appendChild(li);

    guestNameInput.value = '';
    guestCategorySelect.selectedIndex = 0;
  });

  // Clear the entire guest list
  clearListBtn.addEventListener('click', () => {
    guestList.innerHTML = '';
  });
});