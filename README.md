# Experiment 1 – Handling Forms Using Controlled Components in React

## 📌 Aim

To create and handle forms in a frontend application using controlled components in React.

---

## 🧰 Software Requirements

* Node.js
* React (Vite)
* VS Code
* Web Browser

---

## 📖 Theory

Controlled components are React components in which form data is handled by the component’s state.

This means:

* React state stores input values
* Input fields update state using event handlers
* Form submission is handled through functions

This provides complete control over user input and makes form handling predictable and efficient.

---

## ⚙️ Features

✔ Controlled form inputs
✔ useState for state management
✔ Input change handling
✔ Form submission handling
✔ Live form data preview
✔ Modern responsive UI

---

## 🛠️ Installation and Setup

### Step 1 – Create React Project

npm create vite@latest sub-exp1 -- --template react
cd sub-exp1
npm install

### Step 2 – Run Project

npm run dev

Open browser and go to:
http://localhost:5173/

---

## 🧪 Procedure

1. Create a React application using Vite.
2. Create a form component.
3. Use useState to store input values.
4. Handle input change events.
5. Submit the form using an event handler.

---

## 📂 Folder Structure

sub-exp1
│
├── node_modules
├── public
│   └── vite.svg
│
├── src
│   ├── Student.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

---

## 🧩 Technologies Used

* React JS
* JavaScript (ES6)
* CSS
* Vite

---

## 📸 Output

The application displays:

* User input form
* Name, Email, Age, Gender fields
* Submit button
* Live preview of entered data
* Clean card UI with gradient background

###  Screenshot
<img width="960" height="472" alt="{4690AC99-8BEE-402F-8689-A470AAC35C61}" src="https://github.com/user-attachments/assets/763e52ba-4e02-446e-a79b-0e9161397932" />  

<img width="960" height="477" alt="{1DCD7F4B-EADD-4AA1-ABFC-47948C12088A}" src="https://github.com/user-attachments/assets/e6499a9f-fea8-4d66-b5b2-d105ec8f617e" />

<img width="950" height="464" alt="{1E854A2F-0230-4AF1-96DB-48F829D71CE8}" src="https://github.com/user-attachments/assets/32396d0c-8f93-47aa-91a1-f929726fb8cc" />







---

## 🎯 Learning Outcomes

* Understand controlled components in React
* Manage form state using useState
* Handle user input dynamically
* Implement form submission logic
* Design responsive UI forms

---

## ✅ Conclusion

This experiment demonstrates how to create and manage forms using controlled components in React. Form data is stored and controlled through component state, allowing efficient and predictable handling of user input.

---

## 👩‍💻 Author

Shivali

---

# Experiment -2📘 Student Form Validation — React + Vite

## 🎯 Aim

To create a React-based form that validates Email and Password using regular expressions.

---

## 🛠️ Tech Stack

* React JS
* Vite
* JavaScript
* CSS
* Regex Validation

---

## 🧩 Features

✔ Email validation (`@` + valid domain like .com, .in, etc.)
✔ Password validation:

* Starts with capital letter
* Contains number
* Contains special character
* Minimum 5 characters

✔ Error messages for invalid input
✔ Success alert on valid submission
✔ Auto form reset after submit
✔ Soft modern UI

---

## 🚀 Run Project

```bash
npm create vite@latest sub-exp2
cd sub-exp2
npm install
npm run dev
```

---

## 📸 Output

### Form UI

<img width="959" height="474" alt="{08BB14AB-26C8-41FA-9E5A-E8B011289DB0}" src="https://github.com/user-attachments/assets/30f8f85a-4ad3-4a2d-90cf-44e96437ba98" />


### Validation Errors

<img width="959" height="472" alt="{5F0814F8-93A4-45C8-B92A-7D8C2D13A041}" src="https://github.com/user-attachments/assets/1606aeb9-2777-4252-b192-d980d2c6dedc" />


### Successful Submission

<img width="957" height="474" alt="{BF41F649-6737-403B-8014-4EB56DC9FABA}" src="https://github.com/user-attachments/assets/2a6dd305-dad2-4b51-9d29-92866188229d" />


---

## 🎓 Learning Outcomes

* React form handling
* useState hook
* Regex validation
* UI styling with CSS

---

## 🏁 Conclusion

This project demonstrates form validation in React using regex to ensure correct email and password format with a user-friendly interface.

