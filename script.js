let but1=document.querySelector('#mybtn1');
        let but2=document.querySelector('#mybtn2');
        let copydiv=document.querySelector(".copyCode");
       const handle1 = () => {
    let myhax = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myhax[Math.floor(Math.random() * 16)];
    }
    console.log(colors); 
    document.getElementById('mybtn1').innerText = colors;

    // Use template literals and valid hex colors
    document.body.style.backgroundImage = `linear-gradient(to right, ${colors}, #fbd1d0)`;
     copydiv.innerHTML=`background-image: linear-gradient(to right, ${colors}, #fbd1d0)`;
    
};

 const handle2 = () => {
    let myhax = "0123456789abcdef";  // Use const for constants
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myhax[Math.floor(Math.random() * 16)];
    }
    console.log(colors);
    document.getElementById('mybtn2').innerText=colors;  // Logs a random hex color like #a3f9b2
    document.body.style.backgroundImage = `linear-gradient(to right, #4bc547, ${colors})`;
    copydiv.innerHTML=`background-image: linear-gradient(to right, #4bc547, ${colors})`;
    
    
};

        but1.addEventListener('click',handle1);
        but2.addEventListener('click',handle2);