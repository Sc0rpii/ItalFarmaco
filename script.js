
const containerALL = document.querySelector('.containerAll')

let url = './Farmaci.json';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();


let ListaF
let index

fetch(url)
    .then(response => response.json())
    .then(() => {
        ListaF = request.response;
        build(ListaF, Object.keys(ListaF).length); 
    });

function build(listaFarmaci, nFarmaci){
    for(index = 0; index < nFarmaci; index++){
        //Creo le card
        const containercard = document.createElement('div');
        containercard.setAttribute("class", "containercard");
        containerALL.appendChild(containercard);

        const containerImg = document.createElement('div');
        containerImg.setAttribute("class", "container-img");
        containercard.appendChild(containerImg);

        const img = document.createElement('img');
        img.src = listaFarmaci[index].img;
        containerImg.appendChild(img);

        const title = document.createElement('div');
        title.setAttribute("class", "title");
        title.textContent = listaFarmaci[index].name;
        containercard.appendChild(title);

        const classefarmaceutica = document.createElement('div');
        classefarmaceutica.setAttribute("class","classe-farmaceutica");
        containercard.appendChild(classefarmaceutica);

        const paragrafo = document.createElement('p');
        paragrafo.textContent = ListaF[index].classeTerapeutica;
        classefarmaceutica.appendChild(paragrafo);

        const divButton = document.createElement('div');
        divButton.setAttribute("class","button");
        containercard.appendChild(divButton);

        const id = ListaF[index].id;
        containercard.setAttribute("id", id);

        const button = document.createElement('button');
        button.textContent = "Read More";
        button.setAttribute("onclick","Change(id.value)");
        divButton.appendChild(button);

    }
}

function Change(ID){
    window.location = "./info.html";
    console.log(ID);
    console.log("Change run");
}