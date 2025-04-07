
# Certificate Verifier

A simple web application to verify the validity of certificates. Users can input their certificate ID, and the system will check if it's listed in the public Google Sheet.

## 🌐 Live Demo
You can try the live version of the project [here](https://somitraa.github.io/Certificate_Verifier/).

## 🚀 Features
- Input a certificate ID to verify its validity.
- Connects to a public Google Sheet for certificate data.
- Real-time feedback with color-coded messages (green for valid, red for invalid).

## 📦 Clone the Repository
To clone this project to your local machine, run the following command:

```bash
git clone https://github.com/Somitraa/Certificate_Verifier.git
```

## 🗂️ Project Structure
```
Certificate_Verifier/
├── index.html
├── README.md
└── style.css (optional if you separate CSS)
```

## ⚡ How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Somitraa/Certificate_Verifier.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Certificate_Verifier
   ```
3. Open `index.html` in your preferred browser:
   ```bash
   open index.html
   ```
   Or simply double-click the `index.html` file.

## 🧩 Technologies Used
- **HTML5** for the structure
- **CSS** for styling
- **JavaScript** for interactivity and logic
- **Google Sheets API (via public URL)** for data verification

## 🛠️ How It Works
- The user enters the certificate ID into the input field.
- When the "Verify Your Certificate" button is clicked, the app fetches data from the Google Sheet.
- If the certificate ID is found, a confirmation message is displayed in green; otherwise, an error message is shown in red.

## 📋 Future Improvements
- Implement a database backend for better data management.
- Add more detailed validation and error handling.
- Enhance UI with responsive design features.

## 🤝 Contribute
Feel free to fork this repository, submit issues, or create pull requests if you'd like to contribute.

## 📝 License
This project is open-source and available under the MIT License.

---

Happy coding! 🚀
```
