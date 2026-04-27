function show(id){
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(s){
        s.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function flip(el){
    if(el.innerText === "ECI"){
        el.innerText = "Election Commission of India";
    } 
    else if(el.innerText === "EVM"){
        el.innerText = "Electronic Voting Machine";
    } 
    else if(el.innerText === "VVPAT"){
        el.innerText = "Voter Verified Paper Audit Trail";
    } 
    else if(el.innerText === "NOTA"){
        el.innerText = "None Of The Above";
    }
}

function check(ans){
    const result = document.getElementById("result");

    if(ans === "b"){
        result.innerText = "Correct!";
    } else {
        result.innerText = "Wrong!";
    }
}

function send(){
    const text = document.getElementById("msg").value;
    const chat = document.getElementById("chatArea");

    let reply = "";

    if(text.toLowerCase().includes("vote")){
        reply = "Voting happens at polling booth";
    } 
    else if(text.toLowerCase().includes("age")){
        reply = "You must be 18+ to vote";
    } 
    else{
        reply = "Try: vote, age, election";
    }

    chat.innerText = "You: " + text + "\nBot: " + reply;
}
