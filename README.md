# Door Survey App

This project is a React application designed to facilitate a survey where users can select their preferred door and proceed to the next question based on their selection.

## Project Structure

```
door-survey-app
├── src
│   ├── components
│   │   ├── DoorQuestion.tsx       # Component to display the door selection question
│   │   ├── NextQuestion.tsx        # Component to handle the next question after door selection
│   │   └── SurveyContainer.tsx      # Container component to manage the overall survey
│   ├── App.tsx                     # Entry point of the application
│   ├── index.tsx                   # Mounts the React application to the DOM
│   ├── index.css                   # CSS styles for the application
│   └── types
│       └── index.ts                # Type definitions used in the application
├── public
│   └── index.html                  # HTML template for the application
├── package.json                    # npm configuration file
├── tsconfig.json                   # TypeScript configuration file
└── README.md                       # Project documentation
```

## Features

- **Door Selection**: Users can choose from various door options.
- **Dynamic Questions**: Based on the selected door, the next question will be displayed.
- **User-Friendly Interface**: The application provides an intuitive UI for users to interact with.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd door-survey-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.