const quoteBtn = document.getElementById('QB');
const proverbe = document.getElementById('karinM');
const author = document.getElementById('auteur');
const commentaire = document.getElementById('commentaire');
const center = document.querySelector(".center");

function getQuote (){

    const quotes = [
        {
            quote: "Citili banda bor, kwaari si diya ",
            commentaire:"La sécheresse ne peut pas atteindre une personne derrière un tas de mil.",
            auteur : " -- proverbe SONGHOÏ ZARMA " ,
            image:'image/janv.jpg'
          
        },
        {
            quote: "Ǝhulel /wər/t-/yəggir/ǎẓaẓa/was/wər/ əfreg/,yəglu/dər/-əs ",
            commentaire:"on ne peut pas poser sur l’ânon une charge qu’il ne peut pas supporter. ",
            auteur :" --proverbe TAMAJAQ ",
            image: "image/G.png"

        },
        {
            quote: "Laamu to laamiiɗo woni. Laamu walla sukaaɓe e mawɓe ",
            commentaire:"les autorités détiennent le pouvoir.Elles doivent aider aussi bien les grands que les petits.",
            auteur :" -- proverbe FULFULDÉ ",
            image: "image/mars.jpg"

        },
        {
            quote:" Ɗa na kowa ne ",
            commentaire:" l’enfant appartient à tous.",
            auteur :" -- proverbe HAUSA ",
            image: 'image/avril.jpg'

        },
        {
            quote: "التربية الجيدة أفضل من الميراث الجيد",
            commentaire:"Une bonne education vaut mieux qu'un bon heritage.",
            auteur :" -- proverbe ARABE ",
            image:"image/mai.jpg"
        },
        {
            quote:"Bǎrar /alel/, wər /əla /abǎkkaḍ ",
            commentaire:" l’enfant est comme un papillon,il est un être fragile et innocent.",
            auteur :" -- proverbe TAMAJAQ ",
            image:"image/juin.jpg"
        },
        {
            quote: "Biga ya nidi ki nu ki ba firi ki je leni a nikpela ",
            commentaire:" si un enfant se lave la main, il peut manger avec les adultes.",
            auteur :" -- proverbe GULMANCÉMA ",
            image:"image/juillet.jpg"
        },
        {   
            quote: "Curayze kulu nga fiti boriyan no a ga bay ",
            commentaire:"tout oiseau ne connait que la beauté de son nid.",
            auteur :" -- proverbe SONGHOÏ ZARMA ",
            image:"image/aaa.jpg"
        },
        {
            quote: "التربية الجيدة أفضل من الميراث الجيد ",
            commentaire:"une bonne éducation vaut mieux qu'un bon héritage.",
            auteur :" -- proverbe ARABE ",
            image:"image/septembre.jpg"
        },
        {
            quote: "Yua n nua n fundi yua n goa ",
            commentaire:"Que celui qui est éveillé réveille celui qui dort..",
            auteur :"-- proverbe GULMANCÉMA ",
            image:"image/octobre.png"
        },
        {
            quote: "Riƙo shi ka maganin ɗan tsuntsu ",
            commentaire:"le soutien est le remède du fils de l’oiseau.",
            auteur :" -- proverbe HAUSA ",
            image:"image/Novenbre.jpg"
        }
    ];

    let arondi = Math.floor(Math.random()*quotes.length);

    proverbe.innerHTML = quotes[arondi].quote;
    author.innerHTML = quotes[arondi].auteur;
    commentaire.innerHTML = quotes[arondi].commentaire;
    center.style.backgroundImage= `url(${quotes[arondi].image}`;
    center.style.backgroundSize=`cover`
    
    console.log(boddy.style.backgroundImage);
}


quoteBtn.addEventListener('click',getQuote);
