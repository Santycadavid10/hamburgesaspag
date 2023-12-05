function idioma(){
    var idioma = document.getElementById("idioma").value;
    switch(idioma){
        case "ingles":
            var titulohamburgesa1 = "burger with salad";
            var descripcionhamburgesa1 = "Enjoy a delicious delicious burger with chicken nugets."
            document.getElementById("titulohamburgesa1").innerText = titulohamburgesa1;
            document.getElementById("descripcionhamburgesa1").innerText = descripcionhamburgesa1;

            var titulohamburgesa2 = "single chicken burger";
            var descripcionhamburgesa2 = "Enjoy our specialty, a super burger full of chicken nuget."
            document.getElementById("titulohamburgesa2").innerText = titulohamburgesa2;
            document.getElementById("descripcionhamburgesa2").innerText = descripcionhamburgesa2;

            var titulohamburgesa3 = "combo 1 hamburger only chicken + fries and soda";
            var descripcionhamburgesa3 = "Enjoy our specialty, a super burger full of chicken nuget with potatoes and soda, enjoy the promo."
            document.getElementById("titulohamburgesa3").innerText = titulohamburgesa3;
            document.getElementById("descripcionhamburgesa3").innerText = descripcionhamburgesa3;

            var titulohamburgesa4 = "super burger nuget sweets";
            var descripcionhamburgesa4 = "Special super chicken nuget burger with sweet salad."
            document.getElementById("titulohamburgesa4").innerText = titulohamburgesa4;
            document.getElementById("descripcionhamburgesa4").innerText = descripcionhamburgesa4;
            break;

        case "español":
            var titulohamburgesa1 = "hamburguesa con ensalada";
            var descripcionhamburgesa1 = "Disfruta de una deliciosa deliciosa hamburgesa echa con nugets de pollo."
            document.getElementById("titulohamburgesa1").innerText = titulohamburgesa1;
            document.getElementById("descripcionhamburgesa1").innerText = descripcionhamburgesa1;

            var titulohamburgesa2 = "hamburguesa solo pollo";
            var descripcionhamburgesa2 = "disfruta de nuestra especialidad una super hamburgesa llena de nuget de pollo."
            document.getElementById("titulohamburgesa2").innerText = titulohamburgesa2;
            document.getElementById("descripcionhamburgesa2").innerText = descripcionhamburgesa2;

            var titulohamburgesa3 = "combo 1 hamburguesa solo pollo + papas y gaseosa";
            var descripcionhamburgesa3 = "disfruta de nuestra especialidad una super hamburgesa llena de nuget de pollo con papas y gaseosa disfruta la promo."
            document.getElementById("titulohamburgesa3").innerText = titulohamburgesa3;
            document.getElementById("descripcionhamburgesa3").innerText = descripcionhamburgesa3;

            var titulohamburgesa4 = "super hamburgesa nuget dulces";
            var descripcionhamburgesa4 = "hamburgesa especial super nuget de pollo con ensalada dulce."
            document.getElementById("titulohamburgesa4").innerText = titulohamburgesa4;
            document.getElementById("descripcionhamburgesa4").innerText = descripcionhamburgesa4;
            break;

    }

}

function color(){
    var color = document.getElementById("color").value;
    switch(color){
        case "oscuro":
            document.getElementById("imagenhamburgesa1").src="./imagenes/hamburguesa-1-rNEGRA.jpg";
            document.getElementById("imagenhamburgesa2").src="./imagenes/hamburguesa-2-removebg-NEGRA.jpg";
            document.getElementById("imagenhamburgesa3").src="imagenes/hamburguesa-3-removebg-NEGRA.jpg";
            document.getElementById("imagenhamburgesa4").src="imagenes/hamburguesa-4-removebg-NEGRA.jpg";
            document.getElementById("imagenhamburgesa4").src="imagenes/hamburguesa-4-removebg-NEGRA.jpg";
            document.body.style.backgroundColor="black";
            break;
    }
}