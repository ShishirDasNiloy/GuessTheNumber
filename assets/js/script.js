let warning = document.getElementById("warning");
let attempt = document.getElementById("attempt");

let ans = Math.floor(Math.random()*1000) + 1;
let count = 0;

function game(){
    let guess = document.getElementById("numin").value;
    if(guess<1 || guess>1000)
    {
        alert("Please enter a number between 1 and 1000");
    }
    else
    {
        count+=1;

        if(guess<ans)
        {
            warning.textContent = "Your guess "+guess+" is too low.😐";
            attempt.textContent = "No. of guesses: " + count;
        }
        else if(guess>ans)
        {
            warning.textContent = "Your guess "+guess+" is too High.🙄";
            attempt.textContent = "No. of guesses: " + count;
        }
        else if(guess==ans)
        {
            warning.textContent = "You Win!!😍😍. The Number is "+ans;
            attempt.textContent = "No. of guesses: " + count;
            document.getElementById("guess").disabled = true;
        }
    }

}
function reset(){
    window.location.reload();
}