window.onload = function(){

  var input = document.querySelector("#country");
  var button = document.querySelector("#lookup");
  var result = document.querySelector("#result");

  button.addEventListener("click", function(e){
    e.preventDefault();

    result.innerHTML = "";
    const formData = new FormData();
    formData.append("country",input.value);
    fetchData(input.value);
  });

  async function fetchData(val){
    if(val==""){
      const response = await fetch("world.php?");
      if(response.ok){
        countries = await response.text();
        console.log("nothing");
        console.log(countries);
        result.innerHTML = countries;
      } else {
        const message = "An error has occured: ${response.status}";
        throw new Error(message);
      }
    } else{
        const response = await fetch("world.php?country="+val);
        if(response.ok){
          countries = await response.text();
          console.log(countries)
          result.innerHTML = countries;
        } else {
          const message = "An error has occured: ${response.status}";
          throw new Error(message);
        }
      }
    }
};
