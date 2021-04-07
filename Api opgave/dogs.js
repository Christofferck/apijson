function get_random_dog_image(){

  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}

function display_image(image_url){
  document.getElementById("image").src = image_url;
}

function get_random_dog_fact(){
    url1 = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";

    fetch(url1)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      txt(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });

}
function txt(txt){
    document.getElementById("text").src = text
  }