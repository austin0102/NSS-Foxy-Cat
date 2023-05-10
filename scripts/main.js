fetch("https://randomfox.ca/floof/")
  .then((response) => response.json())
  .then((convertedData) => {
    const randomImg = document.querySelector("#fox");
    randomImg.src = convertedData.image;
  });


const getTheCat = async () => {
   const response = await fetch("http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false")
   const convertedData = await response.json()
   const catImg =document.querySelector("#cat")
   catImg.src = convertedData[0]
}
getTheCat()