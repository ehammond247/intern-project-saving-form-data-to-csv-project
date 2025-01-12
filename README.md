# Intern Exam - Contact Form to CSV File and Table Display Project

This project involves creating a contact form, saving the data as a CSV file, and displaying the data in a table. It is designed for beginner developers to practice HTML, CSS, and JavaScript concepts. Every intern should be able to complete this project before beginning work on real world projects. 

---

## Part 1: Contact Form and Saving Data to a CSV
First start by forking this repo so that you can show your work. 

### Step 1: Create the Contact Form
1. Create an `index.html` file.
2. Add a `<form>` element with fields for:
   - Name (text input)
   - Email (text input)
   - Phone Number (text input)
   - A "Submit" button.
3. Style the form using CSS for better usability.

**Resources:**  
- [HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)  
- [CSS Styling Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)  

---

### Step 2: Validate Form Inputs
1. Use JavaScript to check if the form fields are valid:
   - Ensure no field is empty.
   - Validate the email format using a regular expression.
   - Check that the phone number contains only digits.
2. Show error messages near invalid fields.

**Resources:**  
- [Form Validation with JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)  
- [Working with Regular Expressions](https://regex101.com/)  

---

### Step 3: Convert Form Data to CSV Format
1. Use JavaScript to collect form values on submit.
2. Format the data as a CSV string:
   - Create a header row: `Name,Email,Phone`.
   - Append a data row with the form inputs.

**Resources:**  
- [JavaScript String Manipulation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  

---

### Step 4: Save the CSV File Locally
1. Use the `Blob` API to create a CSV file from the string.
2. Trigger a file download using an anchor (`<a>`) element.

**Resources:**  
- [JavaScript Blob API](https://developer.mozilla.org/en-US/docs/Web/API/Blob)  
- [Programmatically Download Files with JavaScript](https://css-tricks.com/creating-a-downloadable-file-using-blob-and-anchor-tag/)  

---

## Part 2: Display Data in a Table

### Step 5: Add a File Input to Upload CSV
1. Add a `<input type="file">` element to the HTML.
2. Style it for better visibility.

**Resources:**  
- [HTML File Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)  

---

### Step 6: Read the CSV File
1. Use the `FileReader` API to read the uploaded file.
2. Parse the CSV content into rows and columns (use `split('\\n')` for rows and `split(',')` for columns).

**Resources:**  
- [Using the FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)  

---

### Step 7: Generate and Populate an HTML Table
1. Create an empty `<table>` element in the HTML.
2. Use JavaScript to:
   - Create rows and cells dynamically based on the CSV data.
   - Append the rows to the table.

**Resources:**  
- [Creating Tables Dynamically with JavaScript](https://www.javascripttutorial.net/javascript-dom/javascript-createelement/)  

---

### Step 8: Style the Table
1. Use CSS to make the table visually appealing:
   - Add borders, padding, and alternating row colors.

**Resources:**  
- [CSS Table Styling](https://www.w3schools.com/css/css_table.asp)  

---

## Optional Bonus Steps
1. **Add Sorting Functionality**: Allow users to sort the table by name, email, or phone number.
   **Resources:**  
   - [JavaScript Table Sorting](https://www.w3schools.com/howto/howto_js_sort_table.asp)  

2. **Enhance the User Experience**: Add a "Clear Table" button to remove all rows and reset the table.

---

## Expected Deliverables
1. **Part 1**: A form that collects contact data, validates it, and allows users to download it as a CSV file.
2. **Part 2**: A file upload option that reads the CSV and displays its content in a styled table.

---

## General JavaScript Resources for Intern
- [JavaScript Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)  
- [ES6 Features Overview](https://www.freecodecamp.org/news/es6-guide/)  
- [Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong) 
