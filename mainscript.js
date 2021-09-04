// JavaScript source code

    






(()=>{
    const skillsSection = document.querySelector(".skills-content"),
    tabscontainer = document.querySelector(".skills");
    tabscontainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains("common") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabscontainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            skillsSection.querySelector(".column-right.active").classList.remove("active");
            //console.log(skillsSection.querySelector(".column-right.active"));
            skillsSection.querySelector(target).classList.add("active");

        };
    
    });
    
})();