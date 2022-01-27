const InternTemplate = (internList) => 
    internList.map(item => {
        return `<div class="card col-sm-3 m-2" style="width: 18rem;">
        <div class="card-body">
        <h2 class="card-title">${item.getName()}</h2>
        <h6 class="card-subtitle mb-2 text-muted">${item.getRole()}</h6>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${item.getId()}</li>
        <li class="list-group-item">School: ${item.getSchool()}</li>
        <li class="list-group-item"><a href="${item.getEmail()}" class="card-link">Email: ${item.getEmail()}</a></li>
        </ul>
        </div>
        </div>
        </div>`
    })

module.exports = InternTemplate;