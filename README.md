# Spotify Clone

## Overview

The Spotify Clone is a web application that emulates core functionalities of Spotify, including browse by artists, songs and control player. This project is divided into two main components:

- **Front-End**: Developed using React.js, providing an interactive user interface.
- **Back-End**: Built with Node.js and Express, handling API requests and database interactions.

## Technologies Used

- **Front-End**:
  - React.js
  - HTML5
  - CSS3
  - JavaScript

- **Back-End**:
  - Node.js
  - Express.js
  - MongoDB

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/magnosansil/spotify-project.git
   cd spotify-project
   ```

2. **Set Up Environment Variables**:

   Create a `.env` file in both the root directory with the following variable:

     ```
     DB_URI=your_mongodb_connection_string

     ```


3. **Install Dependencies**:

   - **Back-End**:
     ```bash
     cd back-end
     npm install
     ```

   - **Front-End**:
     ```bash
     cd ../front-end
     npm install
     ```

## Usage

1. **Start the Back-End Server**:

   ```bash
   cd back-end
   npm start
   ```

2. **Start the Front-End Application**:

   ```bash
   cd ../front-end
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.
