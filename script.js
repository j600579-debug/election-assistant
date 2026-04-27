// செக்ஷன் மேனேஜர்
function openTab(evt, tabId) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 1. 10 Flashcards
const flashData = [
    {f: "EVM", b: "மின்னணு வாக்குப்பதிவு இயந்திரம்"},
    {f: "VVPAT", b: "வாக்கைச் சரிபார்க்கும் காகிதச் சீட்டு"},
    {f: "NOTA", b: "எவருக்கும் வாக்களிக்க விருப்பமில்லை"},
    {f: "MCC", b: "தேர்தல் நடத்தை விதிமுறைகள்"},
    {f: "ECI", b: "இந்திய தேர்தல் ஆணையம்"},
    {f: "EPIC", b: "வாக்காளர் அடையாள அட்டை"},
    {f: "BLO", b: "வாக்குச்சாவடி நிலை அலுவலர்"},
    {f: "EP Ratio", b: "வாக்காளர் - மக்கள் தொகை விகிதம்"},
    {f: "Proxy", b: "பதிலி வாக்கு செலுத்தும் முறை"},
    {f: "Manifesto", b: "தேர்தல் வாக்குறுதி அறிக்கை"}
];

const grid = document.getElementById('flashGrid');
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
    {q: "இந்தியாவில் தேர்தல் ஆணையம் எங்குள்ளது?", a: "டெல்லி", o: ["சென்னை", "டெல்லி"]},
    {q: "வாக்காளர் தினம் எப்போது?", a: "ஜனவரி 25", o: ["ஜனவரி 25", "ஆகஸ்ட் 15"]},
    {q: "EVM என்பது எதைக் குறிக்கும்?", a: "வாக்கு இயந்திரம்", o: ["வாக்கு இயந்திரம்", "பண இயந்திரம்"]},
    {q: "நோட்டா (NOTA) எப்போது அறிமுகமானது?", a: "2013", o: ["2010", "2013"]},
    {q: "தேர்தல் எத்தனை ஆண்டுகளுக்கு ஒருமுறை?", a: "5", o: ["4", "5"]},
    {q: "EPIC அட்டை என்பது என்ன?", a: "வாக்காளர் அட்டை", o: ["வாக்காளர் அட்டை", "ஆதார் அட்டை"]},
    {q: "வேட்பாளர் ஆக குறைந்தபட்ச வயது?", a: "25", o: ["18", "25"]},
    {q: "மையின் நிறம் என்ன?", a: "ஊதா", o: ["ஊதா", "கருப்பு"]},
    {q: "தேர்தல் ஆணையத்தின் தலைவர் யார்?", a: "முதன்மை ஆணையர்", o: ["ஜனாதிபதி", "முதன்மை ஆணையர்"]}
];

const qList = document.getElementById('quizList');
quizData.forEach((item, i) => {
    let opts = item.o.map(opt => `<button class="opt-btn" onclick="checkQ('${opt}','${item.a}')">${opt}</button>`).join('');
    qList.innerHTML += `<div class="q-box"><p>${i+1}. ${item.q}</p>${opts}</div>`;
});

function checkQ(u, a) { alert(u === a ? "சரி! 🎉" : "தவறு! ❌"); }

// 3. AI Assistant (ஓட்டு தொடர்பான கேள்விகள்)
const answers = {
    "vote": "வாக்களிக்க 18 வயது வேண்டும் மற்றும் வாக்காளர் அடையாள அட்டை அவசியம்.",
    "வயது": "இந்தியாவில் வாக்களிக்கத் தகுதியான வயது 18 பூர்த்தியாகி இருக்க வேண்டும்.",
    "ஐடி": "வாக்காளர் அடையாள அட்டை அல்லது ஆதார் அட்டையை அடையாளச் சான்றாகப் பயன்படுத்தலாம்.",
    "nota": "நோட்டா என்பது வேட்பாளர்கள் யாரையும் பிடிக்கவில்லை எனில் வாக்களிக்கும் பொத்தான்."
};

function handleAI() {
    const input = document.getElementById('userInput');
    const box = document.getElementById('chatBox');
    const val = input.value.trim().toLowerCase();
    
    if(!val) return;

    box.innerHTML += `<div style="color:var(--accent-orange); margin:10px 0;">You: ${input.value}</div>`;
    
    let res = "மன்னிக்கவும், இது குறித்த தகவல் என்னிடம் இல்லை. ஓட்டு, வயது, ஐடி பற்றி கேளுங்கள்.";
    for(let k in answers) { if(val.includes(k)) res = answers[k]; }

    setTimeout(() => {
        box.innerHTML += `<div style="color:var(--accent-green); margin:10px 0;">Bot: ${res}</div>`;
        box.scrollTop = box.scrollHeight;
    }, 400);
    input.value = "";
}

document.getElementById('userInput').addEventListener('keypress', (e) => { if(e.key==='Enter') handleAI(); });
