

let InputText = document.querySelector('#input-text')
let AddBtn = document.querySelector('#input-add-list')
let ClearBtn = document.querySelector('#input-clear')
let OutList = document.querySelector('#out-list')

AddBtn.addEventListener('click',()=>{
     let header = document.createElement('h5');
     header.classList.add('header-tyle')
     OutList.appendChild(header)
     header.innerHTML=InputText.value;
     InputText.value =' '
     header.addEventListener('click',()=>{
          header.style.textDecoration = 'line-through'
          header.style.backgroundColor = 'red'
     })
     header.addEventListener('dblclick',()=>{
          OutList.removeChild(header);
     })
     ClearBtn.addEventListener('click',()=>{
          /* OutList.removeChild(header); */
          header.remove();
     })
})