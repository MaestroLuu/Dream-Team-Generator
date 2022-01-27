// const Employee = require("../lib/Employee");
// const Intern = require("../lib/Intern");
// const Manager = require("../lib/Manager");

const template = ({name, id, email, officeNumber}, role) => {
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
                <div class="card-body">
                    <h2 class="card-title">${name}</h2>
                    <h6 class="card-subtitle mb-2 text-muted">Manager Role</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                        <li class="list-group-item"><a href="${email}" class="card-link">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
}

module.exports = template;