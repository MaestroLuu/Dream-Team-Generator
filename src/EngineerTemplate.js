const Engineer = require("../lib/Engineer");

const EngineerTemplate = ({engineerName, engineerID, engineerEmail, engineerGithub}) => {
`<div class="row d-flex justify-content-center">
    <div class="card col-sm-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h2 class="card-title">${engineerName}</h2>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Engineer ID: ${engineerID}</li>
                <li class="list-group-item"><a href="${engineerEmail}" class="card-link"></a></li>
                <li class="list-group-item"><a href="https://github.com/${engineerGithub}" class="card-link">Github: ${engineerGithub}</a></li>
            </ul>
        </div>
    </div>
</div>
`
}