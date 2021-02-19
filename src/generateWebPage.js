// function to generate the employee cards that appear on the web page
function generateEmployeeCards(employees) {
    let returnStr = ``;
    // creates a new card for each employee in the employees array
    employees.forEach(employee => {
        let thirdAttr = "";
        // switch case determines which third attribute will be on the card based on which role is being created
        switch (employee.getRole()) {
            case "Manager":
                thirdAttr = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
                break;
            case "Engineer":
                thirdAttr = `<a href="https://github.com/${employee.getGithub()}/" target="_blank"><li class="list-group-item">GitHub: ${employee.getGithub()}</li></a>`
                break;
            case "Intern":
                thirdAttr = `<li class="list-group-item">School: ${employee.getSchool()}</li>`
                break;
            default:
                break;
        }
        // newline is purely for the purpose of maintaining good formatting in the html file
        let newline = `
            `;
        // newline is removed if it the employee is the last in the row, to prevent random whitespace in html file
        if (employees.indexOf(employee) == employees.length-1) {
            newline = ``;
        }
        // determining how much space the cards take up based on how many in the row
        let colSize = 12/employees.length;
        // adds a new card in html to the returnStr for each employee
        returnStr = returnStr.concat(`<div class="col-md-${colSize}">
                <div class="card employee" style="width: 22rem; height:17rem;">
                    <div class="card-body">
                        <h4 class="card-title">${employee.getName()}</h5>
                        <h4 class="card-title">${employee.getRole()}</h5>
                        <br>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <a href = "mailto: ${employee.getEmail()}"><li class="list-group-item">Email: ${employee.getEmail()}</li></a>
                            ${thirdAttr}
                        </ul>
                    </div>
                </div>
            </div>${newline}`)
    });
    return returnStr;
}

// function takes in the employeeArray and teamName and generates an html file
function generateWebPage(employeeArray,teamName) {
    let rowStr = ``;
    // loop creates a new row after every third card
    for (let i=0;i<(employeeArray.length/3);i++) {
        // formatting
        let newline = `
        `;
        if (i+1 >= employeeArray.length/3) {
            newline = ``;
        }
        // each iteration calls generateEmployeeCards on 3 employees from the employeeArray
        rowStr = rowStr.concat(`<div class="row emp-row">
            ${generateEmployeeCards(employeeArray.slice(i*3,(i*3)+3))}
        </div>${newline}`);
    }
    // returns full html document generated using employees
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamName}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <style>
        header {
            background-color:rebeccapurple;
            padding: 2%;
        }
        #title {
            color: white;
            text-align: center;
        }
        h1 {
            font-size: 50px;
        }
        #cards {
            width: 100%;
        }
        .employee {
            margin: auto;
        }
        a {
            text-decoration: none;
            color: black;
        }
        .emp-row {
            margin: auto;
            margin-top: 3%;
        }
    </style>
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