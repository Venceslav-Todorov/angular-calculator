# Angular Calculator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## 📁 Project Structure

This app has two main pages:

- **Home Page**: A welcome screen with a button leading to the calculator.
- **Calculator Page**: A fully functional calculator with history log (📜) of the past 20 calculations supporting the following operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
  - Decimal inputs
  - Only numbers or valid operators are available for use
  - Edge cases like multiple consecutive operators are not allowed
  - History has a max of 20 entries

> calculations logic is handled in the `CalculateService`, located at:  
> `src/app/services/calculate.service.ts`

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Venceslav-Todorov/hedgeserv-calculator
```

- **Node.js** and **npm** must be installed. You can download Node.js from [here](https://nodejs.org/).
- Angular CLI installed globally with:

```bash
npm install -g @angular/cli
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
ng serve
```

Then open your browser and navigate to: http://localhost:4200/ (or ctrl + click the link)