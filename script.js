// செக்ஷன்களை மாற்றும் செயல்பாடு
function showSection(sectionId) {
    // 1. அனைத்து செக்ஷன்களையும் மறைக்க
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.add('hidden'));

    // 2. அனைத்து பட்டன் அனிமேஷன்களையும் நீக்க
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // 3. நாம் கிளிக் செய்ததை மட்டும் காட்ட
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');

    // 4. கிளிக் செய்த பட்டனுக்கு கலர் கொடுக்க
    event.currentTarget.classList.add('active');
}

function sendMessage() {
    const chatDisplay = document.getElementById("chatDisplay");
    const input = document.getElementById("userInput");
    if(!input.value) return;
    chatDisplay.innerHTML += `<p style="color:cyan">You: ${input.value}</p>`;
    setTimeout(() => {
        chatDisplay.innerHTML += `<p style="color:lime">Bot: Processing your election query...</p>`;
    }, 500);
    input.value = "";
}
