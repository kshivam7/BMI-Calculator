let submit = document.getElementById('btn');


submit.addEventListener("click", ()=>{
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let sol = w / (h /100 * h / 100);
    let total = sol.toFixed(2);
    let status;
    if(total <=18.5){status = " UNDERWEIGHT "}
    else if(total>18.5 && total<=24.9){
        status=" HEALTHY ";
    }
    else if(total>=25.0 && total<=29.9){status = " OVERWEIGHT "}
    else{status=" OBESE "}
    document.getElementById("result").innerHTML ="Your BMI is " + total+status;
    console.log(total);
})