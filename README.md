# Secret Santa App

Welcome to the Secret Santa App! This application allows you to organize and manage a Secret Santa gift exchange among a group of participants.
![Home Page Example](./screenshots/homepageExample.png)

## Table of Contents

- [Features](#features)
- [About](#about)
  - [Purpose](#purpose)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customization](#customization)
- [CLI Secret Santa Generator](#cli-secret-santa-generator)
- [Contributing](#contributing)
- [License](#license)

## Features

- Participants can enter their 4-digit pin to find out who their assigned Secret Santa is.
- Easy navigation between participants using the provided links.
- Secure pin input for participant verification.

## About

Welcome to the Secret Santa App, a front-end-only solution designed for organizing delightful Secret Santa gift exchanges. This project utilizes the following technologies:

- **React:** A powerful JavaScript library for building user interfaces.
- **Bootstrap:** A sleek and responsive front-end framework for web development.
- **NodeJS:** A runtime environment for executing JavaScript code server-side.
- **Prompt-Sync:** A simple command-line prompt for synchronous input.

### Purpose

The Secret Santa App is a fun and interactive way to enhance your next Secret Santa experience. With a user-friendly interface and secure pin verification, participants can easily discover their assigned Secret Santa and make the gift exchange memorable.

## Getting Started

Follow the [installation instructions](#getting-started) in the README to set up the project on your local machine and start enjoying the Secret Santa experience!

## How to Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jordanolguin/SecretSantaPicker.git
   cd client
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
```

## CLI Secret Santa Generator

1. **Navigate to the CLI directory:**

   If you want to generate Secret Santa assignments using the command line interface (CLI), you can use the provided `secretSantaGenerator.js` script.

   ```bash
   cd secret-santa-app
   ```

2. **Run the CLI script:**

   ```bash
   node secretSantaGenerator.js
   ```

   Follow the prompts to enter the number of participants and their names. The script will generate Secret Santa assignments and display them in the console.

3. **Update the React App:**

   Update the `secretSantaAssignments` array in `App.js` with the generated assignments.

   ```javascript
   // App.js

   const secretSantaAssignments = [
     // Update with the generated Secret Santa assignments
     // ...
   ];
   ```

   ## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork this repository.
Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
Commit your changes and push to your forked repository.
Submit a pull request to the main repository.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Happy Secret Santa-ing! 🎅🎁
