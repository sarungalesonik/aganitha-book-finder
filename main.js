
const renderBookDetails = (data,oldData) => {
    if (!data) return;
    const bookDetailsContainer = document.createElement('div');
    bookDetailsContainer.classList.add('book-details-container');

    // Create and append the book detail image section
    const bookDetailImg = document.createElement('div');
    bookDetailImg.classList.add('book-detail-img');
    const imgElement = document.createElement('img');
    imgElement.src = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`;
    imgElement.alt = '';  // Set the alt text here
    bookDetailImg.appendChild(imgElement);

    // Create and append the book title section
    const bookDetailTitle = document.createElement('div');
    bookDetailTitle.classList.add('book-detail-title');
    let title_text = oldData.title;
    if(data.subtitle){
        title_text += " - "+data.subtitle;
    }
    if(data.by_statement){
        title_text += " ("+data.by_statement+")";
    }
    bookDetailTitle.textContent = title_text;  // Set the title text

    // Create and append the book authors section
    const bookDetailAuthors = document.createElement('div');
    bookDetailAuthors.classList.add('book-detail-authors');
    if(oldData.author_name){
        bookDetailAuthors.textContent = oldData.author_name.join(', ');
    }

    // Create and append the book description section
    const bookDetailDescription = document.createElement('div');
    bookDetailDescription.classList.add('book-detail-description');
    if(data.description){
        bookDetailDescription.textContent = data.description.value;
    }

    // Create and append the book notes section
    const bookDetailNotes = document.createElement('div');
    bookDetailNotes.classList.add('book-detail-notes');
    if(data.notes){
        bookDetailNotes.textContent = data.notes.value;
    }

    // Append all sections to the main container
    bookDetailsContainer.appendChild(bookDetailImg);
    bookDetailsContainer.appendChild(bookDetailTitle);
    bookDetailsContainer.appendChild(bookDetailAuthors);
    bookDetailsContainer.appendChild(bookDetailDescription);
    bookDetailsContainer.appendChild(bookDetailNotes);

    return bookDetailsContainer;
}
const bookCard = (result_id, paper) => {
    
    const card = document.createElement('div');
    card.className = 'search-item';
    card.setAttribute('data-resultid', result_id);

    
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Create the 'card-book-img' div
    const cardBookImg = document.createElement('div');
    cardBookImg.classList.add('card-book-img');

    // Create the img element and append it to 'card-book-img'
    const img = document.createElement('img');
    img.src = `https://covers.openlibrary.org/b/id/${paper.cover_i}-M.jpg`;
    img.alt = paper.title;
    cardBookImg.appendChild(img);

    // Create the 'card-text-content' div
    const cardTextContent = document.createElement('div');
    cardTextContent.classList.add('card-text-content');

    // Create the h3 element with class 'card-title' and text content
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = paper.title;

    // Create the div with class 'card-authors' and text content
    const cardAuthors = document.createElement('div');
    cardAuthors.classList.add('card-authors');
    if(paper.author_name){
        cardAuthors.textContent = paper.author_name.join(', ');
    }

    // Create the 'card-rating-box' div
    const cardRatingBox = document.createElement('div');
    cardRatingBox.classList.add('card-rating-box');

    // Create the div with class 'card-book-total-counts' and text content
    const cardBookTotalCounts = document.createElement('div');
    cardBookTotalCounts.classList.add('card-book-total-counts');
    if(paper.already_read_count){
        cardBookTotalCounts.innerHTML = `<i class="fa-solid fa-eye"></i> ${paper.already_read_count}`;
    }

    // Create the div with class 'card-book-stars' and text content
    const cardBookStars = document.createElement('div');
    cardBookStars.classList.add('card-book-stars');
    if(paper.ratings_average){
        cardBookStars.innerHTML = `<i class="fa-solid fa-star"></i> ${parseFloat(paper.ratings_average).toFixed(2)}`;
    }

    // Append 'card-book-total-counts' and 'card-book-stars' to 'card-rating-box'
    cardRatingBox.appendChild(cardBookTotalCounts);
    cardRatingBox.appendChild(cardBookStars);

    // Append 'card-title', 'card-authors', and 'card-rating-box' to 'card-text-content'
    cardTextContent.appendChild(cardTitle);
    cardTextContent.appendChild(cardAuthors);
    cardTextContent.appendChild(cardRatingBox);

    // Append 'card-book-img' and 'card-text-content' to 'card-content'
    cardContent.appendChild(cardBookImg);
    cardContent.appendChild(cardTextContent);

    card.appendChild(cardContent);
    card.addEventListener('click', () => {
        const resultid = card.getAttribute('data-resultid');
        bookBuddy.setCurrectBook(resultid);        
        bookBuddy.renderBook(resultid);
    });
    return card;
}
const placeholderBookCard = () => {
    const phItem = document.createElement('div');
    phItem.classList.add('ph-item', 'ph-card-item');

    // Create the first child div with class 'ph-col-2'
    const phCol2 = document.createElement('div');
    phCol2.classList.add('ph-col-2');

    // Create the nested div with class 'ph-avatar' inside 'ph-col-2'
    const phAvatar = document.createElement('div');
    phAvatar.classList.add('ph-avatar');
    phCol2.appendChild(phAvatar);

    // Create the second child div (wrapper for 'ph-row')
    const wrapper = document.createElement('div');

    // Create the 'ph-row' div
    const phRow = document.createElement('div');
    phRow.classList.add('ph-row');

    // Create and append the nested child divs to 'ph-row'
    const phCol12Big = document.createElement('div');
    phCol12Big.classList.add('ph-col-12', 'big');
    phRow.appendChild(phCol12Big);

    const phCol10 = document.createElement('div');
    phCol10.classList.add('ph-col-10');
    phRow.appendChild(phCol10);

    const phCol2Empty = document.createElement('div');
    phCol2Empty.classList.add('ph-col-2', 'empty');
    phRow.appendChild(phCol2Empty);

    const phCol4_1 = document.createElement('div');
    phCol4_1.classList.add('ph-col-4');
    phRow.appendChild(phCol4_1);

    const phCol4Empty = document.createElement('div');
    phCol4Empty.classList.add('ph-col-4', 'empty');
    phRow.appendChild(phCol4Empty);

    const phCol4_2 = document.createElement('div');
    phCol4_2.classList.add('ph-col-4');
    phRow.appendChild(phCol4_2);

    // Append 'ph-row' to the wrapper div
    wrapper.appendChild(phRow);

    // Append 'ph-col-2' and wrapper to the outer 'ph-item'
    phItem.appendChild(phCol2);
    phItem.appendChild(wrapper);
    return phItem;
}


