// ===============================
// Portfolio Projects
// ===============================

const projects = [

{
title: "Geospatial Mapping and Analysis of Smuggling Routes",

description:
"Geospatial mapping and analysis of smuggling routes using GIS, Remote Sensing, DEM, and Multi-Criteria Spatial Analysis.",

image: "assets/images/project1.jpg",

tools: [
"ArcGIS Pro",
"Remote Sensing",
"DEM",
"GIS"
],

view:
"https://github.com/Elijah-Oluwapelumi?tab=repositories",

github:
"https://github.com/Elijah-Oluwapelumi?tab=repositories"
},

{
title: "Land Surface Temperature Analysis",

description:
"Assessment of urban thermal patterns using Landsat imagery and Google Earth Engine.",

image: "assets/images/project2.jpg",

tools: [
"Google Earth Engine",
"Landsat",
"Python"
],

view:
"https://github.com/Elijah-Oluwapelumi/Land-Surface-Temperature-Offa-LGA-Kwara-State",

github:
"https://github.com/Elijah-Oluwapelumi/Land-Surface-Temperature-Offa-LGA-Kwara-State"
},

{
title: "Environmental Monitoring",

description:
"Earth Observation techniques for environmental monitoring and sustainable resource management.",

image: "assets/images/project3.jpg",

tools: [
"Earth Observation",
"GIS",
"Spatial Data Science"
],

view:
"https://github.com/Elijah-Oluwapelumi/Coastal-Dynamics-of-Angola-A-Remote-Sensing-and-GIS-Approach-to-Shoreline-and-Bathymetric-Mapping",

github:
"https://github.com/Elijah-Oluwapelumi/Coastal-Dynamics-of-Angola-A-Remote-Sensing-and-GIS-Approach-to-Shoreline-and-Bathymetric-Mapping"
},

 {
title: "Assessment of Nigeria's UTM Grid Zone Boundaries",

description:
"Investigated Nigeria's UTM grid zone boundaries using GIS to evaluate whether states fall entirely within individual zones or span multiple UTM zones, challenging common assumptions in national spatial referencing.",

image: "assets/images/project4.jpg",

tools: [
"ArcGIS Pro",
"UTM",
"GIS",
"Spatial Analysis"
],

view:
"https://github.com/Elijah-Oluwapelumi/Nigeria-UTM-Grid-Zone-Assessment-Identifying-Zones-of-Exclusion",

github:
"https://github.com/Elijah-Oluwapelumi/Nigeria-UTM-Grid-Zone-Assessment-Identifying-Zones-of-Exclusion"
}

 
];

let current = 0;

function loadProject(index){

const project = projects[index];

document.getElementById("project-title").textContent =
project.title;

document.getElementById("project-description").textContent =
project.description;

document.getElementById("project-image").src =
project.image;

document.getElementById("project-view").href =
project.view;

document.getElementById("project-github").href =
project.github;

document.getElementById("project-counter").textContent =
`${index+1} / ${projects.length}`;

const toolsContainer =
document.getElementById("project-tools");

toolsContainer.innerHTML="";

project.tools.forEach(tool=>{

const span=document.createElement("span");

span.textContent=tool;

toolsContainer.appendChild(span);

});

}

document.getElementById("next-project").addEventListener("click",()=>{

current++;

if(current>=projects.length){

current=0;

}

loadProject(current);

});

document.getElementById("prev-project").addEventListener("click",()=>{

current--;

if(current<0){

current=projects.length-1;

}

loadProject(current);

});

// Load first project
loadProject(current);
