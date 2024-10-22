# Background Gradient Generator

A simple web app that generates a Random Gradient at the click of a button, making it easy to visualize dynamic color schemes.

## Demo

You can check out a live demo of the Random Gradient Generator [here](demo-link).

## This project is built using

- HTML
- CSS
- JavaScript

## Explanation:

- **HTML:** The structure includes a div that displays the random string and a button that, when clicked, triggers the JavaScript function to generate a new string.
- **CSS:** Styles the container and box, with the button changing color on hover.
- **JavaScript:** Generates a random alphanumeric string of 6 characters and updates the displayed string when the button is clicked.
  You can save these files (index.html, style.css, script.js) in a local folder and open index.html in your browser to see the app in action.

## Screenshot 📷

![Screenshot 2024-10-21 193944](https://github.com/user-attachments/assets/c0fd5fa4-32d1-4462-906b-82c9e46e7c51)

## Features

- Generates a random alphanumeric string of 6 characters
- Simple, responsive design
- Clean user interface
- Hover effect on the button for interactivity

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hernandoabella/background-gradient.git
   ```

2. Navigate to the project folder:

   ```bash
   cd background-gradient
   ```

3. Open the `index.html` file in your browser to view the app.

## Usage

1. Open the project in a browser.
2. Click the Generate Gradient button to generate a new random gradient background.
3. Each click will create a new color combination with a random angle.

## Customization

You can easily customize this project by making the following changes:

### 1. **Change the Gradient Type**

By default, the generator creates a linear gradient. You can change this to a **radial gradient** or **conic gradient**. In the `script.js` file, replace:

```
const randomGradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
```

With: 

```
const randomGradient = `radial-gradient(${color1}, ${color2})`;
```

Or: 

```
const randomGradient = `conic-gradient(from ${angle}deg, ${color1}, ${color2})`;
```
### 2. Limit Color Range
You can modify the getRandomColor function to restrict the random color generation to a specific range (e.g., pastel colors). Replace the color generation logic with your preferred range of hex colors.

### 3. Adjust the Transition Speed
The default transition duration is 700ms. To change this, go to the .gradient-container class in the style.css file and modify the transition-duration property:

```
transition-duration: 500ms;
```

### 4. Set a Default Gradient
You can change the default gradient displayed when the page loads by updating the initial state in the JavaScript file:

```
const [gradient, setGradient] = useState("linear-gradient(to right, coral, lightblue)");

```

### 5. Change Button Styles
To modify the appearance of the Generate Gradient button, adjust its styling in the style.css file. You can update the background color, hover effects, or add animations for a more customized look.
