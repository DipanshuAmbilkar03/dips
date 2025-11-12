let records = [];
let idCounter = 1;

function displayRecords() {
  const tbody = document.querySelector('#dataTable tbody');
  tbody.innerHTML = '';
  records.forEach((r) => {
    tbody.innerHTML += `
      <tr>
        <td>${r.id}</td>
        <td>${r.name}</td>
        <td>${r.age}</td>
        <td>${r.course}</td>
        <td>
          <button onclick="editRecord(${r.id})">Edit</button>
          <button onclick="deleteRecord(${r.id})">Delete</button>
        </td>
      </tr>`;
  });
}

function addRecord() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const course = document.getElementById('course').value;

  if (name && age && course) {
    records.push({ id: idCounter++, name, age, course });
    displayRecords();
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('course').value = '';
  } else {
    alert('Please fill all fields');
  }
}

function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
  displayRecords();
}

function editRecord(id) {
  const record = records.find(r => r.id === id);
  const newName = prompt("Edit name:", record.name);
  const newAge = prompt("Edit age:", record.age);
  const newCourse = prompt("Edit course:", record.course);

  if (newName && newAge && newCourse) {
    record.name = newName;
    record.age = newAge;
    record.course = newCourse;
    displayRecords();
  }
}
