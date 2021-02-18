function generateEmployeeCards(data) {
    let returnStr = ``;
    data.forEach(employee => {
        let thirdAttr;
        switch (employee.getRole()) {
            case "Manager":
                thirdAttr = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
                break;
            case "Engineer":
                thirdAttr = `<a href="https://github.com/${employee.github}/" target="_blank"><li class="list-group-item">GitHub: ${employee.github}</li></a>`
                break;
            case "Intern":
                thirdAttr = `<li class="list-group-item">School: ${employee.school}</li>`
                break;
            default:
                break;
        }

        returnStr = returnStr.concat(`<div class="card col-md-4 employee" style="width: 22rem; height:17rem;">
    <div class="card-body">
        <h4 class="card-title">${employee.name}</h5>
        <h4 class="card-title">${employee.getRole()}</h5>
        <br>
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: ${employee.email}</li>
            ${thirdAttr}
        </ul>
    </div>
</div>`)
    });
    return returnStr;
}

function generateWebPage(data,teamName) {
    let rowStr = ``;
    for (let i=0;i<(data.length/3);i++) {
        rowStr = rowStr.concat(`<div class="row">
    ${generateEmployeeCards(data.slice(i*3,(i*3)+3))}
</div>`);
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamName}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
</head>
    <body>
        <header>
            <h1 id="title">${teamName}</h1>
        </header>
        <div class="container" id="cards">
            ${rowStr}
        </div>
        <script>
            const links = document.querySelectorAll("a > li");
            links.forEach((link) => {
                link.addEventListener("mouseenter",() => {
                    link.classList.add("active");
                });
                link.addEventListener("mouseleave",() => {
                    link.classList.remove("active");
                });
            }); 
        </script>
    </body>
    </html>`;
}

module.exports = generateWebPage;