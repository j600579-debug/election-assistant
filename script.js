// Tab switching
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 1. 10 Flashcards Data
const flashData = [
    {f: "EVM", b: "மின்னணு வாக்குப்பதிவு இயந்திரம்"},
    {f: "VVPAT", b: "வாக்குச் சரிபார்ப்புத் தாள் தணிக்கைச் சோதனை"},
    {f: "NOTA", b: "நோட்டா - எவருக்கும் வாக்களிக்க விருப்பமில்லை"},
    {f: "ECI", b: "இந்திய தேர்தல் ஆணையம்"},
    {f: "Model Code", b: "தேர்தல் நடத்தை விதிகள்"},
    {f: "EPIC", b: "வாக்காளர் அடையாள அட்டை"},
    {f: "Constituency", b: "தேர்தல் தொகுதி"},
    {f: "Polling Agent", b: "வாக்குச்சாவடி முகவர்"},
    {f: "Manifesto", b: "தேர்தல் அறிக்கை"},
    {f: "By-Election", b: "இடைத்தேர்தல்"}
];

const grid = document.getElementById('cardsGrid');
flashData.forEach(item => {
    grid.innerHTML += `
        <div class="card" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">${item.f}</div>
                <div class="card-back">${item.b}</div>
            </div>
        </div>`;
});

// 2. 10 Quiz Questions
const quizData = [
    {q: "வாக்களிக்க குறைந்தபட்ச வயது?", a: "18", o: ["18", "21"]},
    {q: "EVM என்பது என்ன?", a: "வாக்கு இயந்திரம்", o: ["பண இயந்திரம்", "வாக்கு இயந்திரம்"]},
    {q: "நோட்டா எதைக் குறிக்கிறது?", a: "எவரையும் பிடிக்கவில்லை", o: ["எவரையும் பிடிக்கவில்லை", "அனைவரையும் பிடிக்கும்"]},
    {q: "இந்திய தேர்தல் ஆணையத்தின் தலைமையகம்?", a: "புது டெல்லி", o: ["சென்னை", "புது டெல்லி"]},
    {q: "தேர்தல் எத்தனை ஆண்டுகளுக்கு ஒருமுறை?", a: "5", o: ["4", "5"]},
    {q: "வாக்காளர் அடையாள அட்டை பெயர்?", a: "EPIC", o: ["EPIC", "PAN"]},
    {q: "மையின் நிறம் என்ன?", a: "ஊதா", o: ["சிவப்பு", "ஊதா"]},
    {q: "வாக்குச் சாவடி எங்கு அமையும்?", a: "பொது இடங்களில்", o: ["பொது இடங்களில்", "தனியார் வீடுகளில்"]},
    {q: "தேர்தல் நாளை யார் அறிவிப்பார்?", a: "தேர்தல் ஆணையம்", o: ["அரசியல் கட்சி", "தேர்தல் ஆணையம்"]},
    {q: "VVPAT எதற்குப் பயன்படும்?", a: "வாக்கைச் சரிபார்க்க", o: ["பணம் எடுக்க", "வாக்கைச் சரிபார்க்க"]}
];

const qContainer = document.getElementById('quizContainer');
quizData.forEach((item, index) => {
    let optionsHtml = item.o.map(opt => `<button class="q-btn" onclick="checkQ('${opt}', '${item.a}')">${opt}</button>`).join('');
    qContainer.innerHTML += `<div class="q-box"><p>${index + 1}. ${item.q}</p>${optionsHtml}</div>`;
});

function checkQ(u, a) { alert(u === a ? "சரி! 🎉" : "தவறு!"); }

// 3. AI Assistant Logic
const responses = {
    "vote": "வாக்களிக்க 18 வயது வேண்டும் மற்றும் வாக்காளர் பட்டியலில் பெயர் இருக்க வேண்டும்.",
    "வயது": "வாக்களிக்கத் தகுதியான வயது 18 பூர்த்தியாகி இருக்க வேண்டும்.",
    "ஐடி": "வாக்காளர் அட்டை (Voter ID), ஆதார், அல்லது ஓட்டுநர் உரிமம் பயன்படுத்தலாம்.",
    "nota": "நோட்டா என்பது எந்த வேட்பாளருக்கும் வாக்களிக்க விருப்பம் இல்லாத போது அழுத்தும் பொத்தான்."
};

function askBot() {
    const input = document.getElementById('userInput');
    const window = document.getElementById('chatWindow');
    const text = input.value.trim().toLowerCase();
    
    if(!text) return;

    window.innerHTML += `<div style="text-align:right; margin:10px 0; color:var(--primary)">You: ${input.value}</div>`;
    
    let botReply = "மன்னிக்கவும், இது குறித்த தகவல் என்னிடம் இல்லை. ஓட்டு, வயது, ஐடி பற்றி கேளுங்கள்.";
    for(let key in responses) { if(text.includes(key)) botReply = responses[key]; }

    setTimeout(() => {
        window.innerHTML += `<div style="margin:10px 0; font-weight:bold;">Bot: ${botReply}</div>`;
        window.scrollTop = window.scrollHeight;
    }, 500);
    input.value = "";
}
