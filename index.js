
const options = document.querySelectorAll(".option");
const submit = document.querySelector("#submit");
const rating = document.querySelector("#rating");
const ratingCard = document.querySelector("#rating-card");
const confirmCard = document.querySelector("#confirmation-card");

let ratingValue;


// selecting rating
for(let option of options) {
    option.addEventListener("click", () => {
        
        options.forEach(option => option.classList.remove("active"));
        option.classList.add("active");

        ratingValue = option.value;
    })
};

// submitting rating
submit.addEventListener("click", () => {

    rating.innerText = ratingValue;

    if(ratingValue) {
        ratingCard.style.opacity = "0";
        ratingCard.style.zIndex = "0";
        confirmCard.style.opacity = "1";
        confirmCard.style.zIndex = "1";
    } else {
        alert("Please select a rating!")
    }

});