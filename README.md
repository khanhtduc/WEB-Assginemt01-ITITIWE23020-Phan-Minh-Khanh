# WEB-Assginemt01-ITITIWE23020-Phan-Minh-Khanh
This is my assignment 1 code
# Assignment 1: Web Application - Phan Minh Khanh (ITITWE23020)

This repository contains a 6-page personal portfolio website developed for the Web Development Laboratory at International University - VNUHCM.

## 🚀 Live Deployment
- **Live URL:** [[https://khanhtduc.github.io/WEB-Assginemt01-ITITIWE23020-Phan-Minh-Khanh/](https://khanhtduc.github.io/WEB-Assginemt01-ITITIWE23020-Phan-Minh-Khanh/index.html)]
- **GitHub Repository:** [https://github.com/khanhtduc/Assignment1_Web_App_Phan-Minh-Khanh_ITITWE23020.git
](https://github.com/khanhtduc/WEB-Assginemt01-ITITIWE23020-Phan-Minh-Khanh)
---

## 🗺️ Site Architecture (Site Map)
The project is organized with a root directory for HTML pages and an `assets` folder for modularity.
1. **Home (`index.html`):** Introduction, technical stack overview, and an embedded YouTube atmosphere video.
2. **About Me (`about.html`):** Personal biography, career goals in banking/IT, and professional social media links.
3. **Education (`education.html`):** Visual academic timeline featuring Binh Tho Secondary, Thu Duc High School, and International University.
4. **Hobby (`hobby.html`):** Personal interests featuring a suggested reading list with `figure`/`figcaption` and embedded movie trailers.
5. **My Hometown (`hometown.html`):** Cultural overview of Ho Chi Minh City and a grid-based gallery of local cuisine.
6. **Contact (`contact.html`):** Advanced feedback form featuring 10+ HTML5 input types and custom validation.

---

## ✨ Key Features & Rubric Compliance
- **Full-Featured Form (Requirement 4.2):** Implements 10+ input types (`tel`, `email`, `password`, `date`, `color`, `file`, `range`, `checkbox`, `radio`). Uses `fieldset`, `legend`, and `datalist`.
- **Responsive Design (Requirement 4.3):** Built with external CSS using **Flexbox** and **CSS Grid**. Fully responsive for mobile (768px breakpoint).
- **Multimedia Integration:** Includes multiple `<iframe>` elements (YouTube) and 5+ images with descriptive `alt` text.
- **JavaScript Interactivity:** Custom `script.js` that calculates a real-time **Progress Bar** and synchronizes the **Urgency Slider** with a `<meter>` element.
- **Semantic HTML5:** High usage of `<header>`, `<nav>`, `<main>`, `<section>`, and `<figure>` tags.

---

## 📂 Project Structure
```text
/portfolio-root
│   index.html
│   about.html
│   education.html
│   hobby.html
│   hometown.html
│   contact.html
└───assets
    ├───css
    │       styles.css  # Global styles and responsive queries
    ├───js
    │       script.js   # Form logic and interactivity
    └───img
            (images for education and food...)

🤖 AI Usage Log (Requirement 9)
In compliance with the course AI policy, this section documents the collaboration with Google Gemini.

1. Tool Used: Google Gemini (Generative AI).

2. Specific Prompts Provided:

"Refactor my external CSS to remove duplicates while ensuring a card-based responsive layout."

"Create a JavaScript function to update a <progress> bar based on the 'required' attributes of a form."

"Help me structure a technical README that matches the grading rubric for a 6-page portfolio."

3. Modifications Made:

I provided the original biographical content, school history, and hometown details.

I manually integrated AI-generated CSS snippets into styles.css to maintain my custom navigation styling.

I modified and tested the JavaScript logic to ensure the progress bar correctly counts both text inputs and checkboxes.

📜 Credits
Developer: Phan Minh Khanh (IT Student @ IU-VNUHCM).

Icons: FontAwesome 4.7.

Images: Personal photography and open-source logos.           
