const elenco = document.querySelector(".lista");


for (let elemento = 1; elemento <= 100; elemento++){
    if (elemento % 15 == 0){
        const lista = `<li class="box fizzbuzz">fizzbuzz</li>`;
        elenco.innerHTML += lista;
    }else if (elemento % 5 == 0){
        const lista = `<li class="box buzz">buzz</li>`;
        elenco.innerHTML += lista;
    }else if (elemento % 3 == 0){
        const lista = `<li class="box fizz">fizz</li>`;
        elenco.innerHTML += lista;
    }else {
        const lista = `<li class="box numero">${elemento}</li>`;
        elenco.innerHTML += lista;
    }
}

