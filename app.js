
function idioma(){
    var idioma = document.getElementById("idioma").value;
    console.log(idioma);
    if(idioma == "ingles"){
        var titulohamburgesa1 = "burger with salad";
        var descripcionhamburgesa1 = "Enjoy a delicious delicious burger with chicken nugets"
        document.getElementById("titulohamburgesa1").innerText = titulohamburgesa1;
        document.getElementById("descripcionhamburgesa1").innerText = descripcionhamburgesa1;

    }
}