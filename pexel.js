fetch("https://api.pexels.com/v1/search?query=nature",{
    method: "GET",
    headers:{
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

