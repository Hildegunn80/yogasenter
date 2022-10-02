/*
    Add section in array to expand menu.
*/
const htmlPages = [
    {
        file: "index.html",
        name: "Hjem"
    },
    {
        file: "Coffee_Bars.html",
        name: "Kurs"
    },
    {
        file: "about_us.html",
        name: "Instruktør"
    },
    {
        file: "locations.html",
        name: "Kundalini yoga"
    },
    {
        file: "priser.html",
        name: "Pris"
    },
    {
        file: "info.html",
        name: "Info"
    },
    {
        file: "contacs_us.html",
        name: "Kontakt"
    }
];

function addLogo(menu) {
    // create logo DIV
    let logo = document.createElement("div");
    logo.classList.add("logo");    
    
    let a = document.createElement("a");
    a.setAttribute("href","index.html");
    
    let img = document.createElement("img");
    img.setAttribute("src","images/SmallLogoBlack.png");
    
    a.appendChild(img);
    logo.appendChild(a);
    menu.appendChild(logo);
}

function addTitle(menu) {
    let title = document.createElement("title");
    title.classList.add("title");
    menu.appendChild(title);

    let h2 = document.createElement("h2");
    h2.textContent = "Stord Yogasenter";
    title.appendChild(h2);
}

function addNav(menu) {
    let fileName = window.location.pathname.split("/").pop();
    console.log("file name = " + fileName );

    let nav = document.createElement("nav");
    menu.appendChild(nav);
    let ul = document.createElement("ul");
    nav.appendChild(ul);

    for (const page of htmlPages) {
        let li = document.createElement("li");

        let a = document.createElement("a");
        a.setAttribute("href",page.file);
        a.innerHTML = page.name;
        li.appendChild(a);

        if(page.file == fileName) {
            a.className = "current";
        }

        ul.appendChild(li);
    }
}

function addMenu(menu) {
    // Add Input
    let input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","menu-checkbox");
    menu.appendChild(input);
   
    // Add Label
    let label = document.createElement("label");
    label.setAttribute("for","menu-checkbox");
    label.classList.add("hamburger-icon");
    menu.appendChild(label);
    
    let i = document.createElement("i");
    i.className = "fas fa-bars fa-4x";
    i.setAttribute("aria-hidden","true");
    label.appendChild(i);
    
    addNav(menu);
}

function loadMenu() {
    // Cladd Location to create Menu system in.
    // in html:  <div class="header"></div>
    const menu = document.querySelector(".header");

    if (menu == null) {
        console.log("Error Menu class not found in html document.");
        return;        
    }

    // add divs into class
    addLogo(menu);
    addTitle(menu);
    addMenu(menu);
}

// load menu automatically..
window.onload = loadMenu();