let SelecTheme = document.getElementById("theme")
const tela = document.getElementById("tela")
const allowedKeys = ["/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", " "]
const root = document.querySelector(":root")

function calculate(){
    const result = eval(tela.innerText)
    tela.innerText = result
}

document.querySelectorAll(".charKey").forEach(function(charKeybnt){
    charKeybnt.addEventListener("click", function(){
        const valor = charKeybnt.dataset.value
        tela.innerText += valor
    })
})

document.getElementById("clear").addEventListener("click", function(){
    tela.innerText = tela.innerText.slice(0, -1)
})
   
addEventListener("keydown", function(ev){
    if (allowedKeys.includes(ev.key)) {
      tela.innerText += ev.key
    }
    if(ev.key === 'Backspace'){
        tela.innerText = tela.innerText.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
})

document.getElementById("reset").addEventListener("click", function(){
    tela.innerText = " "
})

document.getElementById("equal").addEventListener("click",calculate)

document.getElementById("theme").addEventListener("input",function(){
    if(SelecTheme.value == 1){
     root.style.setProperty("--mainBackground", "hsl(222, 26%, 31%)")
     root.style.setProperty("--textColor","hsl(0, 0%, 100%)")
     root.style.setProperty("--DisplayColor","hsl(224, 36%, 15%)")
     root.style.setProperty("--KeyColor","hsl(223, 31%, 20%)")
     root.style.setProperty("--equal","hsl(6, 63%, 50%)")
     root.style.setProperty("--reset","hsl(225, 21%, 49%)")
     root.style.setProperty("--BackgroundKey","hsl(30, 25%, 89%)")
     root.style.setProperty("--fontButton", "hsl(221, 14%, 31%)")
     root.style.setProperty("--textResetColor","hsl(0, 0%, 100%)")
     root.style.setProperty("--textEqual","hsl(0, 0%, 100%)")
     root.style.setProperty("--buttonShadow","hsl(28, 16%, 65%)")
     root.style.setProperty("--resetShadow","hsl(224, 28%, 35%)")
     root.style.setProperty("--equalShadow","hsl(6, 70%, 34%)")
    }
    
    if(SelecTheme.value == 2){
        root.style.setProperty("--mainBackground", "hsl(0, 0%, 90%)")
        root.style.setProperty("--textColor","hsl(60, 10%, 19%)")
        root.style.setProperty("--DisplayColor","hsl(0, 0%, 93%)")
        root.style.setProperty("--KeyColor","hsl(0, 5%, 81%)")
        root.style.setProperty("--equal","hsl(25, 98%, 40%)")
        root.style.setProperty("--reset","hsl(185, 42%, 37%)")
        root.style.setProperty("--BackgroundKey","hsl(45, 7%, 89%)")
        root.style.setProperty("--fontButton", "hsl(221, 14%, 31%)")
        root.style.setProperty("--textResetColor","hsl(0, 0%, 100%)")
        root.style.setProperty("--textEqual","hsl(0, 0%, 100%)")
        root.style.setProperty("--buttonShadow","hsl(35, 11%, 61%)")
        root.style.setProperty("--resetShadow","hsl(185, 58%, 25%)")
        root.style.setProperty("--equalShadow","hsl(25, 99%, 27%)")
    }

    if(SelecTheme.value == 3){
        root.style.setProperty("--mainBackground", "hsl(268, 75%, 9%)")
        root.style.setProperty("--textColor","hsl(52, 100%, 62%)")
        root.style.setProperty("--DisplayColor","hsl(268, 71%, 12%)")
        root.style.setProperty("--KeyColor","hsl(268, 71%, 12%)")
        root.style.setProperty("--equal","hsl(176, 100%, 44%)")
        root.style.setProperty("--reset","hsl(281, 89%, 26%)")
        root.style.setProperty("--BackgroundKey","hsl(268, 47%, 21%)")
        root.style.setProperty("--fontButton", "hsl(52, 100%, 62%)")
        root.style.setProperty("--textResetColor","hsl(0, 0%, 100%)")
        root.style.setProperty("--textEqual"," hsl(198, 20%, 13%)")
        root.style.setProperty("--buttonShadow","hsl(290, 70%, 36%)")
        root.style.setProperty("--resetShadow","hsl(285, 91%, 52%)")
        root.style.setProperty("--equalShadow","hsl(177, 92%, 70%)")
    }
})

