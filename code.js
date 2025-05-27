let bleep = document.getElementById('bleep');
const form = document.querySelector('form'); 
let hgap = document.getElementsByClassName('hgap'); 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nextGap = '';
    let missingGaps = [];

    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === false) {
            missingGaps.push(item.value); 
        }
    })
    //nextGap = missingGaps[0]
    if (missingGaps[0] === undefined) {
        nextGap = ' '
    } else {
        nextGap = missingGaps[0]; 
    }
    bleep.innerHTML = nextGap
    console.log(missingGaps);
})

/*
const changeOpacity = () => { 
    hgap.style.opacity = 0.5; 
}

hgap.addEventListener('mouseover', changeOpacity); 
*/ 

