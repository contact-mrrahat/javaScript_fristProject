const milestonesData = JSON.parse(data).data;





function loadMilestones (){
 
    const milestones = document.querySelector(`.milestones`);

    milestones.innerHTML = `${milestonesData.map( function (milestone){

        return ` <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick = "openMilestion(this , ${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              
            ${milestone.modules.map( function (moduls){
            
            return `
            <div class="module border-b">
                <p>${moduls.name}</p>
              </div> `
            
            }).join('')}

            </div>
          </div> `

    }).join('')}` ;
}

function openMilestion(milestoneElement , id){

    const currentPanel = milestoneElement.parentNode.nextElementSibling;

    const showPanel = document.querySelector(".show");

    const active = document.querySelector(".active");

    if(active && !milestoneElement.classList.contains("active")){
      active.classList.remove("active");
    }
      
    milestoneElement.classList.toggle("active");


    if( !currentPanel.classList.contains("show") && showPanel){

    showPanel.classList.remove("show");
  }
    
    currentPanel.classList.toggle('show');

    showMilestion(id);
}

function showMilestion(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const milestoneTitel = document.querySelector (" .title");
  const milestoneDescription = document.querySelector (".details")

  milestoneImage.src = milestonesData[id].image;
  milestoneTitel.innerText = milestonesData[id].name;
  milestoneImage.innerText = milestonesData[id].description;


}


loadMilestones();