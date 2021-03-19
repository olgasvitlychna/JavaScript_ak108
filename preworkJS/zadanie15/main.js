let paragraph = document.getElementById('text')
let buttonDodaj = document.getElementById('dodaj')
let buttonUsun = document.getElementById('usun')
buttonDodaj.onclick = function(){
    paragraph.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur assumenda in libero voluptatem molestias id atque repudiandae facere ab sint vero voluptas minus minima dolore, praesentium aliquid eligendi quaerat?"
}
buttonUsun.onclick = function(){
    paragraph.textContent = ""
}