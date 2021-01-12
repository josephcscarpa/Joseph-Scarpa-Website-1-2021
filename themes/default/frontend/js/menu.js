function navToggle() {   
    if(document.getElementById("menu").classList.contains("hidden")){
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("menu").classList.add("block");  
        //Remove open button
        document.getElementById("menu-open").classList.remove("block");
        document.getElementById("menu-open").classList.add("hidden");  
        // Add closed button
        document.getElementById("menu-close").classList.add("block");  
        document.getElementById("menu-close").classList.remove("hidden");
        
    }
    else{
        document.getElementById("menu").classList.remove("block");
        document.getElementById("menu").classList.add("hidden");    
           //Add open button
           document.getElementById("menu-open").classList.remove("hidden");
           document.getElementById("menu-open").classList.add("block");  
           // Remove closed button
           document.getElementById("menu-close").classList.remove("block");
           document.getElementById("menu-close").classList.add("hidden");    
    }

}



   