window.onload = function(){

  var input = document.querySelector("#country");
  var countryBut = document.querySelector("#lookup");
  var citiesBut = document.querySelector("#cities")
  var result = document.querySelector("#result");

  countryBut.addEventListener("click", function(e){
    e.preventDefault();

    result.innerHTML = "";
    fetchCountry(input.value);
  });

  citiesBut.addEventListener("click", function(e){
    e.preventDefault();
    result.innerHTML = "";

    fetchCity(input.value);
  });

  async function fetchCountry(val){
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

    async function fetchCity(val){
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
          const response = await fetch("world.php?country="+val+"&context=cities");
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
