


const addRow = function(){
    let table = document.querySelector("tbody")
    const inhalt = `
    <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>the Bird</td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
        `

    table.innerHTML+=inhalt

}









