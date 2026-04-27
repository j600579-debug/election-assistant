function show(id){
    document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function flip(el){
    if(el.innerText=="ECI") el.innerText="Election Commission of India";
    else if(el.innerText=="EVM") el.innerText="Voting Machine";
    else if(el.innerText=="VVPAT") el.innerText="Vote Slip System";
    else if(el.innerText=="NOTA") el.innerText="None Of The Above";
}

function check(ans){
    if(ans=="b"){
        document.getElementById("result").innerText="Correct!";
    }else{
        document.getElementById("result").innerText="Wrong!";
    }
}

function send(){
    let text=document.getElementById("msg").value;
    let reply="";

    if(text.includes("vote")) reply="Voting happens at polling booth";
    else if(text.includes("age")) reply="You must be 18+";
    else reply="Ask about vote, age, process";

    document.getElementById("chatArea").innerText=
    "You: "+text+"\nBot: "+reply;
}
