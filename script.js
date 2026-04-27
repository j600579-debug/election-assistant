// 1. Live Clock Logic
function startClock() {
    setInterval(() => {
        const now = new Date();
        document.getElementById("liveClock").textContent = now.toLocaleTimeString();
    }, 1000);
}

// 2. Section Switch Logic
function showPane(paneId) {
    document.querySelectorAll('.content-panel').forEach(p => p.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(paneId).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

// 3. Smart AI Assistant Logic (Answers any election query)
const electionData = {
    "vote": "Register at nvsp.in. Carry your Voter ID. Voting is your right!",
    "age": "Minimum age to vote in India is 18 years.",
    "nota": "NOTA allows you to reject all candidates in your constituency.",
    "evm": "Electronic Voting Machine is used to record and count votes securely.",
    "vvpat": "VVPAT provides a paper slip to verify your vote was cast correctly.",
    "id": "You can use Voter ID, Aadhaar, PAN card, or Driving License.",
    "mcc": "Model Code of Conduct starts once election dates are announced.",
    "eci": "Election Commission of India (ECI) manages the entire process.",
    "time": "Polling booths are usually open from 7:00 AM to 6:00 PM."
};

function handleAI() {
    const chatDisplay = document.getElementById("chatDisplay");
    const userInput = document.getElementById("userInput");
    const query = userInput.value.trim().toLowerCase();
    
    if (!query) return;

    // User Message
    chatDisplay.innerHTML += `<div style="color:var(--accent); margin-bottom:10px;">You: ${userInput.value}</div>`;
    
    // AI Searching Logic
    setTimeout(() => {
        let answer = "I'm sorry, I don't have that specific info. Try asking about EVM, NOTA, Age, or ID.";
        
        // Find best match in our data
        for (let key in electionData) {
            if (query.includes(key)) {
                answer = electionData[key];
                break;
            }
        }
        
        chatDisplay.innerHTML += `<div style="color:var(--green); margin-bottom:10px;">Bot: ${answer}</div>`;
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }, 400);

    userInput.value = "";
}

// 4. Initialization
startClock();
document.getElementById("userInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleAI();
});
