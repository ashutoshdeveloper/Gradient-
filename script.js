
    let button1=document.getElementById("mybtn1")
    let button2=document.getElementById("mybtn2")
    let colordiv=document.querySelector(".color")
    let rgb1="#fff";
    let rgb2="#fff";
  
    button1.addEventListener('click', ()=>{
        rgb1=colorcode();
        console.log(rgb1)
        document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
        colordiv.textContent=`backgroundImage:linear-gradient(to right,${rgb1},${rgb2})`
        button1.innerText=`${rgb1}`

    })
    button2.addEventListener('click',()=>{
        rgb2=colorcode();
        console.log(rgb2)
        document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
        colordiv.innerHTML=`backgroundImage:linear-gradient(to right,${rgb1},${rgb2})`
        button2.innerText=`${rgb2}`

    })
   
    const colorcode=()=>{
        let myhexvalue="0123456789abcdef"
        let color="#"
        for(let i=0;i<6;i++)
        {
           color= color + myhexvalue[Math.floor(Math.random()*16)]
           
        }
        return color;
    }    
    colordiv.addEventListener('click',()=>{
        navigator.clipboard.writeText(colordiv.innerText);
        alert("ColorCode was copied")
    })
