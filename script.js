// Anime Character Database
const animeCharacters = {
    // Popular female characters with analysis data
    "zero two": {
        name: "Zero Two",
        anime: "Darling in the Franxx",
        role: "Main Character",
        cupSize: "D-cup",
        kawaiiMeter: 95,
        personality: "Wild & Mysterious",
        popularity: "Extremely High",
        description: "A mysterious girl with pink hair and horns. She's wild, unpredictable, and has a complex personality that makes her incredibly kawaii. Her relationship with Hiro shows her softer side.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Zero+Two"
    },
    "marin kitagawa": {
        name: "Marin Kitagawa",
        anime: "My Dress-Up Darling",
        role: "Main Character",
        cupSize: "C-cup",
        kawaiiMeter: 98,
        personality: "Energetic & Sweet",
        popularity: "Very High",
        description: "A cheerful and energetic girl who loves cosplay. Her enthusiasm and genuine personality make her incredibly kawaii. She's supportive and kind to everyone around her.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Marin+Kitagawa"
    },
    "mikasa ackerman": {
        name: "Mikasa Ackerman",
        anime: "Attack on Titan",
        role: "Main Character",
        cupSize: "B-cup",
        kawaiiMeter: 85,
        personality: "Loyal & Strong",
        popularity: "Extremely High",
        description: "A skilled warrior with unwavering loyalty to Eren. Her stoic exterior hides a caring heart, making her kawaii in her own unique way.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Mikasa+Ackerman"
    },
    "asuna yuuki": {
        name: "Asuna Yuuki",
        anime: "Sword Art Online",
        role: "Main Character",
        cupSize: "C-cup",
        kawaiiMeter: 92,
        personality: "Strong & Caring",
        popularity: "Very High",
        description: "A skilled swordswoman who becomes Kirito's love interest. Her strength and caring nature make her incredibly kawaii and beloved by fans.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Asuna+Yuuki"
    },
    "rem": {
        name: "Rem",
        anime: "Re:Zero",
        role: "Supporting Character",
        cupSize: "B-cup",
        kawaiiMeter: 96,
        personality: "Loyal & Devoted",
        popularity: "Extremely High",
        description: "A blue-haired maid with incredible loyalty and devotion. Her selfless love and gentle nature make her one of the most kawaii characters in anime.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Rem"
    },
    "nami": {
        name: "Nami",
        anime: "One Piece",
        role: "Main Character",
        cupSize: "F-cup",
        kawaiiMeter: 88,
        personality: "Smart & Sassy",
        popularity: "Very High",
        description: "A skilled navigator with a love for money and treasure. Her intelligence and occasional tsundere moments make her quite kawaii.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Nami"
    },
    "hinata hyuga": {
        name: "Hinata Hyuga",
        anime: "Naruto",
        role: "Supporting Character",
        cupSize: "C-cup",
        kawaiiMeter: 94,
        personality: "Shy & Kind",
        popularity: "High",
        description: "A shy girl with a gentle heart who secretly loves Naruto. Her timid nature and pure heart make her incredibly kawaii.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Hinata+Hyuga"
    },
    "yui hirasawa": {
        name: "Yui Hirasawa",
        anime: "K-ON!",
        role: "Main Character",
        cupSize: "A-cup",
        kawaiiMeter: 99,
        personality: "Airheaded & Sweet",
        popularity: "High",
        description: "A clumsy but lovable guitarist who's the heart of the band. Her innocent personality and clumsiness make her extremely kawaii.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Yui+Hirasawa"
    },
    "mio akiyama": {
        name: "Mio Akiyama",
        anime: "K-ON!",
        role: "Main Character",
        cupSize: "B-cup",
        kawaiiMeter: 93,
        personality: "Shy & Talented",
        popularity: "High",
        description: "A talented bassist who's easily embarrassed. Her shy reactions and musical talent make her very kawaii.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Mio+Akiyama"
    },
    "yukino yukinoshita": {
        name: "Yukino Yukinoshita",
        anime: "My Teen Romantic Comedy SNAFU",
        role: "Main Character",
        cupSize: "C-cup",
        kawaiiMeter: 89,
        personality: "Tsundere & Intelligent",
        popularity: "High",
        description: "A beautiful and intelligent girl with a tsundere personality. Her hidden kindness and occasional vulnerability make her kawaii.",
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Yukino+Yukinoshita"
    }
};

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const analyzeImageBtn = document.getElementById('analyzeImageBtn');
const characterNameInput = document.getElementById('characterName');
const analyzeNameBtn = document.getElementById('analyzeNameBtn');
const resultsSection = document.getElementById('resultsSection');
const loadingSection = document.getElementById('loadingSection');

// Event Listeners
uploadArea.addEventListener('click', () => imageInput.click());
uploadArea.addEventListener('dragover', handleDragOver);
uploadArea.addEventListener('drop', handleDrop);
imageInput.addEventListener('change', handleImageSelect);
analyzeImageBtn.addEventListener('click', analyzeImage);
analyzeNameBtn.addEventListener('click', analyzeByName);

