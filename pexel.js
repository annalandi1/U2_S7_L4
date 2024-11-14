const imgQ = "https://api.pexels.com/v1/search?query=nature"
const secImg = "https://api.pexels.com/v1/search?query=landscapes"

const loadImg = document.getElementById("load-img")
const loadSecImg = document.getElementById("load-sec-img")

loadImg.addEventListener("click", function(){
  
    console.log("ho caricato le immagini?")
    fetch(imgQ,{
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
    .then((data) => {
        console.log(data)
        let images= document.getElementsByClassName("cart-img-top")
          
        const imgArr = Array.from(images)
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].setAttribute("src", ` ${data.photos[i].src.medium}`)
            }
    })
    .catch((error) => {
        console.log("error", error)
    })
})

loadSecImg.addEventListener("click", function(){
  
    console.log("ho caricato le immagini?")
    fetch(secImg,{
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
     .then((data) => {
        console.log(data)
        let images= document.getElementsByClassName("cart-img-top")
          
        const imgArr = Array.from(images)
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].setAttribute("src", ` ${data.photos[i].src.medium}`)
            }
    })
    .catch((error) => {
        console.log("error", error)
    })
})


