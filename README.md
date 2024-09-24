# Sahira-vehicle-builder
A Vehicle Builder is a software application or tool that allows users to create, customize, and manage vehicles through a user-friendly interface.

## User Story
AS a developer  
I WANT to update an existing application to include additional vehicle types  
SO THAT I am able to comprehend and work with existing code bases.

## Acceptance Criteria

- **GIVEN** a command-line application that accepts user input  
  **WHEN** I am prompted to create a new vehicle or select an existing vehicle  
  **THEN** I can choose between the two options

- **WHEN** I am prompted to choose the vehicle type during creation  
  **THEN** I can choose between car, truck, and motorbike

- **WHEN** I am prompted for details about the vehicle  
  **THEN** I can enter the vehicle information

- **WHEN** I have entered all the vehicle information  
  **THEN** I can use the created vehicle

- **WHEN** I select an existing vehicle  
  **THEN** I can use the selected existing vehicle

- **WHEN** I have created a new vehicle or selected an existing vehicle  
  **THEN** I can perform actions with that vehicle

- **WHEN** I perform an action with a vehicle  
  **THEN** I see the result of the action in the command-line

- **WHEN** I complete the process of performing an action  
  **THEN** I can perform additional actions until I choose to exit


## Getting Started

1. **Clone the Repository**
  
   git clone https://github.com/yourusername/vehicle-builder.git
   cd vehicle-builder

2. **Install Dependencies

   npm install

3. **Run the Application

   npm start

## Features
Create new vehicles by entering details such as type, make, model, and year.
Select existing vehicles from a list.
Perform actions on selected vehicles, including viewing their details.
Continuous interaction until the user chooses to exit.

## Technologies Used
TypeScript
Node.js
Inquirer.js for user input