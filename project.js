let recieve="";
   let index=0;
    function listProject(){  
    const projects=[`<img class="hospital-logo" 
        src="digital-health-hub.webp" alt="tryagain">
        <a href="myfirst/firstproject.html">
        <p class="role">a platform delivery medication and register onlinecard</p>
       <p> bussiness trainig acedamy</p></a>`,
        `<img class="hospital-logos" src="bussinesimage.jpg" alt="tryagain">
        <a href="myfirst/firstproject.html">
        <p class="roles">Access expert-led business training on this platform...</p>
      <p> Online Medication Delivery & Card Registration</p></a>
        `];
    const buttons=document.getElementById('buttons');
    const files=document.getElementById('files');
    buttons.addEventListener('click',()=>{
        if(index<projects.length){
            recieve+=`<div class="some-projects">${projects[index]}</div>`;
        index++;
        files.innerHTML=recieve;
 }
     else
     {
     files.style.borderRight='none';
     } 
    });
} 
listProject();