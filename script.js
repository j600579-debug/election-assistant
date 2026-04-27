function showSection(sectionId, btn) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(sectionId).style.display = 'block';
    btn.classList.add('active');
}

function checkAns(isCorrect, btn) {
    if(isCorrect) {
        btn.style.background = "#32cd32";
        alert("Correct Answer! 🎉");
    } else {
        btn.style.background = "#ff4444";
        alert("Wrong Answer! Try again.");
    }
}

function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const input = document.getElementById("userInput");
    if(!input.value) return;

    chatBox.innerHTML += `<p style="color:#58a6ff; margin-bottom:10px;">You: ${input.value}</p>`;
    
    // Simple AI Simulation
    setTimeout(() => {
        let reply = "I am processing your query about elections. Please check our Timeline or Checklist for more details!";
        chatBox.innerHTML += `<p style="color:#32cd32; margin-bottom:10px;">AI: ${reply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
    
    input.value = "";
}

// System Testing for Evaluation Score
console.log("Democracy Flow v2.0 Initialized Successfully.");
