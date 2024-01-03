const input = document.querySelector('#input-field');
const ul = document.querySelector('ul');
const button = document.getElementById('btn');

// Load existing To-Do list items from localStorage
document.addEventListener('DOMContentLoaded', loadList);

function createListItem() {
  const inputValue = input.value.trim();

  if (inputValue) {
    const item = document.createElement('li');
    const textNode = document.createTextNode(inputValue);
    const dBtn = document.createElement('button');

    dBtn.textContent = 'X';

    item.appendChild(textNode);
    item.appendChild(dBtn);
    ul.appendChild(item);

    dBtn.addEventListener('click', () => {
      ul.removeChild(item);
      saveList();
    });

    // Save To-Do list to localStorage
    saveList();

    input.value = '';
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  createL/istItem();
}

button.addEventListener('click', createListItem);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createListItem();
    input.value = '';
  }
});

document.querySelector('form').addEventListener('submit', handleFormSubmit);

function saveList() {
  // Save the To-Do list items to localStorage
  const items = Array.from(ul.children).map((li) => li.firstChild.textContent);
  localStorage.setItem('todoItems', JSON.stringify(items));
}

function loadList() {
  // Load the To-Do list items from localStorage
  const storedItems = localStorage.getItem('todoItems');

  if (storedItems) {
    const items = JSON.parse(storedItems);

    items.forEach((text) => {
      const item = document.createElement('li');
      const textNode = document.createTextNode(text);
      const dBtn = document.createElement('button');

      dBtn.textContent = 'X';

      item.appendChild(textNode);
      item.appendChild(dBtn);
      ul.appendChild(item);

      dBtn.addEventListener('click', () => {
        ul.removeChild(item);
        saveList();
      });
    });
  }
}
