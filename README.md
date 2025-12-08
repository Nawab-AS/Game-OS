# Game-OS

A better recreation of my old project [Retro-OS](https://github.com/nawab-as/retro-os) with a focus on games.

## Live Demo

You can try out the live demo [here](https://nawab-as.github.io/Game-OS).


### Features

- Windows 10-style desktop interface (except its linux)
- Playable mini-games:
	- Tic Tac Toe
	- Minesweeper
	- Snake
	- Calculator
    - More coming soon...
- Window management system with taskbar
- App launcher and search
- Draggable, resizable windows

## Installation

### Requirements
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Local development server

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Nawab-AS/Game-OS.git
cd Game-OS
```

2. Host using any web server

Since this is a static web page, you can host it with any web server, personally, I used python's builtin http server with:
```bash
python -m http.server -p 3000
```
Then visit `http://localhost:3000` in your browser

## Usage

### Basic Navigation

- Click the app icons in the taskbar to open games or utilities
- Use the search box to quickly find and launch apps
-: Drag, resize, minimize, or close windows as you like

## Attributions and Acknowledgements

- Part of the CSS was AI generated, the rest of the code is ~90% human written.
- Minesweeper game adapted from [adlogi/minesweeper](https://github.com/adlogi/minesweeper).
