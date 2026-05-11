// State management
let currentCountry = null;
let currentEuropeCountry = null;

// DOM elements
const countryView = document.getElementById('country-view');
const europeCountriesView = document.getElementById('europe-countries-view');
const universityView = document.getElementById('university-view');
const countryTitle = document.getElementById('country-title');
const universityList = document.getElementById('university-list');
const breadcrumb = document.getElementById('breadcrumb');
const searchInput = document.getElementById('university-search');
const backButton = document.getElementById('back-to-countries');
const backFromEuropeButton = document.getElementById('back-from-europe');
const europeCountriesGrid = document.getElementById('europe-countries-grid');

// Country card click handlers
document.querySelectorAll('.country-card').forEach(card => {
    card.addEventListener('click', () => {
        const country = card.dataset.country;
        if (country === 'europe') {
            showEuropeCountries();
        } else {
            showUniversities(country);
        }
    });
});

// Back button handlers
backButton.addEventListener('click', () => {
    if (currentEuropeCountry) {
        showEuropeCountries();
    } else {
        showCountries();
    }
});

backFromEuropeButton.addEventListener('click', showCountries);

// Search functionality
searchInput.addEventListener('input', (e) => {
    filterUniversities(e.target.value);
});

// Breadcrumb navigation
breadcrumb.addEventListener('click', (e) => {
    if (e.target.dataset.view === 'home') {
        showCountries();
    } else if (e.target.dataset.view === 'europe') {
        showEuropeCountries();
    }
});

// Show country selection view
function showCountries() {
    countryView.classList.add('active');
    europeCountriesView.classList.remove('active');
    universityView.classList.remove('active');
    currentCountry = null;
    currentEuropeCountry = null;
    updateBreadcrumb();
}

// Show European countries selection
function showEuropeCountries() {
    countryView.classList.remove('active');
    europeCountriesView.classList.add('active');
    universityView.classList.remove('active');
    currentCountry = 'europe';
    currentEuropeCountry = null;
    
    renderEuropeCountries();
    updateBreadcrumb('europe');
}

// Render European countries grid
function renderEuropeCountries() {
    europeCountriesGrid.innerHTML = '';
    
    const europeCountries = Object.keys(universities.europe).sort();
    
    europeCountries.forEach(countryKey => {
        const card = document.createElement('button');
        card.className = 'country-card';
        card.dataset.country = countryKey;
        
        const countryName = europeanCountryNames[countryKey] || countryKey;
        const uniCount = universities.europe[countryKey].length;
        
        card.innerHTML = `
            <h2>${countryName}</h2>
            <p>${uniCount} ${uniCount === 1 ? 'University' : 'Universities'}</p>
        `;
        
        card.addEventListener('click', () => {
            showUniversities('europe', countryKey);
        });
        
        europeCountriesGrid.appendChild(card);
    });
}

// Show universities for selected country
function showUniversities(country, europeCountry = null) {
    currentCountry = country;
    currentEuropeCountry = europeCountry;
    
    countryView.classList.remove('active');
    europeCountriesView.classList.remove('active');
    universityView.classList.add('active');
    
    if (country === 'europe' && europeCountry) {
        countryTitle.textContent = europeanCountryNames[europeCountry] || europeCountry;
        searchInput.value = '';
        renderUniversities(universities.europe[europeCountry]);
        updateBreadcrumb('europe', europeCountry);
    } else {
        countryTitle.textContent = countryNames[country];
        searchInput.value = '';
        renderUniversities(universities[country]);
        updateBreadcrumb(country);
    }
}

// Render university cards
function renderUniversities(universityData) {
    universityList.innerHTML = '';
    
    if (universityData.length === 0) {
        universityList.innerHTML = `
            <div class="no-results">
                <h3>No universities found</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }
    
    universityData.forEach(uni => {
        const card = document.createElement('a');
        card.className = 'university-card';
        card.href = uni.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        
        let countryBadge = '';
        if (uni.country) {
            countryBadge = `<span class="university-country">${uni.country}</span>`;
        }
        
        card.innerHTML = `
            <h3>${uni.name}</h3>
            <p class="university-location">📍 ${uni.location}</p>
            <p class="university-note">${uni.note}</p>
            ${countryBadge}
        `;
        
        universityList.appendChild(card);
    });
}

// Filter universities based on search input
function filterUniversities(searchTerm) {
    if (!currentCountry) return;
    
    let filtered;
    if (currentCountry === 'europe' && currentEuropeCountry) {
        filtered = universities.europe[currentEuropeCountry].filter(uni => 
            uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            uni.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } else if (currentCountry !== 'europe') {
        filtered = universities[currentCountry].filter(uni => 
            uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            uni.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    renderUniversities(filtered);
}

// Update breadcrumb navigation
function updateBreadcrumb(country = null, europeCountry = null) {
    if (!country) {
        breadcrumb.innerHTML = '<span class="breadcrumb-item active" data-view="home">Home</span>';
    } else if (country === 'europe' && !europeCountry) {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item" data-view="home">Home</span>
            <span class="breadcrumb-separator">→</span>
            <span class="breadcrumb-item active">Europe</span>
        `;
    } else if (country === 'europe' && europeCountry) {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item" data-view="home">Home</span>
            <span class="breadcrumb-separator">→</span>
            <span class="breadcrumb-item" data-view="europe">Europe</span>
            <span class="breadcrumb-separator">→</span>
            <span class="breadcrumb-item active">${europeanCountryNames[europeCountry] || europeCountry}</span>
        `;
    } else {
        breadcrumb.innerHTML = `
            <span class="breadcrumb-item" data-view="home">Home</span>
            <span class="breadcrumb-separator">→</span>
            <span class="breadcrumb-item active">${countryNames[country]}</span>
        `;
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    showCountries();
});
