// செக்ஷன் சுவிட்ச்
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

// அசிஸ்டண்ட் மெசேஜ் ஹேண்ட்லர் (பிக்ஸ் செய்யப்பட்டது)
function handleSend() {
    const chatBox = document.getElementById("chatBox");
    const input = document.getElementById("userInput");
    const val = input.value.trim().toLowerCase();
    
    if(!val) return;

    chatBox.innerHTML += `<div style="color:#58a6ff; margin-bottom:10px;">You: ${input.value}</div>`;
    
    // AI பதில் லாஜிக்
    setTimeout(() => {
        let reply = "I am here to help! Ask about vote, age, or NOTA.";
        if(val.includes("vote") || val.includes("ஓட்டு")) reply = "To vote, you must be 18+ and have a Voter ID.";
        if(val.includes("age") || val.includes("வயது")) reply = "Minimum voting age in India is 18 years.";
        if(val.includes("nota")) reply = "NOTA allows you to reject all candidates in your constituency.";
        
        chatBox.innerHTML += `<div style="color:#32cd32; margin-bottom:10px;">Bot: ${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);
    
    input.value = "";
}

// 10 முக்கிய கேள்விகள் (Quiz)
const quizData = [
    "1. இந்திய தேர்தல் ஆணையம் எப்போது தொடங்கப்பட்டது? (1950)",
    "2. வாக்களிக்க குறைந்தபட்ச வயது என்ன? (18)",
    "3. EVM என்பதன் விரிவாக்கம்? (Electronic Voting Machine)",
    "4. முதல் பொதுத் தேர்தல் எப்போது நடந்தது? (1951-52)",
    "5. தேர்தல் ஆணையத்தின் தலைமையகம் எங்குள்ளது? (புது தில்லி)",
    "6. ஒரு வேட்பாளர் எத்தனை தொகுதிகளில் போட்டியிடலாம்? (அதிகபட்சம் 2)",
    "7. NOTA எப்போது அறிமுகப்படுத்தப்பட்டது? (2013)",
    "8. VVPAT எதற்காகப் பயன்படுகிறது? (வாக்கைச் சரிபார்க்க)",
    "9. தேர்தல் நடத்தை விதிமுறைகள் (MCC) எப்போது தொடங்கும்? (தேதி அறிவித்தவுடன்)",
    "10. தேசிய வாக்காளர் தினம் எப்போது? (ஜனவரி 25)"
];

const container = document.getElementById("quizContainer");
quizData.forEach(q => {
    container.innerHTML += `<p style="text-align:left; border-bottom:1px solid #30363d; padding:10px; font-size:14px;">${q}</p>`;
});

// Enter Key Support for Chat
document.getElementById("userInput").addEventListener("keypress", (e) => {
    if(e.key === "Enter") handleSend();
});
