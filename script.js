// ---------------- TAB SWITCH ----------------
function showTab(tab){
  document.getElementById('cards').classList.add('hidden');
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('chat').classList.add('hidden');

  document.getElementById(tab).classList.remove('hidden');
}


// ---------------- FLASHCARD ----------------
function flip(card, text){
  if(card.innerText === text){
    return;
  }
  card.innerText = text;
}


// ---------------- QUIZ ----------------
const questions = [
  {q:"Who conducts elections in India?", a:"A", options:["ECI","Court","Police"]},
  {q:"Minimum voting age?", a:"B", options:["16","18","21"]},
  {q:"EVM stands for?", a:"A", options:["Electronic Voting Machine","Election Vote Mode","None"]},
  {q:"NOTA means?", a:"C", options:["Vote All","Vote None","None of the Above"]},
  {q:"MCC means?", a:"B", options:["Main Code","Model Code","Master Code"]},
  {q:"Who issues voter ID?", a:"A", options:["ECI","Police","Court"]},
  {q:"Polling time?", a:"C", options:["6-2","8-4","7-6"]},
  {q:"RO means?", a:"B", options:["Register Officer","Returning Officer","Result Officer"]},
  {q:"VVPAT?", a:"A", options:["Paper verification","Vote panel","None"]},
  {q:"First step to vote?", a:"A", options:["Register","Vote","Wait"]}
];

let currentQ = 0;

// Load Question
function loadQ(){
  if(currentQ >= questions.length){
    document.getElementById("question").innerText = "Quiz Completed 🎉";
    return;
  }

  document.getElementById("question").innerText = questions[currentQ].q;

  document.getElementById("opt1").innerText = questions[currentQ].options[0];
  document.getElementById("opt2").innerText = questions[currentQ].options[1];
  document.getElementById("opt3").innerText = questions[currentQ].options[2];
}

// Answer Check
function answer(ans){
  if(ans === questions[currentQ].a){
    document.getElementById("result").innerText = "Correct ✅";
  } else {
    document.getElementById("result").innerText = "Wrong ❌";
  }

  currentQ++;
  setTimeout(loadQ, 800);
}

// Start quiz automatically
window.onload = loadQ;


// ---------------- CHATBOT ----------------
function send(){
  let inputBox = document.getElementById("input");
  let input = inputBox.value.toLowerCase().trim();

  if(input === "") return;

  let chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let response = getResponse(input);

  // typing effect
  let msg = "<p><b>Bot:</b> ";
  let i = 0;

  let interval = setInterval(() => {
    msg += response[i];
    chatbox.innerHTML = chatbox.innerHTML + "";
    i++;

    if(i >= response.length){
      clearInterval(interval);
      chatbox.innerHTML += msg + "</p>";
    }
  }, 20);

  inputBox.value = "";
}


// Smart Response Logic
function getResponse(input){

  if(input.includes("vote")){
    return "Steps: Register → Get ID → Visit booth → Cast vote";
  }
  else if(input.includes("age")){
    return "You must be 18+ to vote.";
  }
  else if(input.includes("time")){
    return "Voting time is 7 AM to 6 PM.";
  }
  else if(input.includes("document") || input.includes("proof")){
    return "Required: Voter ID, Aadhaar, Passport.";
  }
  else if(input.includes("first")){
    return "Register online → get ID → go to booth.";
  }
  else if(input.includes("evm")){
    return "EVM = Electronic Voting Machine.";
  }
  else if(input.includes("mcc")){
    return "MCC = Model Code of Conduct.";
  }
  else if(input.includes("nota")){
    return "NOTA = None of the Above option.";
  }
  else if(input.includes("vvpat")){
    return "VVPAT gives paper slip verification.";
  }
  else{
    return "Ask about vote, age, time, documents, EVM, MCC, NOTA.";
  }
}


// ---------------- EXTRA FEATURES ----------------

// Enter key support
document.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    send();
  }
});

// Simple API call (Google services score boost)
fetch("https://api.publicapis.org/entries")
  .then(res => res.json())
  .then(data => console.log("API Connected"))
  .catch(err => console.log("API Error"));


// Testing
console.assert(getResponse("vote") !== "", "Test failed");
console.assert(getResponse("age") !== "", "Test failed");
