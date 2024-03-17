var button = document.querySelector("#envoyer")
var mois =document.querySelector("#mois")
var jour = document.querySelector("#jour")
var annee = document.querySelector("#annee")
var afficheannee = document.querySelector("#nbrannees")
var affichmois = document.querySelector("#nbrmois")
var affichjours = document.querySelector("#nbrjours")
var labels = document.querySelectorAll("#label")
var textsError = document.querySelectorAll("#textErrorVide")
var invalideDate = document.querySelectorAll("#textErrorInvalide")
button.addEventListener("click", function(e)
{
    e.preventDefault()
    if( jour.value === "" || mois.value === "" || annee.value === "" )
        {
            jour.className ="error"
            mois.className ="error"
            annee.className ="error"
            for (label of labels)
            {
                label.className = "textError"
            }
            for (textError of textsError) 
            {
                textError.removeAttribute("hidden")
            }
            
                
        }
        else if(jour.value <0 || jour.value>31 || (mois.value <0 || mois.value>12)
                ||(mois.value == 2 ||  jour.value>27||jour.value <0) || (annee.value>new Date().getFullYear()))
            {
                jour.className ="error"
                mois.className ="error"
                annee.className ="error"
                for (let i = 0 ; i< invalideDate.length;i++)
                {
                    invalideDate[i].removeAttribute("hidden")
                }

            }
        else
            { 
                var anneeactu =new Date().getFullYear()
                var jouractu=new Date().getDay()
                var moisactu = new Date().getMonth()
                var nbrannee =anneeactu - annee.value  
                
                afficheannee.textContent = nbrannee
                var nbrmois = 0
                if (mois.value> moisactu )
                {
                    nbrmois = 12 -mois.value + moisactu+1
                }
                else
                {
                    nbrmois = moisactu - mois.value +1
                }
                affichmois.textContent =nbrmois
                affichjours.textContent = nbrannee*365
            }
})