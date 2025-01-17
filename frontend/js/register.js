const form = document.getElementById('registerForm');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const roleSelect = document.getElementById('role');
const adminSecretField = document.getElementById('adminSecretField');
const adminSecret = document.getElementById('adminsecret');
const requiredFields = document.querySelectorAll('[required]');

// Password validation rules
const passwordChecklist = [
    { rule: /(?=.{8,})/, description: 'At least 8 characters' },
    { rule: /[A-Z]/, description: 'Contains an uppercase letter' },
    { rule: /[0-9]/, description: 'Contains a number' },
    { rule: /[@$!%*?&]/, description: 'Contains a special character (@, $, !, %, *, ?, &)' },
];

// Create password checklist dynamically
const checklistContainer = document.getElementById('passwordChecklist');
const repasswordValidation = document.getElementById('repasswordChecklist');

// Show password checklist on focus
password.addEventListener('focus', () => {
    checklistContainer.style.display = 'block';
});

password.addEventListener('blur', () => {
    checklistContainer.style.display = 'none';
});

password.addEventListener('input', () => {
    const passValue = password.value;
    const checklistItems = checklistContainer.querySelectorAll('li');

    passwordChecklist.forEach(({ rule }, index) => {
        const listItem = checklistItems[index];
        if (rule.test(passValue)) {
            listItem.style.color = 'green'; // Mark as valid
            listItem.classList.remove('invalid');
            listItem.classList.add('valid');
        } else {
            listItem.style.color = 'red'; // Mark as invalid
            listItem.classList.remove('valid');
            listItem.classList.add('invalid');
        }
    });
});

// Show re-enter password validation on typing
repassword.addEventListener('focus', () => {
    repasswordValidation.style.display = 'block';
});

repassword.addEventListener('blur', () => {
    repasswordValidation.style.display = 'none';
});

repassword.addEventListener('input', () => {
    const reEnterLi = repasswordValidation.querySelector('li');
    if (password.value === repassword.value && password.value !== '') {
        reEnterLi.textContent = 'Passwords match';
        reEnterLi.style.color = 'green';
        reEnterLi.classList.remove('invalid');
        reEnterLi.classList.add('valid');
    } else {
        reEnterLi.textContent = 'Passwords do not match';
        reEnterLi.style.color = 'red';
        reEnterLi.classList.remove('valid');
        reEnterLi.classList.add('invalid');
    }
});

// Show admin secret input if 'Admin' role is selected
roleSelect.addEventListener('change', () => {
    if (roleSelect.value === 'admin') {
        adminSecretField.style.display = 'block';
        adminSecret.setAttribute('required', 'required');
    } else {
        adminSecretField.style.display = 'none';
        adminSecret.removeAttribute('required');
    }

});

// Validate required fields on focusout
requiredFields.forEach(field => {
    field.addEventListener('focusout', () => {
        const input = document.getElementById(field.id);
        const errorMessage = document.getElementById(`${field.id}Error`);
        if (!input.value.trim()) {
            errorMessage.textContent = `${field.previousElementSibling.textContent} is required.`;
        } else {
            errorMessage.textContent = '';
        }
    });

    field.addEventListener('input', () => {
        const input = document.getElementById(field.id);
        const errorMessage = document.getElementById(`${field.id}Error`);
        if (input.value.trim()) {
            errorMessage.textContent = ''; // Hide error message
        }
    });
});

const field = document.getElementById('adminsecret');
field.addEventListener('focusout', () => {
    const input = document.getElementById(field.id);
    const errorMessage = document.getElementById(`${field.id}Error`);
    if (!input.value.trim()) {
        errorMessage.textContent = `${field.previousElementSibling.textContent} is required.`;
    } else {
        errorMessage.textContent = '';
    }
});

// Form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default browser form submission behavior

    // Collect form data
    const formData = new FormData(form);
    const rawData = Object.fromEntries(formData.entries()); // Convert FormData to JSON-like object

    // Convert keys with brackets into nested objects
    const data = {
        fullname: {
            firstname: rawData['fullname[firstname]'],
            lastname: rawData['fullname[lastname]'],
        },
        mobilenumber: rawData.mobilenumber,
        email: rawData.email,
        password: rawData.password,
        role: rawData.role,
        adminsecret: rawData.adminsecret,
    };

    // Make an API request to register the user
    try {
        const response = await fetch('http://localhost:5000/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data), // Send user data as JSON
        });

        if (response.ok) {
            const result = await response.json(); // Parse the JSON response from the server
            alert('Registered successfully!'); // Show success message
            // form.reset(); // Optionally reset the form
        } else {
            const err = await response.json();
            alert(`Error: ${err}`); // Display server error message
        }
    } catch (err) {
        console.error('An error occurred:', err);
        alert('An error occurred while registering. Please try again later.');
    }
});


// testing
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let formValid = true;

//     // Validate required fields
//     requiredFields.forEach(field => {
//         const input = document.getElementById(field.id);
//         const errorMessage = document.getElementById(`${field.id}Error`);
//         if (!input.value.trim()) {
//             formValid = false;
//             errorMessage.textContent = `${field.previousElementSibling.textContent} is required.`;
//         } else {
//             errorMessage.textContent = '';
//         }
//     });

//     const checklistItems = checklistContainer.querySelectorAll('li');
//     const allValid = Array.from(checklistItems).every(item => item.classList.contains('valid'));
//     const reEnterValid = !repasswordValidation.querySelector('li').classList.contains('invalid');

//     if (!allValid) {
//         alert('Please ensure your password meets all requirements.');
//         return;
//     }

//     if (!reEnterValid) {
//         alert('Passwords do not match.');
//         return;
//     }

//     if (roleSelect.value === 'admin' && adminSecretField.style.display !== 'none' && adminSecret.value === '') {
//         formValid = false;
//         const adminSecretError = document.getElementById('adminsecretError');
//         adminSecretError.textContent = "Admin secret is required.";
//     }

//     if (!formValid) {
//         return;
//     }

//     alert('Registration successful!');
// });