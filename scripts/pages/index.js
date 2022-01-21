var url = "../data/photographers.json";
const photographers =[];
let name ="";
let id = "";
let picture = "";
let city = "";
let country = "";
let tagline = "";
let price = "";

                //ligne 19 et ligne 44 et 45 de base
                async function getPhotographers() {
                    //Je récupère les données data via une requête
                    const requete = new Request(url);

                    fetch(requete)
                    .then(response => response.json())
                    
                    .then(data => {
                        nom = data.photographers.name;
                        picture = data.photographers.portrait;
                        id = data.photographers.id;
                        city = data.photographers.city;
                        country = data.photographers.country;
                        tagline = data.photographers.tagline;
                        price = data.photographers.price;

                        // J'insère les données dans le tableau vide " Photographers "
                        photographers.push(data);
                    })
                    // Je vérifie si il y a une erreur, si oui, une erreur s'affiche sur la console
                    .catch(console.error);

                    // et bien retourner le tableau photographers seulement une fois 
                    // Ici je ne comprends pas la ligne 36 et 37, c'était fourni dans le code forké
                    return ({
                        photographers: [...photographers, ...photographers, ...photographers]})
                }


            //Code de base ligne 49 à 66
                async function displayData(photographers) {
                    const photographersSection = document.querySelector(".photographer_section");
            
                    //Pour chaque élément du tableau Photographers, on donne pour nom à l'élément " photographer "
                    photographers.forEach((photographer) => {
                        //Ici je ne comprends pas ce que fais PhotographerFactory
                        const photographerModel = photographerFactory(photographer);
                        const userCardDOM = photographerModel.getUserCardDOM();
                        photographersSection.appendChild(userCardDOM);
                    });
                };
            
                async function init() {
                    // Récupère les datas des photographes
                    const { photographers } = await getPhotographers();
                    displayData(photographers);
                };
                
                init();



                /* Code dd base fourni pour le P6
                
                
                
                async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();

 */