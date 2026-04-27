function show(id){
  document.getElementById("quiz").style.display="none";
  document.getElementById("chat").style.display="none";
  document.getElementById(id).style.display="block";
}

/* QUIZ */

let questions = [
  {
    q:"Who conducts elections in India?",
    a:["Supreme Court","ECI","Parliament"],
    c:1
  },
  {
    q:"Minimum voting age?",
    a:["16","18","21"],
    c:1
  },
  {
    q:"What is EVM?",
    a:["Machine","Paper","Law"],
    c:0
  }
];

let i=0, score=0;

function load(){
  document.getElementById("q").innerText = questions[i].q;
  document.getElementById("a0").innerText = questions[i].a[0];
  document.getElementById("a1").innerText = questions[i].a[1];
  document.getElementById("a2").innerText = questions[i].a[2];
}

window.onload = load;

function answer(x){
  if(x == questions[i].c){
    score++;
  }

  i++;

  if(i < questions.length){
    load();
  } else {
    document.getElementById("q").innerText = "Finished!";
    document.getElementById("score").innerText = "Score: " + score;
  }
}

/* CHAT */

function send(){
  let input = document.getElementById("input").value;
  let box = document.getElementById("chatbox");

  let reply = "";

  if(input.includes("vote")){
    reply = "Go to booth and vote.";
  }
  else if(input.includes("age")){
    reply = "Minimum age is 18.";
  }
  else{
    reply = "Ask about vote or age.";
  }

  box.innerHTML += "<p>You: "+input+"</p>";
  box.innerHTML += "<p>Bot: "+reply+"</p>";
}
