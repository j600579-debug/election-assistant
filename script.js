/// 1. பட்டன்களை கிளிக் செய்தால் பக்கம் மாறுவதற்கான லாஜிக்
function openTab(evt, tabName) {
    var i, tabcontent, navitems;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    navitems = document.getElementsByClassName("nav-item");
    for (i = 0; i < navitems.length; i++) {
        navitems[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// 2. AI அசிஸ்டண்ட் லாஜிக்
function askBot() {
    const msgBox = document.getElementById("msgWindow");
    const input = document.getElementById("userInput");
    const val = input.value.trim().toLowerCase();
    
    if(!val) return;

    msgBox.innerHTML += `<p style="color:var(--orange)">You: ${input.value}</p>`;
    
    setTimeout(() => {
        let res = "Please ask about Voting, EVM, NOTA, or Age.";
        if(val.includes("vote") || val.includes("ஓட்டு")) res = "To vote, you must be 18+ and have a Voter ID.";
        if(val.includes("age") || val.includes("வயது")) res = "Indian Citizens above 18 can vote.";
        if(val.includes("nota")) res = "NOTA is an option to reject all candidates.";
        
        msgBox.innerHTML += `<p style="color:var(--green)">Bot: ${res}</p>`;
        msgBox.scrollTop = msgBox.scrollHeight;
    }, 400);
    
    input.value = "";
}

function checkAns(correct) {
    alert(correct ? "Correct! 🎉" : "Try Again!");
}
