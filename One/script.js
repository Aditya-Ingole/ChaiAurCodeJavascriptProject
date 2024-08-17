let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body");


buttons.forEach( function (button) {
    // console.log(button)
    button.addEventListener('click', function(e){
        console.log(e.target)

        if(e.target.id === "gold"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "pink"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
    })
})