const bookLoading = ()=>{
    const phItem = document.createElement('div');
    phItem.setAttribute('id', 'book-detail-loader');
    phItem.classList.add('ph-item');

    // Create first 'ph-col-12' div and its child structure
    const phCol12 = document.createElement('div');
    phCol12.classList.add('ph-col-12');

    const picture = document.createElement('div');
    picture.classList.add('ph-picture');

    const phRow1 = document.createElement('div');
    phRow1.classList.add('ph-row');

    const phCol12Big1 = document.createElement('div');
    phCol12Big1.classList.add('ph-col-12', 'big');

    const phCol12Empty = document.createElement('div');
    phCol12Empty.classList.add('ph-col-12', 'empty');


    const phCol2Empty1 = document.createElement('div');
    phCol2Empty1.classList.add('ph-col-2', 'empty');

    const phCol8Normal = document.createElement('div');
    phCol8Normal.classList.add('ph-col-8');

    const phCol2Empty2 = document.createElement('div');
    phCol2Empty2.classList.add('ph-col-2', 'empty');

    const phCol2EmptyBig1 = document.createElement('div');
    phCol2EmptyBig1.classList.add('ph-col-2', 'empty', 'big');

    const phCol8Normal2 = document.createElement('div');
    phCol8Normal2.classList.add('ph-col-8');

    const phCol2EmptyBig2 = document.createElement('div');
    phCol2EmptyBig2.classList.add('ph-col-2', 'empty', 'big');

    const phCol12EmptyBig = document.createElement('div');
    phCol12EmptyBig.classList.add('ph-col-12', 'empty', 'big');

    // Append all elements to ph-row1
    phRow1.appendChild(phCol12Big1);
    phRow1.appendChild(phCol12Empty);
    phRow1.appendChild(phCol2Empty1);
    phRow1.appendChild(phCol8Normal);
    phRow1.appendChild(phCol2Empty2);
    phRow1.appendChild(phCol2EmptyBig1);
    phRow1.appendChild(phCol8Normal2);
    phRow1.appendChild(phCol2EmptyBig2);
    phRow1.appendChild(phCol12EmptyBig);

    // Append the row to the phCol12
    
    phCol12.appendChild(picture);
    phCol12.appendChild(phRow1);

    // Create the second 'ph-col-6' structure with its rows
    const phCol6_1 = document.createElement('div');
    phCol6_1.classList.add('ph-col-12');

    // Create rows for the second column
    const phRow2 = document.createElement('div');
    phRow2.classList.add('ph-row');

    const phCol2Empty3 = document.createElement('div');
    phCol2Empty3.classList.add('ph-col-2', 'empty');

    const phCol10Normal1 = document.createElement('div');
    phCol10Normal1.classList.add('ph-col-10');

    // Repeated 'ph-col-12' elements
    for (let i = 0; i < 11; i++) {
    const phCol12Normal = document.createElement('div');
    phCol12Normal.classList.add('ph-col-12');
    phRow2.appendChild(phCol12Normal);
    }

    const phCol8Normal3 = document.createElement('div');
    phCol8Normal3.classList.add('ph-col-8');

    const phCol4Empty = document.createElement('div');
    phCol4Empty.classList.add('ph-col-4', 'empty');

    // Append all to row2
    phRow2.appendChild(phCol2Empty3);
    phRow2.appendChild(phCol10Normal1);
    phRow2.appendChild(phCol8Normal3);
    phRow2.appendChild(phCol4Empty);

    // Append row2 to phCol6_1
    phCol6_1.appendChild(phRow2);

    // Create second row for 'ph-col-6'
    const phRow3 = document.createElement('div');
    phRow3.classList.add('ph-row');

    const phCol12Empty2 = document.createElement('div');
    phCol12Empty2.classList.add('ph-col-12', 'empty');
    phRow3.appendChild(phCol12Empty2);

    // Append phRow3 to phCol6_1
    phCol6_1.appendChild(phRow3);

    // Create third row for 'ph-col-6'
    const phRow4 = document.createElement('div');
    phRow4.classList.add('ph-row');

    const phCol2Empty4 = document.createElement('div');
    phCol2Empty4.classList.add('ph-col-2', 'empty');

    const phCol10Normal2 = document.createElement('div');
    phCol10Normal2.classList.add('ph-col-10');

    const phCol12Normal2 = document.createElement('div');
    phCol12Normal2.classList.add('ph-col-12');

    // Repeated 'ph-col-12' elements in row4
    for (let i = 0; i < 13; i++) {
    const phCol12Normal = document.createElement('div');
    phCol12Normal.classList.add('ph-col-12');
    phRow4.appendChild(phCol12Normal);
    }

    const phCol8Normal4 = document.createElement('div');
    phCol8Normal4.classList.add('ph-col-8');

    const phCol4Empty2 = document.createElement('div');
    phCol4Empty2.classList.add('ph-col-4', 'empty');

    // Append all to row4
    phRow4.appendChild(phCol2Empty4);
    phRow4.appendChild(phCol10Normal2);
    phRow4.appendChild(phCol8Normal4);
    phRow4.appendChild(phCol4Empty2);

    // Append phRow4 to phCol6_1
    phCol6_1.appendChild(phRow4);


    // Append all columns to phItem
    phItem.appendChild(phCol12);
    phItem.appendChild(phCol6_1);
    return phItem;
}