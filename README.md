# Counter_App
## Date:10-07-2025.
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Write your message</h2>
    <textarea id="input" maxlength="100" placeholder="Type something here..."></textarea>
    <p id="count">Characters: 0 / 100</p>
  </div>
  <script src="script.js"></script>
</body>
</html>


```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: linear-gradient(to right, #79eded, #79eded);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}
.container {
  background: #ffffffee;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  text-align: center;
  width: 320px;
}

.container h2 {
  margin-bottom: 15px;
  color: #333;
}
textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  border-radius: 6px;
  border: 1.5px solid #ccc;
  font-size: 15px;
  resize: none;
  background-color: #f9f9f9;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
}
#count {
  margin-top: 12px;
  font-weight: bold;
  color: #2b9348;
}


```

## JS:
```
const input = document.getElementById("input");
const count = document.getElementById("count");

input.addEventListener("input", () => {
  const length = input.value.length;
  count.textContent = `Characters: ${length} / 100`;
});


```
## Output:

<img width="1918" height="1013" alt="Screenshot 2025-07-10 175914" src="https://github.com/user-attachments/assets/953dff77-b130-448e-893a-eb43a1247f6e" />

<img width="1919" height="1014" alt="Screenshot 2025-07-10 175933" src="https://github.com/user-attachments/assets/a6d6d0f1-6bf2-43bb-8044-286979a61c67" />


## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
