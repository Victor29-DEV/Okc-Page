 console.log(dados);
let section = document.querySelector(".resultados-pesquisa")
console.log(section);
let htmlContent = '';

for (let dado of dados) {
    htmlContent += 
    `
     <div class="item-resultado">
                    <h2>
                        <a href="https://www.instagram.com/acfresh21" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `

}
section.innerHTML = htmlContent