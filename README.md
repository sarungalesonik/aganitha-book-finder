
# Book Finder

**Book Finder** is a simple web application that allows users to search for books using the Open Library API. It provides book details such as the title, cover image, and other relevant information.

---

## Features

- **Search Functionality**: Users can search for books by entering a topic or title in the search bar.
- **Book List View**: Displays a list of search results with book titles and covers.
- **Detailed View**: Users can select a book to view additional details fetched from the Open Library API.
- **Responsive Design**: Optimized for mobile and desktop browsers.
- **Fallbacks**: Shows a message when no results are found for a search query.

---

## Technologies Used

### Frontend
- **HTML**: Structure of the webpage.
- **CSS**: Styling with custom styles and external libraries such as:
  - [Font Awesome](https://cdnjs.com/libraries/font-awesome) for icons.
  - [Placeholder Loading](https://unpkg.com/placeholder-loading) for skeleton loaders.
- **JavaScript**: Dynamic behavior, API integration, and user interactions.

### API Integration
- **Open Library API**: Fetches book data and detailed information.
  - Search Endpoint: `https://openlibrary.org/search.json`
  - Book Details: `https://openlibrary.org/books/{bookid}.json`

---

## Getting Started

### Prerequisites
- A web browser.
- Internet connection to fetch data from the Open Library API.

### Installation
1. Clone or download this repository.
2. Place all files in a web server or open the `index.html` file directly in a browser.

### Usage
1. Open the application in a web browser.
2. Enter a topic or book title in the search bar and press the search button.
3. Browse the list of books displayed as search results.
4. Click on a book to view its detailed information.
5. Use the "Back" button to return to the book list.

---

## Directory Structure

```
Book Finder/
│
├── index.html          # Main HTML file
├── main.css            # Custom CSS file
├── main.js             # JavaScript functionality
├── logo.png            # Application logo
├── icon.png            # Favicon
├── search.gif          # Loading animation
└── README.md           # Project documentation
```

---

## Acknowledgments

- **Open Library** for their free API and vast collection of book data.
- **Font Awesome** for providing free, high-quality icons.
- **Placeholder Loading** for smooth skeleton loaders.

--- 

