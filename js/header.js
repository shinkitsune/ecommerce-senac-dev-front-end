$(document).ready(function() {
    $("#form-search").submit(function(e) {
        e.preventDefault();
        const search = $("#input-search").val();
        const cards = $(".card");

        cards.each(function(index, element) {
            const elemento = $(this);
            if (!elemento.text().includes(search)) {
                elemento.fadeOut();
            }
        });
    })
})

function carregarHeader() {
    /*  $.ajax({
        url: "/header.html",
        method: "GET",
        sucess: function(results) {
            $("#header").html(results);
        }
    });
*/
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#header").innerHTML = this.responseText;
            $("header").html(this.response);
        }
    };
    xhttp.open("GET", "/header.html", true);
    xhttp.send();


}

carregarHeader();