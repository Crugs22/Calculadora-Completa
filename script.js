function insert(num){
    
    var numero = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = numero + num
}

function clean(){
    document.getElementById('screen').innerHTML = ""
}

function back(){
    var screen = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML = screen.substring(0, screen.length -1)
}

function calcular(){
    var screen = document.getElementById('screen').innerHTML
    if(screen){
        document.getElementById('screen').innerHTML = eval (screen)
    }
}