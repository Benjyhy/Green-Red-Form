const animatedForm = () => {
    const arrows = document.querySelectorAll(".fa-arrow-down");
    arrows.forEach(function(arrow){
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && validateUser(input)){
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateUser(input)){
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validateUser(input)){
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.3s ease";
            }

            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
}


const validateUser = (user) => {
    if(user.value.length < 6){
        error("rgb(189,87,87");   
    } else {
          error("rgb(87,189,130");
          return true;
    }
}

const error = (color) => {
    document.body.style.backgroundColor = color;
}

const nextSlide = (parent, nextForm) => {
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
    nextForm.classList.remove("inactive");
}

animatedForm();