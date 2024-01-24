# Your Project Name
Description of project goes here.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)

## Features

- **Webpack 5:** Configured with Webpack 5 for efficient bundling and asset management.
- **Babel Setup:** Support for modern JavaScript features using Babel for better browser compatibility.
- **CSS & Style Loaders:** Easily include stylesheets in your project with the help of CSS and style loaders.
- **HTML Webpack Plugin:** Dynamically generate HTML files to include your bundled scripts and stylesheets automatically.
- **Webpack Dev Server:** Quickly preview your project during development with the built-in development server.
- **CSS Minify & Extract Plugin:** Minify and extract CSS files for optimized production builds.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/HarshVardhanK35/webpack-starter.git
  ```

2. Install dependencies:
  ```
  npm install
  ```

## Folder-Structure
- src/: Source code directory
- src/index.html: Main HTML file
- src/index.js: Main JavaScript entry file
- modules/: Modules code directory
- src/css/: style.css file
- dist/: Output directory for the production build
- node_modules/: Node.js modules (automatically generated)

## Scripts
List and explain any custom scripts defined in your project's package.json.

### Start the development server.
- to run automatically whenever there is any modification.
  ```
  npm run dev
  ```

### Build the project for production.
  ```
  npm run build
  ```