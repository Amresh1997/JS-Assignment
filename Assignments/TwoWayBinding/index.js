var num={};

Object.defineProperty(num,"number",
{
    get: function()
    {
        return value;

    },
    set: function(inpval)
    {
document.getElementById("userInput").value=inpval;
value=inpval;
    }
});

setInterval(()=>{
num.number=Math.floor(Math.random()*100);
},7000);

function changeInput(event)
{
    num.number=event.target.value;
    alert("Typed value is: "+ num.number);
}