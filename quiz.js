
document.getElementById("constant1").style.visibility="visible";
document.getElementById("constant2").style.visibility="hidden";
document.getElementById("constant3").style.visibility="hidden";
document.getElementById("restart").style.visibility="hidden";
function start(){
    document.getElementById("constant2").style.visibility="visible";
    document.getElementById("constant1").style.visibility="hidden";
}
var operators = ['+','-','*','/'];
let n1= Math.floor(Math.random()*10+1);
let n2= Math.floor(Math.random()*10+1);

document.getElementById("intext").value=n1;
document.getElementById("intext1").value=n2;

let op = operators[Math.floor(Math.random()*4)];
document.getElementById("op").innerHTML=op;

let adds;
let allvalues=[];
let answers=[];

switch(op){
    case '+' : adds= n1 + n2;
    allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
    break;            
    case '-' : adds= n1-n2;
    allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
    break;
    case '*' : adds=n1*n2;
    allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
    break;
    case '/' : adds=n1/n2;
    allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
    break;
}


var countCorrect=0;
var countWrong=0;
document.getElementById("score").innerHTML=countCorrect;
function Game(){
    let count = countCorrect+countWrong;
    var user = document.getElementById("intext2").value;
    if(count<14){
        
        if(user == adds){
            countCorrect++;
            answers.push({correct: true,user:user});
            
        }else if(user==''){
            countWrong++;
            answers.push({correct: false,user:'empty'});
        }else{
            countWrong++;
            answers.push({correct: false,user:user});
        }

        document.getElementById("intext2").value = "";

        n1= Math.floor(Math.random()*10+1);
        n2= Math.floor(Math.random()*10+1);

        document.getElementById("intext").value=n1;
        document.getElementById("intext1").value=n2;

        op = operators[Math.floor(Math.random()*4)];
        document.getElementById("op").innerHTML=op;

        switch(op){
            case '+' : adds= n1 + n2;
            allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
            break;            
            case '-' : adds= n1-n2;
            allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
            break;
            case '*' : adds=n1*n2;
            allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
            break;
            case '/' : adds=n1/n2;
            allvalues.push({n1: n1, n2: n2,op:op,add:adds.toFixed()});
            break;
        }
    }else{
        answers.push({correct: false,user:user});
        console.log("your test completed");
        document.getElementById("constant2").style.visibility="hidden";
        document.getElementById("constant3").style.visibility="visible";
        document.getElementById("score").innerHTML=countCorrect;
        
    }
}
function answerList(){  
    document.getElementById("restart").style.visibility="visible";   
    console.log(allvalues,answers);
    let final= document.getElementById('ALL');
    let head = document.getElementById('head');

    var html="";
    var html1="";
    
    allvalues.forEach((items,index) => {
       html+=(++index)+")"+" "+"value Of "+items.n1+items.op+items.n2+""+'= '+items.add+"<br>"
    });
    
    answers.forEach((items)=>{
        html1+="!! your answer "+" "+items.correct+"<br>";
    })
    final.innerHTML=html;
    head.innerHTML=html1;
}
function restart(){
    location.reload();
}


