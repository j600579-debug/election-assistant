function flip(card) {
  let front = card.querySelector(".front");
  let back = card.querySelector(".back");

  front.classList.toggle("hidden");
  back.classList.toggle("hidden");
}
const quiz = [
  {
    q: "Who conducts elections in India?",
    options: ["Supreme Court", "ECI", "Parliament"],
    answer: "ECI"
  },
  {
    q: "Minimum age to vote?",
    options: ["16", "18", "21"],
    answer: "18"
  },
  {
    q: "What is EVM?",
    options: ["Machine", "Law", "Court"],
    answer: "Machine"
  },
  {
    q: "What is NOTA?",
    options: ["Vote reject", "Vote accept", "Party"],
    answer: "Vote reject"
  },
  {
    q: "Voting time usually?",
    options: ["7AM-6PM", "9AM-5PM", "24hrs"],
    answer: "7AM-6PM"
  },
  {
    q: "Who verifies vote slip?",
    options: ["VVPAT", "ECI", "Court"],
    answer: "VVPAT"
  },
  {
    q: "What is MCC?",
    options: ["Code of conduct", "Court rule", "Act"],
    answer: "Code of conduct"
  },
  {
    q: "Where do you vote?",
    options: ["Booth", "Court", "Office"],
    answer: "Booth"
  },
  {
    q: "What is voter ID?",
    options: ["Card", "Machine", "Law"],
    answer: "Card"
  },
  {
    q: "Who manages local election?",
    options: ["Returning Officer", "Judge", "Police"],
    answer: "Returning Officer"
  }
];
function chat() {
  let input = document.getElementById("input").value.toLowerCase();
  let output = "";

  if (input.includes("vote")) {
    output = "Step 1: Register → Step 2: Get Voter ID → Step 3: Go to booth → Step 4: Vote";
  } 
  else if (input.includes("age")) {
    output = "You must be 18+ to vote.";
  } 
  else if (input.includes("time")) {
    output = "Voting usually 7AM to 6PM.";
  } 
  else if (input.includes("documents")) {
    output = "Voter ID, Aadhaar, Passport accepted.";
  } 
  else if (input.includes("first")) {
    output = "Register online → get ID → visit booth.";
  } 
  else if (input.includes("evm")) {
    output = "Electronic Voting Machine used for voting.";
  } 
  else if (input.includes("mcc")) {
    output = "Model Code of Conduct during elections.";
  } 
  else if (input.includes("nota")) {
    output = "NOTA means you reject all candidates.";
  } 
  else if (input.includes("vvpat")) {
    output = "VVPAT shows paper slip of your vote.";
  } 
  else {
    output = "Ask about: vote, age, time, documents, EVM, MCC, NOTA.";
  }

  document.getElementById("output").innerText = output;
}
