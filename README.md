## Mikky's CLI inventory Project

//**The CLI app can update, delete, add and retrieve data. The data created is *saved in the 'db.json' file. No need for external database with this app in *current form.

Instructions:
to add information: node addData.js
to see the current database: node retrieveData.js
to delete imformation from database: node removeData  

##npm scripts / dev dependencies
"test": "jest"
"addData": "node addData.js"
"deleteData": "node removeData.js"
"retrieveData": "node retrieveData.js"
"updateData": "node updateData.js"



"inquirer": .prompt([/*pass your questions here*/])
    "uuid": "import { v4 as uuidv4 } from 'uuid';"
    "faker": "node index.js faker"


Stretch goals(future features):
If i had more time I would include a search method for the db.