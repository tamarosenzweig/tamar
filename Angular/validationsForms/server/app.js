const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors')
const countryArr = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda",
    "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory",
    "United States Minor Outlying Islands", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
    "Cabo Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
    "Congo (Democratic Republic of the)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana",
    "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
    "Côte d'Ivoire", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao",
    "Macedonia (the former Yugoslav Republic of)", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte",
    "Mexico", "Micronesia (Federated States of)", "Moldova (Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Korea (Democratic People's Republic of)", "Northern Mariana Islands", "Norway",
    "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar",
    "Republic of Kosovo", "Réunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia",
    "Viet Nam", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
const basePath = path.join(__dirname + "/dist");

app.get(`/`, (req, res) => {
    let linkList = "";
    let resPage = fs.readFileSync("links.html", "utf-8");
    console.log(resPage);
    fs.readdir(basePath, (err, files) => {
        files.forEach((file) => {
            linkList += `<li><a href="/${file}" target="blank">${file}</a></li>`;
        })
        res.send(resPage.replace("placeHolder", linkList));
    });

});
fs.readdir(basePath, (err, files) => {
    files.forEach((file) => {
        app.use(express.static(`${basePath}/${file}`));
        app.get(`/${file}`, (req, res) => {
            res.sendFile(`${basePath}/${file}/index.html`);
        });
    })
});
app.post("/api/addUser", (req, res) => {
    if (savePerson(req.body)) {
        let currentList = require("./user.json");
        currentList.push(req.body)
        fs.writeFileSync("user.json", JSON.stringify(currentList));
        res.status(201).send(JSON.stringify(currentList));
    }
    else {
        res.status(400).send();
    }
})
app.param(['fileName'], function (req, res, next, value) {
    console.log(value);
    next();
});
app.get("/api/getList", (req, res) => {
    let fileName = req.param('fileName')
    let List = require(`./${fileName}.json`);
    res.status(201).send(JSON.stringify(List));
})
function validateId(tz) {

    let total = 0;
    for (i = 0; i < 9; i++) {
        let x = (((i % 2) + 1) * tz.charAt(i));
        total += Math.floor(x / 10) + x % 10;
    }
    return (total % 10 == 0);
}
function validateAge(age) {

    return (typeof (JSON.parse(age)) == "number") &&
        age > 0 &&
        age < 120;
}
function validateName(name) {

    return name.length >= 3 && name.length <= 15;
}
function validateIsMale(person) {
    console.log(person);
    console.log(person.isMale);
    if (typeof JSON.parse(person.isMale) != "boolean")
        return false;
    return true;
}
function validateCountry(country) {
    return countryArr.includes(country);
}

function savePerson(person) {
    if (validateAge(person.age) && validateName(person.name) && validateIsMale(person) && validateCountry(person.country) && validateId(person.id))
        return true;
    return false;
}
const port = process.env.PORT || 3500;
app.listen(port, () => {
    console.log(`OK`);
    console.log('CORS-enabled web server listening on port 80');
});