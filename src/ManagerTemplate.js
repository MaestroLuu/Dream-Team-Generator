const ManagerTemplate = ({managerName, managerID, managerEmail, managerOfficeNumber}) => {
`<div class="row d-flex justify-content-center">
    <div class="card col-sm-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${managerName}</h2>
            <h6 class="card-subtitle mb-2 text-muted">Manager Role</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${managerID}</li>
                <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
                <li class="list-group-item"><a href="${managerEmail}" class="card-link">Email</a></li>
            </ul>
        </div>
    </div>
</div>`
}

module.exports = ManagerTemplate;