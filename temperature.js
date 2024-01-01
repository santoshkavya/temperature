function conTemp() {
    const i=parseFloat(document.getElementById("tempInput").value);
    const from=document.getElementById("from").value;
    const to=document.getElementById("to").value;
    let res=0;
    if (from==="celsius" && to==="fahrenheit")
    {
        res=(i*9/5)+32;
        document.getElementById("res").textContent=Converted Temperature:${res.toFixed(2)}°F;
    } 
    else if(from==="fahrenheit" && to==="celsius") 
    {
        res=(i-32)*5/9;
        document.getElementById("res").textContent=Converted Temperature: ${res.toFixed(2)}°C;
    } 
    else{
        document.getElementById("res").textContent="Please select different units to convert";
    }
}