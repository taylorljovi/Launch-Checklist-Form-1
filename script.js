// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
  
   form.addEventListener("submit", inputCheck);

   form.addEventListener("load", launchStatusCheck);
   
   function inputCheck(event){
      if (pilotName.value === "" || copilotName.value === ""){
         alert ("All fields are required!");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
         alert ("All fields are required");
         event.preventDefault();
      }
   }


let faultyItems = document.getElementById("faultyItems");
funciton fuelStatus(){
   let fuelLevelStatus;
   if(Number(fuelLevel.value) < 10000){
      fuelLevelStatus =`<li id="fuelStatus">Fuel level not high enough for launch</li>`;
   } 
   else if (Number(fuelLevel.value) >= 10000){
      fuelLevelStatus = `<li id="fuelStatus">Fuel level is high enough for launch</li>`;
   } 
   return fuelLevelStatus;
   }

   function cargoStatus(){
      let cargoStatus;
      if (Number(cargoMass.value) > 10000) {
         cargoStatus = `<li id="cargoStatus">Cargo Mass low enough for launch</li>`;
      }
      else if (Nubmer(cargoMass.value) <= 10000) {
         cargoStatus = `<li id="cargoStatus">Cargo Mass not low enough for launch</li>`;
      }
      return cargoStatus;
   }
function launchStatusCheck(){
   if (Number(fuelLevel.value) < 10000 || Number(cargoMass) > 10000){
      document.getElementById("launchStatus").innerHTML = `<font color = "red"> Shuttle not ready for launch</font>`;
      faultyItems.setAttribute("visability","visibile");
      faultyItems.innerHTML += 
       `<ol>
          <li id="pilotStatus">${pilotName.value} Ready</li>
          <li id="copilotStatus">${copilotName.value} Ready</li>
          ${fuelStatus()} </li>
          ${cargoStatus()}</li>
       </ol>`;
   }
   else {
      document.getElementById("launchStatus").innerHTML = `font color="greet"> Ready for launch</font:`;
   }
 }
});