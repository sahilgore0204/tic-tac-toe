let turn="X";
let cells=9;
let noOfMatches=0;
let r1="   ",r2="   ",r3="   ";
let c1="   ",c2="   ",c3="   ";
let d1="   ",d2="   ";

String.prototype.replaceAt=function (ind,replace){
  return this.substring(0,ind)+replace+this.substring(ind+replace.length);
}


function fill(td){
  let className=td.classList[0];
  console.log(className);
  if(className==="f1"){
    r1=r1.replaceAt(0,turn);
    c1=c1.replaceAt(0,turn);
    d1=d1.replaceAt(0,turn);
  }
  else if(className==='f2'){
    r1=r1.replaceAt(1,turn);
    c2=c2.replaceAt(0,turn);
  }
  else if(className==='f3'){
    r1=r1.replaceAt(2,turn);
    c3=c3.replaceAt(0,turn);
    d2=d2.replaceAt(0,turn);
  }
  else if(className==='s1'){
    r2=r2.replaceAt(0,turn);
    c1=c1.replaceAt(1,turn);
  }
  else if(className==='s2'){
    r2=r2.replaceAt(1,turn);
    c2=c2.replaceAt(1,turn);
    d1=d1.replaceAt(1,turn);
    d2=d2.replaceAt(1,turn);
  }
  else if(className==='s3'){
    r2=r2.replaceAt(2,turn);
    c3=c3.replaceAt(1,turn);
  }
  else if(className==='t1'){
    r3=r3.replaceAt(0,turn);
    //console.log(r3);
    c1=c1.replaceAt(2,turn);
    d2=d2.replaceAt(2,turn);
  }
  else if(className==='t2'){
    r3=r3.replaceAt(1,turn);
    c2=c2.replaceAt(2,turn);
  }
  else{
    r3=r3.replaceAt(2,turn);
    c3=c3.replaceAt(2,turn);
    d1=d1.replaceAt(2,turn);
  }
}


function clear(){
  cells=9;
  document.querySelectorAll("td").forEach(td=>{
    td.innerText="";
  });
  if(noOfMatches%2==0)
  turn="X";
  else
  turn="O";
  r1="   ";
  r2="   ";
  r3="   ";
  c1="   ";
  c2="   ";
  c3="   ";
  d1="   ";
  d2="   ";
}

function winner(){
  if(r1==="XXX" || r1==="OOO" || r2==="XXX" || r2==="OOO" || r3==="XXX" || r3==="OOO" || c1==="XXX" || c1==="OOO" || c2==="XXX" || c2==="OOO" || c3==="XXX" || c3==="OOO" || d1==="XXX" || d1==="OOO" || d2==="XXX" || d2==="OOO"){
    
    return true;
  }
  return false;
}

document.querySelectorAll("td").forEach(td=>{
  td.addEventListener("click",()=>{
    if(td.innerText==="X" || td.innerText==="O")
    return;
    td.innerText=turn;
    fill(td);
    if(winner()){
      noOfMatches++;
      if(turn==='X'){
        let x=Number(String(document.querySelector(".p1").innerText));
        console.log(x);
        x++;
        setTimeout(()=>{
          alert("player-1 won!!!");
          document.querySelector(".p1").innerText=x;
          clear();
        },500);
      }
      else{
        let x=Number(String(document.querySelector(".p2").innerText));
        x++;
        setTimeout(()=>{
          alert("player-2 won!!!");
          document.querySelector(".p2").innerText=x;
          clear();
        },500);
      }
    }
    else if(cells===1){
      noOfMatches++;
      let x=Number(document.querySelector(".t").innerText);
      x++;
      setTimeout(()=>{
        alert("Match tied!!!");
        document.querySelector(".t").innerText=x;
        clear();
      },500);
    }
    else{
      cells--
      if(turn==='X')
      turn="O";
      else
      turn="X";
    }
  })
})