// Drag and Drop functionality
function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#4ecdc4';
    uploadArea.style.background = 'rgba(78, 205, 196, 0.1)';
}

function handleDragOver(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#4ecdc4';
    uploadArea.style.background = 'rgba(78, 205, 196, 0.1)';
}

function handleDrop(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.background = 'rgba(102, 126, 234, 0.05)';
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
        imageInput.files = files;
        handleImageSelect();
    }
}

// Image handling
function handleImageSelect() {
    const file = imageInput.files[0];
    if (file) {
        analyzeImageBtn.disabled = false;
        uploadArea.style.borderColor = '#4ecdc4';
        uploadArea.style.background = 'rgba(78, 205, 196, 0.1)';
    }
}

// Analyze image (simulated)
function analyzeImage() {
    if (!imageInput.files[0]) return;
    
    showLoading();
    
    // Simulate image analysis delay
    setTimeout(() => {
        // For demo purposes, randomly select a character
        const characterNames = Object.keys(animeCharacters);
        const randomCharacter = characterNames[Math.floor(Math.random() * characterNames.length)];
        const character = animeCharacters[randomCharacter];
        
        // Update character image
        character.image = URL.createObjectURL(imageInput.files[0]);
        
        displayResults(character);
        hideLoading();
    }, 3000);
}

// Analyze by name
function analyzeByName() {
    const name = characterNameInput.value.trim().toLowerCase();
    if (!name) return;
    
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        const character = findCharacterByName(name);
        if (character) {
            displayResults(character);
        } else {
            // Create a fictional character if not found
            const fictionalCharacter = createFictionalCharacter(name);
            displayResults(fictionalCharacter);
        }
        hideLoading();
    }, 2000);
}

// Find character by name
function findCharacterByName(name) {
    // Direct match
    if (animeCharacters[name]) {
        return animeCharacters[name];
    }
    
    // Partial match
    for (const key in animeCharacters) {
        if (key.includes(name) || name.includes(key)) {
            return animeCharacters[key];
        }
    }
    
    // Fuzzy match
    for (const key in animeCharacters) {
        if (calculateSimilarity(name, key) > 0.6) {
            return animeCharacters[key];
        }
    }
    
    return null;
}

// Calculate string similarity (simple implementation)
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

// Levenshtein distance for string similarity
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// Create fictional character for unknown names
function createFictionalCharacter(name) {
    const cupSizes = ['A-cup', 'B-cup', 'C-cup', 'D-cup'];
    const personalities = ['Tsundere', 'Yandere', 'Kuudere', 'Dandere', 'Genki', 'Shy', 'Confident', 'Mysterious'];
    const animeTitles = ['Unknown Anime', 'Hidden Gem', 'Secret Series', 'Mystery Show'];
    
    return {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        anime: animeTitles[Math.floor(Math.random() * animeTitles.length)],
        role: "Main Character",
        cupSize: cupSizes[Math.floor(Math.random() * cupSizes.length)],
        kawaiiMeter: Math.floor(Math.random() * 40) + 60, // 60-100 range
        personality: personalities[Math.floor(Math.random() * personalities.length)],
        popularity: "Unknown",
        description: `A mysterious character named ${name.charAt(0).toUpperCase() + name.slice(1)} from an unknown anime. Their kawaii level and personality traits have been analyzed based on available data patterns.`,
        image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=" + encodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1))
    };
}

// Display results
function displayResults(character) {
    // Update character image
    document.getElementById('characterImage').src = character.image;
    
    // Update character details
    document.getElementById('characterNameResult').textContent = character.name;
    document.getElementById('animeTitle').textContent = character.anime;
    document.getElementById('characterRole').textContent = character.role;
    
    // Update analysis results
    document.getElementById('cupSize').textContent = character.cupSize;
    document.getElementById('kawaiiValue').textContent = character.kawaiiMeter + '/100';
    document.getElementById('kawaiiFill').style.width = character.kawaiiMeter + '%';
    document.getElementById('personality').textContent = character.personality;
    document.getElementById('popularity').textContent = character.popularity;
    document.getElementById('characterDescription').textContent = character.description;
    
    // Show results
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Show/hide loading
function showLoading() {
    loadingSection.style.display = 'block';
    resultsSection.style.display = 'none';
    loadingSection.scrollIntoView({ behavior: 'smooth' });
}

function hideLoading() {
    loadingSection.style.display = 'none';
}

// Add some fun animations
document.addEventListener('DOMContentLoaded', () => {
    // Add sparkle effect to title
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', () => {
        title.style.transform = 'scale(1.05)';
        title.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'scale(1)';
    });
    
    // Add hover effects to analysis items
    const analysisItems = document.querySelectorAll('.analysis-item');
    analysisItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        if (characterNameInput.value.trim()) {
            analyzeByName();
        }
    }
});

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('.footer').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🎉 You found the secret! This website was made with lots of kawaii energy! ✨');
        clickCount = 0;
    }
});
