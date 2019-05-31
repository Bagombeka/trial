
var number=document.querySelectorAll(".btn");

for(let i=0;i<number.length;i++){

    if(number[i].value==1){

        number[i].onclick= () => document.getElementById('result').value += 1;
    }else

       if(number[i].value==2){

        number[i].onclick= () => document.getElementById('result').value += 2;
    }else

       if(number[i].value==3){

        number[i].onclick= () => document.getElementById('result').value += 3;
    }else

    if(number[i].value==4){

        number[i].onclick= () => document.getElementById('result').value += 4;
    }else

      if(number[i].value==5){

        number[i].onclick= () => document.getElementById('result').value += 5;
    }else

      if(number[i].value==6){

        number[i].onclick= () => document.getElementById('result').value += 6;
    }else

      if(number[i].value==7){

        number[i].onclick= () => document.getElementById('result').value += 7;
    }else

       if(number[i].value==8){

        number[i].onclick= () => document.getElementById('result').value += 9;
    }else

       if(number[i].value==9){

        number[i].onclick= () => document.getElementById('result').value += 1;
    }else

        if(number[i].value==0){

        number[i].onclick= () => document.getElementById('result').value += 0;
    }else

       if(number[i].value== '+'){

        number[i].onclick= () => document.getElementById('result').value += '+';
    }else

       if(number[i].value== '-'){

        number[i].onclick= () => document.getElementById('result').value += '-';
    }else

       if(number[i].value=='/'){

        number[i].onclick= () => document.getElementById('result').value += '/';
    }else

       if(number[i].value=='*'){

        number[i].onclick= () => document.getElementById('result').value += '*';
    }
      


    }



    let a =document.getElementById("btnequals").onclick=()=>{

        let answ=document.getElementById("result").value;

        let res=eval(answ);
        document.getElementById('result').value=res;
    }

    let bck=document.getElementById("btnbck").onclick=()=>{

        let val=[document.getElementById("result").value];

        for(let i=0;i<val.length;i--){

            document.getElementById('result').value=val[val.length-1];

             
        }
    }



