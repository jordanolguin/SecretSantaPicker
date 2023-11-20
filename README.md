# Secret Santa Picker 

Welcome to the Secret Santa App! This application allows you to organize and manage a Secret Santa gift exchange among a group of friends and family! Feel free to use this code as the base for your upcoming Secret Santa Exchange!

## Features

- Participants can enter their 4-digit pin to find out who their assigned Secret Santa is.
- Easy navigation between participants using the provided links.
- Secure pin input for participant verification.

## How to Use

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jordanolguin/SecretSantaPicker.git
    cd secret-santa-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the app:**

    ```bash
    npm start
    ```

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the app.

## Customization

You can customize the participant list and Secret Santa assignments by updating the data in the `App.js` file.

```javascript
// App.js

const participants = [
  // Add or remove participants as needed
  { id: 1, name: "John", pin: "1234" },
  { id: 2, name: "Jane", pin: "5678" },
  // ...
];

const secretSantaAssignments = [
  // Customize the order of Secret Santa assignments
  6, // John's secret Santa
  5, // Jane's secret Santa
  // ...
];
