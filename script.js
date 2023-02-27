var content = document.getElementById("content");

for (var m in Mulher) {

  content.innerHTML +=

    '<div class="card">' +

    '<img src="' +

    Mulher[m].imagem +

    '"/>' +

    "<details>" +

    "<summary>" +

    Mulher[m].nome +

    "</summary>" +

    "<p>" +

    Mulher[m].descricao +

    "</p>" +

    "<blockquote><q>" +

    Mulher[m].citacao +

    "</q></blockquote>" +

    "</details></div>";

}