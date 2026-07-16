const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Add delete functionality
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append delete button to li
  li.appendChild(deleteBtn);

  // Append li to the list
  taskList.appendChild(li);

  // Clear input
  input.value = '';
  input.focus();
}

// Add event listener for the button
addBtn.addEventListener('click', addTask);

// Also add task when Enter key is pressed inside input
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
