const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');


// With arrow function
// btn.addEventListener('click', () => {
//     btn.classList.toggle('open');
//     nav.classList.toggle('flex');
//     nav.classList.toggle('hidden');

//     console.log("Hey");
// })


// With anonymous or nameless function 
btn.addEventListener("click", function () {
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");

    // console.log("Hey, I got clicked!")
});