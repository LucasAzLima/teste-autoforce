//1. Adicione um ícone para Youtube no header apontando para
redes = document.getElementsByClassName("header__networks-list")[0]
child =  redes.firstChild
clone = child.cloneNode(true)
clone.children[0].className = "icon icon-youtube-header icon--small icon--hover-youtube"
clone.href = "https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ"
document.getElementsByClassName("header__networks-list")[0].appendChild(clone)

//2. Modifique o comportamento do menu Whatsapp
links = document.getElementsByClassName("header__card-whatsapp-item")
for(i=0; i<links.length; i++) {
  links[i].firstElementChild.removeAttribute('data-phones')
  links[i].onclick = function() {
  link = this.firstElementChild.getAttribute('data-link')
    window.open(link)
  }
  }

//3. Modifique o formulário de "Estou Interessado"

//Select com as opções: SUV, Senda, Hatch e Pickup;
fs = document.getElementsByClassName("form-conversion__body")[0].getElementsByTagName('fieldset')[0]
select =  document.createElement('select')
select.setAttribute('class',"choices__inner")
select.setAttribute('style','outline: none; cursor: pointer;')
dados = ['SUV', 'Senda', 'Hatch', 'Pickup']
dados.forEach(Element => {})
dados.forEach(Element => {option =  document.createElement('select')})

dados.forEach(element =>{
  opt = document.createElement('option');
  opt.textContent = element;
  opt.value = element;
  opt.setAttribute('style','cursor: pointer;')
  select.appendChild(opt)
})
div =  document.createElement('div')
div.appendChild(select)
fs.appendChild(div)

//Textarea com placeholder "Mensagem".

fs = document.getElementsByClassName("form-conversion__body")[0].getElementsByTagName('fieldset')[0]
textarea =  document.createElement('textarea')
textarea.setAttribute('placeholder','Mensagem')
textarea.setAttribute('rows','4')
textarea.setAttribute('style', 'width: 100%; outline: none; margin-top: 5px;')
div =  document.createElement('div')
div.appendChild(textarea)
fs.appendChild(div)

//4. Exiba um modal com o escudo do Palmeiras
divmodal =  document.createElement('div')
divmodal.setAttribute('id','modalinit')
divmodal.setAttribute('class','modalInit')
divmodalcontent =  document.createElement('div')
divmodalcontent.setAttribute('class','modal-content')
spanmodal =  document.createElement('span')
spanmodal.setAttribute('class', 'close-modal')
spanmodal.textContent = "X"
spanmodal.setAttribute('style','cursor: pointer;')
divmodalcontent.appendChild(spanmodal)
imgmodal =  document.createElement('img')
imgmodal.src = "https://www.pngitem.com/pimgs/m/64-647078_logo-palmeiras-png-vector-clipart-psd-simbolo-do.png"
imgmodal.setAttribute('style', "height: 80%; margin: 10% 0px 10% 40px")
divmodalcontent.appendChild(imgmodal)
divmodal.appendChild(divmodalcontent)
document.body.appendChild(divmodal)

modal = document.getElementById("modalinit");
span = document.getElementsByClassName("close-modal")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

css = `.modalInit {
  display: block; 
  position: fixed; 
  z-index: 1000; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #f7f5f5;
  padding: 20px;
  left: 50%;
  top: 50%;
  height: 80%;
  width: 50%;
  display:flex;
  transform: translate(-50%, -50%);
  position: absolute;
}

.close-modal {
  color: #aaaaaa;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  font-size: 28px;
  text-align: center;
}
.close-modal:hover,
.close-modal:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}`
style =  document.createElement('style')
head = document.getElementsByTagName('head')[0];
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
