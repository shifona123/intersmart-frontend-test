# Intersmart AI Development Company

A responsive AI development company website recreated from the provided Figma design as part of a frontend machine test.

## Project Overview

This project is a responsive landing page for an AI development company.

The website was implemented using Next.js, React, JavaScript, and Tailwind CSS, with a focus on reusable components, responsive design, visual accuracy, and interactive UI.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- React Icons
- ESLint

## Features

- Responsive desktop and mobile design
- Responsive navigation bar
- Mobile hamburger menu
- Hero section with AI-themed background
- Artificial Intelligence Services section
- Interactive services accordion
- AI Development Process section
- 7-step interactive process slider
- Previous and next slide controls
- Schedule Meeting / Contact form
- Recent AI Projects section
- Responsive footer
- Social media icons using React Icons
- Smooth navigation between sections
- Hover effects
- Custom favicon
- Custom browser title

## Project Structure

```text
intersmart-frontend-test/
│
├── app/
│   ├── favicon.png
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Process.jsx
│   ├── Contact.jsx
│   ├── Projects.jsx
│   └── Footer.jsx
│
├── public/
│   ├── interSmart-logo.png
│   └── images/
│       ├── ai-face.jpeg
│       ├── services-ai.png
│       ├── process-1.jpg
│       ├── process-2.jpg
│       ├── process-3.jpg
│       ├── process-4.jpg
│       ├── process-5.jpg
│       ├── process-6.jpg
│       ├── process-7.jpg
│       ├── project-1.jpg
│       └── project-2.jpg
│
├── package.json
├── package-lock.json
└── README.md
```

## Component Description

### Navbar

Responsive navigation bar containing the company logo, navigation links, Get in touch button, and mobile hamburger menu.

### Hero

Main landing section containing the AI development company heading, description, call-to-action button, and AI-themed background image.

### Services

Displays the Artificial Intelligence Services section with an interactive accordion for viewing individual service descriptions.

### Process

Displays the AI Development Process using seven interactive steps with navigation controls, descriptions, progress indicator, and process images.

### Contact

Schedule Meeting section containing a contact form with Email, Name, Message, and Submit fields.

### Projects

Displays recent AI projects using the provided project images.

### Footer

Contains service links, page links, social media icons, privacy-related links, and copyright information.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Install Dependencies

Clone the repository and install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the following URL in your browser:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Responsive Design

The website is designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive Tailwind CSS classes are used throughout the project to adapt the layout, typography, spacing, navigation, buttons, and images to different screen sizes.

## Interactive Features

The project includes:

- Mobile navigation menu
- Services accordion
- AI development process slider
- Previous and next process controls
- Interactive buttons
- Contact form fields
- Hover effects
- Smooth section navigation

## Design

The implementation follows the provided Figma design with a focus on:

- Visual accuracy
- Responsive layout
- Reusable React components
- Clean component structure
- Interactive user experience
- Consistent typography and spacing

## Accessibility

Basic accessibility practices have been followed, including:

- Descriptive image alt text
- Accessible navigation buttons
- Button labels for interactive controls
- Semantic HTML elements where appropriate

## Future Improvements

Possible future improvements include:

- Connecting the contact form to a backend service
- Adding form validation
- Adding real social media links
- Adding more project entries
- Adding additional service and process details
- Improving animations and transitions

## Author

Frontend Machine Test Submission