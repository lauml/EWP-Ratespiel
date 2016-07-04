// Erstelle eine Zufallszahl zwischen 1 und 100. Hier nichts aendern
let randomNumber = Math.floor(Math.random() * 100 + 1);



	$("#game").css("background-color", "#2198C1");

// TODO 1: Initalisieren Sie nach dieser Zeile eine Variable für die Versuchsanzahl.

var versuchsanzahl = 7;
$("#versuchsanzahl").text(versuchsanzahl);


/**
 * TODO 2: Erstellen Sie ein on-Click-Event für den Start-Button.
 * TODO 3: Setzen Sie den Versuchszähler auf 7 zurück (vergessen Sie dabei die Versuchsvariable nicht!).
 * TODO 4: Leeren Sie das Resultatsfeld.
 */

$("button#start").on("click", function (){
		versuchsanzahl = 7;
		$(".versuch").removeClass("versuchweg").addClass("versuchda")
		$("#user-input").val("");
		$("#resultat").text("");
		$("#resultat").removeClass("verloren gewonnen");
});

/**
 * TODO 5: Erstellen Sie ein on-Click-Event für den Check-Button
 * TODO 6: Lesen Sie den User-Input in eine Variable ein. Nutzen Sie zum auslesen folgende Codezeile (nach dem Sternchen):
 * $("#user-input").val();
 *
 * TODO 7: Überprüfen Sie die verschiedenen Bedindungen, die eintreten können. Geben entsprechende Nachrichten
 * und manipulieren Sie die Versuchszählervariable und das dazugehörige Feld dementsprechend.
 *
 * TODO 8: Sollte der Wert der Versuchszählervariable auf 0 fallen, geben Sie eine Nachricht aus, dass der Spieler verloren hat.
 */



$("button#check").on("click", function(){

	let y = $("#user-input").val();

		if (y < randomNumber) {
				versuchsanzahl = versuchsanzahl-1;
				$("#resultat").text("Du musst höher raten!");
				$("#resultat").addClass("falsch");
		}
		else if (y > randomNumber) {
			versuchsanzahl = versuchsanzahl-1;
			$("#resultat").text("Du musst niedriger raten!");
			$("#resultat").addClass("falsch");
		}
		else if (y == randomNumber) {
			$("#resultat").text("RICHTIIIIIG!! Du hast gewonnen! Um nochmal zu spielen, klicke auf Start.");
			$("#resultat").addClass("richtig").removeClass("falsch");
		}

		else {
			$("#resultat").text("Come on! Du sollst eine Zahl zwischen 1 und 100 eingeben, keine Gleichungen oder ähnliches");
			$("#resultat").addClass("falsch");
		}

		if (versuchsanzahl <= 0){
			$("#resultat").text("Du hast verloren! Um es nochmal zu versuchen, klicke auf start.");
			$("#resultat").addClass("verloren");

			}

		if (versuchsanzahl == 6) {
		$("#versuch1").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 5) {
		$("#versuch2").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 4) {
		$("#versuch3").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 3) {
		$("#versuch4").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 2) {
		$("#versuch5").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 1) {
		$("#versuch6").addClass("versuchweg").removeClass("versuchda");
		}
		if (versuchsanzahl == 0) {
		$("#versuch7").addClass("versuchweg").removeClass("versuchda");
		}

		
});

