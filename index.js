 const container = document.querySelector("#box");
   container.animate([
        {transform: "translate(-1000px, 0)"},
        {transform: "translate(1300px, 0)"},
    ],{
        duration: 30000,
        iterations: Infinity,
    });

   const container2 = document.querySelector("#box2");
   container2.animate([
        {transform: "translate(-1000px, 0)"},
        {transform: "translate(120vw, -250px)"},
        

    ],{
        duration: 40000,
        iterations: Infinity,
    })

const container3 = document.querySelector("#box3");
   container3.animate([
        {transform: "translate(-2000px, 0)"},
        {transform: "translate(1500px, -30px)"},
        

    ],{
        duration: 50000,
        iterations: Infinity,
    })
