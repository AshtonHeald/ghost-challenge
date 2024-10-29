# Ghost Challenge

The **Ghost Challenge** project is a dynamic web app built with Vue, designed to showcase stories through an engaging carousel interface. It leverages advanced animations and styling to create a smooth, interactive user experience. This project integrates **Swiper** for the carousel functionality, **GSAP** for animations, **Google Fonts** via Fontsource, and **vite-svg-loader** for handling SVG files.

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Getting Started](#getting-started)
3. [Scripts](#scripts)
4. [Project Structure](#project-structure)
5. [Features](#features)
6. [Challenges](#challenges)
7. [Acknowledgments](#acknowledgments)

## Tech Stack

- **Vite** - Fast development build tool
- **Vue 3** - Progressive JavaScript framework
- **JavaScript** - Core language for the app
- **CSS** - Styling language used for UI and layout
- **Swiper** - Carousel functionality for smooth slide transitions
- **GSAP** - Animation library for complex animations
- **Fontsource** - Self-hosted Google Fonts for better performance
- **vite-svg-loader** - Enables importing SVG files as Vue components

## Getting Started

### Prerequisites
- [pnpm](https://pnpm.io/) (Package manager for faster installs and builds)

### Installation
To set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AshtonHeald/ghost-challenge.git
   cd ghost-challenge
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   This command will run the app in development mode and will be accessible on `http://localhost:5173` by default.

## Scripts

Below are the main scripts used in this project:

* **Install dependencies:** `pnpm install`
* **Run development server:** `pnpm run dev`
* **Build for production:** `pnpm run build`
* **Preview production build:** `pnpm run preview`

## Project Structure

```
├── public/          # Static files
├── src/
│   ├── assets/      # Project assets (images, fonts, etc.)
│   ├── components/  # Vue components
│   ├── App.vue      # Root component
│   └── main.js      # Main JavaScript entry file
├── .gitignore       # Git ignore file
└── README.md        # Project README
```

## Features

* **Interactive Carousel:** Implemented with Swiper for smooth slide transitions and controls
* **Engaging Animations:** Leveraging GSAP for animations that enhance the user experience
* **Responsive Design:** Optimized for various screen sizes for accessibility on all devices
* **Custom SVG Handling:** Using vite-svg-loader to import SVG files as Vue components

## Challenges

During the development of this project, we faced a few challenges:

1. **Integrating Swiper with Vue 3**: The migration from Swiper 5 to Swiper 6 required some adjustments to the implementation, as the API had changed. We had to update our code to match the new Swiper 6 syntax and features.

2. **Achieving Smooth Animations**: Implementing the complex animations using GSAP took some time to get the timing and easing just right. We had to experiment with different approaches to ensure a seamless user experience.

3. **Handling SVG Assets**: The use of vite-svg-loader was a new concept for our team, and we had to learn how to properly import and use SVG files as Vue components. This added an extra step to our asset management process.

We overcame these challenges through careful research, experimentation, and collaboration within the team. The end result is a polished and visually engaging web application.

## Acknowledgments

* [Vue.js](https://vuejs.org/) - The progressive JavaScript framework used in this project
* [Swiper](https://swiperjs.com/) - The library used for carousel functionality
* [GSAP](https://greensock.com/gsap/) - The animation library for high-performance animations
* [Fontsource](https://fontsource.org/) - The source of Google Fonts for this project
* [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - The plugin that enables importing SVG files as Vue components

## License

This project is open-source and available under the MIT License.

---

**Note:** For any additional questions or support, please open an issue in the GitHub repository.
