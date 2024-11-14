const img = "https://api.pexels.com/v1/search?query=nature"
const secImg = "https://api.pexels.com/v1/search?query=landscapes"

const loadImg = document.getElementById("load-img")
const loadSecImg = document.getElementById("load-sec-img")

loadImg.addEventListener("click", function(){
  
    console.log("ho caricato le immagini?")
    fetch(img,{
         method: "GET",
         headers:{
            "Content-Type": "application/json"
             "Authorization": "KSFyYnaPgQBIXjoVAY2L1vPFUz7MEWfDcwVuyYMQsAKa501vYnSyuMmE"
            }
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
         throw new Error("Errore nel recupero dei dati")
        }
     })
    .then((images) => {
        let imgArray= document.querySelectorAll("img")

    }

    )
})



