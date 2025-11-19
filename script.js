let rangeSlider = document.getElementById("rangeSlider");
let valueSlider = document.getElementById("valueSlider");
let passwordDisplay = document.getElementById("passwordDisplay");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyPass");

// To show slider Value
valueSlider.textContent = rangeSlider.value;
rangeSlider.addEventListener("input" , () => {
    valueSlider.textContent = rangeSlider.value;
});

genBtn.addEventListener('click', () => {
    passwordDisplay.value = generatePassword();
});

let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let syms = "~!@#$%^&*";



function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show-toast');

    setTimeout(() => {
        toast.classList.remove('show-toast');
    }, 5000); // Hide the toast after 3 seconds
}


// Generate Password Function
function generatePassword() {
    let genPass = "";
    let allchars = "";

    // Build the character set based on user selection
    allchars += uppercase.checked ? upperchar : "";
    allchars += lowercase.checked ? lowerchar : "";
    allchars += numbers.checked ? nums : "";
    allchars += symbols.checked ? syms : "";

    // If no character set is selected, return empty password
    if (allchars == "") {
        showToast();
        return genPass;
    }

    // Generate a password with the specified length
    let i = 1;
    while (i <= rangeSlider.value) {
        genPass += allchars.charAt(Math.floor(Math.random() * allchars.length));  // Append the random character to genPass
        i++;
    }

    return genPass;
}

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value != ""){
        navigator.clipboard.writeText(passwordDisplay.value);
        copyBtn.innerText = "check";
        copyBtn.title = "Password Copied";

        setTimeout(() => {
            copyBtn.innerHTML= "content_copy";
            copyBtn.title = "";
        }, 3000);
    }
});

