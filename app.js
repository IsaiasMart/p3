
const newsData = [
    {
        title: "Trump",
        description: "Es mazo chungo.",
        image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QAWP3JNBL37MFXRCTBZGRM6XJU.JPG&w=1200",
        published: "2024-12-01T10:00:00Z",
    },
    {
        title: "Elon fumon",
        description: "Elon fumon",
        image: "https://cdn.cnn.com/cnnnext/dam/assets/180907100732-elon-musk-smokes-marijuana-podcast-1-super-169.jpg",
        published: "2024-12-01T09:30:00Z",
    },
    {
        title: "Mariano Rajoy se olvida que es presidente",
        description: "“Señor Presidente del Gobierno, señoras y señores diputados… No me refería a ninguno de ustedes, no sé por qué aplauden”.",
        image: "https://www.cidob.org/sites/default/files/styles/max_width_290/public/mariano_rajoy_brey.jpg.webp?itok=WFpp9jOa",
        published: "2024-11-30T15:00:00Z",
    },
];


const newsGrid = document.getElementById("newsGrid");
const newsTemplate = document.getElementById("newsTemplate");

newsData.forEach((news) => {
    const clone = newsTemplate.content.cloneNode(true);
    clone.querySelector("img").src = news.image;
    clone.querySelector(".news-title").textContent = news.title;
    clone.querySelector(".news-description").textContent = news.description;
    clone.querySelector(".timestamp").textContent = formatTimestamp(news.published);
    newsGrid.appendChild(clone);
});


function formatTimestamp(publishedDate) {
    const published = new Date(publishedDate);
    const now = new Date();
    const diffMs = now - published;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 24) {
        return `Publicado hace ${diffHours} horas`;
    } else {
        const diffDays = Math.floor(diffHours / 24);
        return `Publicado hace ${diffDays} dias`;
    }
}


const searchInput = document.getElementById("BInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query) {
        const filteredNews = newsData.filter((news) =>
            news.title.toLowerCase().includes(query)
        );

        filteredNews.forEach((news) => {
            const clone = newsTemplate.content.cloneNode(true);
            clone.querySelector("img").src = news.image;
            clone.querySelector(".news-title").textContent = news.title;
            clone.querySelector(".news-description").textContent = news.description;
            clone.querySelector(".timestamp").textContent = formatTimestamp(news.published);
            searchResults.appendChild(clone);
        });
    }
});
