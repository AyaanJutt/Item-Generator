document.getElementById('mystery-box').addEventListener('click', items)

let bananaNum=0;
let greenShellNum=0;
let starNum=0;
let gldnMshrmNum=0;
let bulletBillNum=0;
let itemEl= document.getElementById('item')

function items(){
    let randNum=Math.random();

    if(randNum<=0.25){
        console.log('Banana')
        bananaNum++
        document.getElementById('banana').innerHTML=bananaNum;
        itemEl.innerHTML+="<img src='Images/Banana.png'>"
    } else if(randNum<=0.5){
        console.log('GreenShell')
        greenShellNum++
        document.getElementById('greenShell').innerHTML=greenShellNum
        itemEl.innerHTML+="<img src='Images/GreenShell.png'>"
    } else if(randNum<=0.65){
        console.log('star')
        starNum++
        document.getElementById('star').innerHTML=starNum
        itemEl.innerHTML+="<img src='Images/Star.png'>"
    } else if(randNum<=0.8){
        console.log('Golden Mushroom')
        gldnMshrmNum++
        document.getElementById('gldnMshrm').innerHTML=gldnMshrmNum
        itemEl.innerHTML+="<img src='Images/GoldenMushroom.png'>"
    } else {
        console.log('bullet bill')
        bulletBillNum++
        document.getElementById('bulletBill').innerHTML=bulletBillNum
        itemEl.innerHTML+="<img src='Images/BulletBill.png'>"
    }

}