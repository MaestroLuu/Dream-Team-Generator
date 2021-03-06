// const Employee = require("../lib/Employee");
// const Intern = require("../lib/Intern");
// const Manager = require("../lib/Manager");

const EngineerTemplate = require("./EngineerTemplate");
const InternTemplate = require("./InternTemplate");

const template = (managerList, engineerList, internList) => 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Team Roster</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Team Roster</h1>
            <p class="lead">Please refer to the lineup below for your team.</p>
        </div>
    </div>
    <div class="manager-container">
        <div class="row d-flex justify-content-center">
            <div class="card col-sm-3 m-2" style="width: 18rem;">
            ${managerList.map(item => {
                return `<div class="card-body">
                    <h2 class="card-title">${item.getName()}</h2>
                    <h6 class="card-subtitle mb-2 text-muted">${item.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${item.getId()}</li>
                        <li class="list-group-item">Office Number: ${item.getOfficeNumber()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${item.getEmail()}" class="card-link">${item.getEmail()}</a></li>
                    </ul>
                </div>`
            })}
            </div>
        </div>
    </div>
    <div class="engineer-container">
        <div class="row d-flex justify-content-center">
            ${EngineerTemplate(engineerList)} 
        </div>
    <div class="intern-container">
        <div class="row d-flex justify-content-center">
            ${InternTemplate(internList)}
        </div>
    </div>
    <script src="./lib/Prompt.js"></script>
</body>

</html>`


module.exports = template;