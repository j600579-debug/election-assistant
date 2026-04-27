function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let output = document.getElementById("chat-history");
    let message = "";

    if (input.includes("vote")) {
        message = "Step 1: Register as a voter\nStep 2: Get voter ID\nStep 3: Go to polling booth\nStep 4: Vote";
    }
    else if (input.includes("register")) {
        message = "You can register online through Election Commission website or visit nearby office.";
    }
    else if (input.includes("age")) {
        message = "You must be 18 years or older to vote.";
    }
    else if (input.includes("document")) {
        message = "You need Voter ID, Aadhaar, or any valid government ID.";
    }
    else if (input.includes("where")) {
        message = "You can vote at your assigned polling booth mentioned in voter slip.";
    }
    else if (input.includes("time")) {
        message = "Voting usually starts at 7 AM and ends at 6 PM.";
    }
    else if (input.includes("first")) {
        message = "First-time voters must register, check voter list, and carry ID proof to polling booth.";
    }
    else if (input.includes("check")) {
        message = "You can check your name in voter list on Election Commission website.";
    }
    else if (input.includes("timeline")) {
        message = "Election process includes announcement, nomination, campaigning, voting, and result.";
    }
    else if (input.includes("result")) {
        message = "Election results are usually announced after counting of votes.";
    }
    else if (input.includes("booth")) {
        message = "Polling booth is the place where you go to cast your vote.";
    }
    else if (input.includes("id")) {
        message = "Voter ID is issued after successful registration.";
    }
    else if (input.includes("தமிழ்")) {
        message = "வாக்களிக்கும் படிகள்: 1. பதிவு செய்யவும் 2. வாக்காளர் அட்டை பெறவும் 3. வாக்குச்சாவடி செல்லவும் 4. வாக்களிக்கவும்";
    }
    else {
        message = "Ask about vote, register, documents, timeline or first-time voting.";
    }

    output.innerHTML += "<p><b>You:</b> " + input + "</p>";
    output.innerHTML += "<p><b>Bot:</b> " + message + "</p>";

    document.getElementById("user-input").value = "";
}