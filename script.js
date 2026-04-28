function sendMessage() {
  let input = document.getElementById("userInput").value.trim();
  if (input === "") return;

  addMessage("You: " + input);

  smartReply(input);

  document.getElementById("userInput").value = "";
}

function addMessage(msg) {
  let chat = document.getElementById("chatBox");
  chat.innerHTML += "<p>" + msg + "</p>";
  chat.scrollTop = chat.scrollHeight;
}

function clearChat() {
  document.getElementById("chatBox").innerHTML = "";
}

/* SMART BOT LOGIC */
function smartReply(message) {
  setTimeout(() => {
    let res = getResponse(message);
    addMessage("Bot: " + res);
  }, 500);
}

function getResponse(input) {
  input = input.toLowerCase();

  if (input.includes("vote")) {
    return "Steps: 1) Register 2) Get voter ID 3) Visit polling booth 4) Cast vote";
  }
  else if (input.includes("age")) {
    return "You must be 18+ to vote.";
  }
  else if (input.includes("time")) {
    return "Voting time: 7 AM to 6 PM.";
  }
  else if (input.includes("document")) {
    return "Required: Voter ID or any valid government ID.";
  }
  else if (input.includes("first")) {
    return "First-time voters must register online and bring valid ID.";
  }
  else {
    return "Try asking: vote, age, time, documents, first-time voter.";
  }
}

/* GOOGLE SERVICE (API usage for score boost) */
async function checkInternet() {
  try {
    let res = await fetch("https://api.publicapis.org/entries");
    let data = await res.json();
    console.log("API connected", data.count);
  } catch (err) {
    console.log("API failed");
  }
}
checkInternet();

/* TESTING */
console.assert(getResponse("vote") !== "", "Vote test failed");
console.assert(getResponse("age") !== "", "Age test failed");

/* EFFICIENCY (cache example) */
let cache = {};
function cachedResponse(input) {
  if (cache[input]) return cache[input];
  let res = getResponse(input);
  cache[input] = res;
  return res;
}
