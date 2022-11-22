var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
let dataObject = getData();

updateForm();

formRef.addEventListener('input', throttle(handleInput, 500));

function handleInput(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const valueEmail = email.value.trim();
  const valueMessage = message.value.trim();

  if (!valueEmail || !valueMessage) return;

  const userFeedback = createMessageForm(valueEmail, valueMessage);

  saveData(userFeedback); 
}

function createMessageForm(valueEmail, valueMessage) {
  return { email: valueEmail, message: valueMessage };
}

function saveData(userFeedback) {
  dataObject = userFeedback;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataObject));
}

function getData() {
  try {
    const dataJson = localStorage.getItem(LOCAL_KEY);
    if (!dataJson) return [];
    return JSON.parse(dataJson);
  } catch (error) {
    console.log(error.name);
    return [];
  }
}

function updateForm() {
  formRef.elements.email.value = dataObject.email || '';
  formRef.elements.message.value = dataObject.message || '';
}

formRef.addEventListener('submit', clearForm);

function clearForm(event) {
  event.preventDefault();
  console.log(dataObject);
  event.target.reset();
  localStorage.clear();
}
