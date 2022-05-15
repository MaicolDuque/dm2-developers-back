module.exports = (email, name, message) => {
    return `
    <div style="width: 700px; display: block; margin: 0 auto;">
    <table style="margin: 0 auto;">
        <tr>
            <td><img style="text-align: center" src="https://d2msoftware.netlify.app/img/logo4.png"></td>
        </tr>
        <tr>
            <td><strong>User Name: </strong> ${name} <br><br> <strong>User Email: </strong> ${email} <strong> <br><br>Message: </strong> ${message} </td>
        </tr>
    </table>
    </div>
    `
}