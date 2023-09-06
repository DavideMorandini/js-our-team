/*  Consegna:
    Stampare in pagina i membri del team:
    
    -   Creare un ARRAY di OGGETTI all'interno del quale inserire TUTTE le informazioni inerenti ai singoli membri del team

    -   Ogni membro del team è caratterizzato dalle seguenti informazioni:  -   nome
                            -   cognome
                            -   ruolo 
                            -   foto
*/

// Dichiaro/creo una variabile e aggancio l'elemento HTML nel documento
const mainContainer = document.getElementById("main-container");

// Creo una variabile per poter salvare come valore l'array di oggetti con tutte le informazioni inerenti ai singoli membri del team
const ourTeam = [
    {
        name: "Wayne",
        surname: "Barnett",
        mansion: "Founder & CEO",
        photo: "./assets/img/wayne-barnett-founder-ceo.jpg" 
    },
    {
        name: "Angela",
        surname: "Caroll",
        mansion: "Chief Editor",
        photo: "./assets/img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        surname: "Gordon",
        mansion: "Office Manager",
        photo: "./assets/img/walter-gordon-office-manager.jpg" 
    },
    {
        name: "Angela",
        surname: "Lopez",
        mansion: "Social Media Manager",
        photo: "./assets/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        surname: "Estrada",
        mansion: "Developer",
        photo: "./assets/img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        mansion: "Graphic Designer",
        photo: "./assets/img/barbara-ramos-graphic-designer.jpg"
    }
];

// Creo/dichiaro una funzione per effettuare la manipolazione del DOM
let listsOfMembers = generateMember();
function generateMember () {
   
    // Creo un ciclo per scorrere/ciclare le informazioni ed effetture la manipolazione del DOM
    for(let i = 0; i < ourTeam.length; i++) {
       
        let teamMemberCard = document.createElement("div");
        teamMemberCard.classList.add("card");
        mainContainer.append(teamMemberCard)   
       
        let teamMemberPhoto = document.createElement("img");
        teamMemberPhoto.src = ourTeam[i].photo;
        teamMemberPhoto.classList.add("card-picture");
        teamMemberPhoto.classList.add("member-photo")

        let teamMemberName = document.createElement("h5");
        teamMemberName.textContent = `${ourTeam[i].name} ${ourTeam[i].surname}`
        teamMemberName.classList.add("member-name")

        let teamMemberMansion = document.createElement("p");
        teamMemberMansion.textContent = ourTeam[i].mansion;
        teamMemberMansion.classList.add("mansion")  

        // Inserisco all'interno del div le informazioni inerenti ai membri del team
        teamMemberCard.append(teamMemberPhoto, teamMemberName, teamMemberMansion);
    }
}



