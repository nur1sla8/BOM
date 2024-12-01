const timeElement = document.getElementById('time')
const bgColorSelect = document.getElementById('bgColor');
const setBgColorButton = document.getElementById('setBgColor');
const showURLButton = document.getElementById('showUrl');
const infoelement = document.getElementById('info');

setInterval(()=>{
    timeElement.textContent = `${new Date().toLocaleTimeString()}`;
}, 1000);
//time
setBgColorButton.addEventListener('click', ()=>{
    let selectedColor = bgColorSelect.value;
    document.body.style.backgroundColor = selectedColor;
})
//url
showURLButton.addEventListener('click', ()=>{
    infoelement.innerHTML += `<p>${window.location.href}</p>`
})
//размер
function updateInfo(){
    infoelement.innerHTML = `<p>${screen.width}px x ${screen.height}px</p>`;
}
updateInfo();
console.log(updateInfo);

