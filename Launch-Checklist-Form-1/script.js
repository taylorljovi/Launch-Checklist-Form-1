// form.addEventListener("load", launchStatusCheck);

window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         const missionTarget = document.getElementById("missionTarget");
         const index = Math.floor(Math.random() * (5-0)) + 0;
         missionTarget.innerHTML = 
          `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
         <img src="${json[index].image}"></img>`
      })
   })
   let form = document.querySelector("form");
   form.addEventListener("submit", inputCheck);
   
   function inputCheck(event) {
      let form = document.querySelector("form");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let numFuelLevel = (Number(fuelLevel.value));
      let numCargoMass = (Number(cargoMass.value));

      event.preventDefault();
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass === "") {
         alert ("All fields are required!");  
      } 
      else if (isNaN(numFuelLevel) || isNaN(numCargoMass)){
         alert ("Make sure to enter valid information for each field!");
      }
      else {
         launchStatusCheck(event);
      }
   }

let faultyItems = document.getElementById("faultyItems");

function fuelStatus() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let numFuelLevel = (Number(fuelLevel.value));
   let numCargoMass = (Number(cargoMass.value));
   let fuelLevelStatus;
   if(Number(fuelLevel.value) < 10000) {
      fuelLevelStatus =`<li id="fuelStatus">Fuel level not high enough for launch</li>`;
   } 
   else if (Number(fuelLevel.value) >= 10000) { 
      fuelLevelStatus = `<li id="fuelStatus">Fuel level is high enough for launch</li>`;
   } 
   return fuelLevelStatus;
}

function cargoStatus(){
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let numFuelLevel = (Number(fuelLevel.value));
   let numCargoMass = (Number(cargoMass.value));
   let cargoStatus;
   if (Number(cargoMass.value) > 10000) {
     cargoStatus = `<li id="cargoStatus">Cargo Mass low enough for launch</li>`;
   }
   else if (Number(cargoMass.value) <= 10000) {
      cargoStatus = `<li id="cargoStatus">Cargo Mass not low enough for launch</li>`;
   }
   return cargoStatus;
}

function launchStatusCheck(){
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let numFuelLevel = (Number(fuelLevel.value));
   let numCargoMass = (Number(cargoMass.value));
   event.preventDefault();
   if (Number(fuelLevel.value) < 10000 || Number(cargoMass) > 10000){
      document.getElementById("launchStatus").innerHTML = `<font color = "red">Shuttle not ready for launch</font>`;
      faultyItems.style.visibility = "visible";
      faultyItems.innerHTML = 
       `<ol>
          <li id="pilotStatus">${pilotName.value} Ready</li>
          <li id="copilotStatus">${copilotName.value} Ready</li>
          ${fuelStatus()} </li>
          ${cargoStatus()}</li>
       </ol>`;
   }
   else {
      document.getElementById("launchStatus").innerHTML = `<font color = "green"> Ready for launch</font>`;
      faultyItems.style.visibility = "hidden";
   }
 }
});