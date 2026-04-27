// 1. தேவையான உறுப்புகளைத் தேர்ந்தெடுத்தல்
const chatBox = document.getElementById("chatBox");
const userInputField = document.getElementById("userInput");
const cache = new Map();
let currentLang = 'en'; // ஆரம்ப மொழி ஆங்கிலம்

/**
 * 2. மொழிமாற்றச் செயல்பாடு (இதுதான் பட்டன் கிளிக் செய்யும்போது வேலை செய்யும்)
 */
function setLanguage(lang) {
    console.log("Language changed to: " + lang); // இது சோதனையிட உதவும்
    currentLang = lang;

    // பட்டன்களின் நிறத்தை மாற்றுதல் (Active class)
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ta').classList.toggle('active', lang === 'ta');

    // சிஸ்டம் மெசேஜ் மூலம் உறுதி செய்தல்
    const systemMsg = lang === 'en' ? "Language set to English" : "மொழி தமிழுக்கு மாற்றப்பட்டது";
    appendMessage("System", systemMsg, "bot-msg");
}

// Enter பட்டன் அழுத்தினால் மெசேஜ் அனுப்ப
userInputField.addEventListener("keypress", (e) => { 
    if (e.key === "Enter") sendMessage(); 
});

/**
 * 3. மெசேஜ் அனுப்பும் செயல்பாடு
 */
function sendMessage() {
    const input = userInputField.value.trim();
    if (!input) return;

    appendMessage("You", input, "user-msg");
    processResponse(input.toLowerCase());
    userInputField.value = "";
}

function appendMessage(sender, text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${className}`;
    msgDiv.textContent = `${sender}: ${text}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/**
 * 4. பதில்களை உருவாக்கும் பகுதி (Logic)
 */
async function processResponse(input) {
    // Cache சோதனை
    if (cache.has(input + currentLang)) {
        appendMessage("Bot", cache.get(input + currentLang), "bot-msg");
        return;
    }

    const response = await getAIBotResponse(input);
    cache.set(input + currentLang, response);
    appendMessage("Bot", response, "bot-msg");
}

async function getAIBotResponse(query) {
    // தேர்தல் தொடர்பான விரிவான பதில்கள்
    const data = {
        "vote": { 
            "en": "Register at nvsp.in, get your Voter ID, and visit your booth on election day.", 
            "ta": "nvsp.in இணையதளத்தில் பதிவு செய்து, அடையாள அட்டை பெற்று, தேர்தல் நாளன்று வாக்குச்சாவடிக்குச் செல்லவும்." 
        },
        "age": { 
            "en": "You must be 18 years or older to vote.", 
            "ta": "வாக்களிக்க உங்களுக்கு 18 வயது அல்லது அதற்கு மேல் இருக்க வேண்டும்." 
        },
        "nota": { 
            "en": "NOTA (None of the Above) is an option to reject all candidates.", 
            "
                
