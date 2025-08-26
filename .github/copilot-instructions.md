# Copilot Instructions for Learning-Js

## Project Overview
This repository contains JavaScript learning exercises based on the CFBCursos YouTube course. The codebase is organized as standalone scripts and HTML files, focusing on fundamental JS concepts and browser/Node.js execution.

## Architecture & Structure
- **Flat structure:** Most files are single-purpose JS scripts (e.g., `Aula01.js`, `Aula15.js`) or paired with HTML for browser demos (e.g., `Aula12.html` + `Aula12.js`).
- **Exercises:** The `exercicios/` folder contains additional practice scripts, each file is independent.
- **No frameworks or build tools:** All code runs directly in Node.js or the browser. There is no bundler, transpiler, or package manager.

## Developer Workflows
- **Run scripts:** Use `node <filename.js>` for Node.js scripts. Example: `node Aula15.js` or `node exercicios/ParImpar.js`.
- **Browser demos:** Open HTML files directly in a browser. Ensure `<script>` tags are placed at the end of `<body>` for DOM access (see README tip).
- **No automated tests:** There are no test files or test runners. Validation is manual via console output or browser inspection.

## Project-Specific Patterns
- **Script placement:** Always place `<script>` tags at the end of `<body>` in HTML files to ensure DOM elements are available for manipulation.
- **File naming:** Each file name reflects its lesson or exercise topic. Avoid cross-file dependencies; scripts are designed to be self-contained.
- **No external dependencies:** All code uses only built-in JS features. Do not add npm packages or external libraries unless explicitly instructed.

## Key Files & Examples
- `Aula12.html` and `Aula12.js`: Example of HTML/JS integration and DOM manipulation.
- `exercicios/ParImpar.js`: Example of a simple Node.js exercise script.
- `README.md`: Contains project context and important tips for script placement in HTML.

## Integration Points
- **Node.js:** For running JS exercises in the terminal.
- **Browser:** For running HTML/JS demos and DOM manipulation.

## Conventions for AI Agents
- Keep scripts independent; do not introduce shared state or complex module systems.
- When adding new exercises, follow the naming and placement conventions (e.g., `AulaXX.js`, `exercicios/SomeExercise.js`).
- Document any new patterns or workflows in this file for future agents.

---
If any section is unclear or missing important project-specific details, please provide feedback to improve these instructions.
