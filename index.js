document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const guestList = document.getElementById('guest-list');
  const guestNameInput = document.getElementById('guest-name');
  const guestCategoryInput = document.getElementById('guest-category');
  const clearListButton = document.getElementById('clear-list');

  const MAX_GUESTS = 10;

  // Helper: get color for category
  function getCategoryColor(category) {
    switch (category) {
      case 'Friend': return '#4caf50';
      case 'Family': return '#2196f3';
      case 'Colleague': return '#ff9800';
      default: return '#ccc';
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const guestName = guestNameInput.value.trim();
    const guestCategory = guestCategoryInput.value;

    if (!guestName) return;

    if (guestList.children.length >= MAX_GUESTS) {
      alert('Guest list is full! Maximum 10 guests allowed.');
      return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('guest-item');

    // Guest name
    const nameSpan = document.createElement('span');
    nameSpan.className = 'guest-name';
    nameSpan.textContent = guestName;

    // Category tag
    const categoryTag = document.createElement('span');
    categoryTag.className = 'category-tag';
    categoryTag.textContent = guestCategory;
    categoryTag.style.backgroundColor = getCategoryColor(guestCategory);
    categoryTag.style.color = '#fff';
    categoryTag.style.padding = '2px 8px';
    categoryTag.style.marginLeft = '8px';
    categoryTag.style.borderRadius = '8px';
    categoryTag.style.fontSize = '0.8em';

    // Timestamp
    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    const now = new Date();
    timestamp.textContent = `Added at: ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    timestamp.style.marginLeft = '10px';
    timestamp.style.fontSize = '0.8em';
    timestamp.style.color = '#888';

    // RSVP button
    const rsvpButton = document.createElement('button');
    rsvpButton.className = 'toggle-rsvp';
    rsvpButton.textContent = 'Attending';
    rsvpButton.addEventListener('click', () => {
      rsvpButton.textContent = rsvpButton.textContent === 'Attending' ? 'Not Attending' : 'Attending';
    });

    // Edit button
    const editButton = document.createElement('button');
    editButton.className = 'edit-guest';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newName = prompt('Edit guest name:', nameSpan.textContent);
      if (newName && newName.trim()) {
        nameSpan.textContent = newName.trim();
      }
    });

    // Remove button
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-guest';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      listItem.remove();
    });

    // Append all elements to the list item
    listItem.append(nameSpan, categoryTag, timestamp, rsvpButton, editButton, removeButton);
    guestList.appendChild(listItem);

    // Clear form input
    guestNameInput.value = '';
  });

  // Clear all guests
  clearListButton.addEventListener('click', () => {
    guestList.innerHTML = '';
  });
});
