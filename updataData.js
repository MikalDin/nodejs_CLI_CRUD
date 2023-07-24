import inquirer from "inquirer";
import  fs  from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";
import { error } from "console";

export default async function updateData(info) {
    dbFileCheck();

    try {
        const answer = await inquirer.prompt([
            { type: "input", name: "id", message: "Please Enter record ID" },
        ]);
        let user;
        info.forEach(element => {
            if (element.id === answer.id) {
                user = element;
                updateDetails(user, info);

            }
        });
    } catch (error) {
        console.log("Soemething went wrong!", error);
             }
        }


async function updateDetails(user, info) {
    try {
        const feedback = await inquirer.prompt([

     { 
            type: "input", 
            name: "name", 
            default: user.Name, 
            message: "Please Enter Your Name:",
        },
    { 
            type: "number", 
            name: "phone", 
            default: user.Phone, 
            message: "Please Enter YOur Number?",
            },
            
          {
                type: "list",
                name: "age",
                default: user.Age,
            message: "Are you an adult?",
                choices: [
                    { name: "Y", value: "Adult" },
                    { name: "N", value: "Minor" },
                ],
            },
        ]);
            user.Name = feedback.name;
            user.Phone = feedback.phone;
            user.Age = feedback.age;
            
            await fs.writFile("db.json", JSON.stringify(info), function(err){
                    if (error)  {
                     console.log(" Error updating database");   
                    }

            console.log("Updated Successfully");
                    });
        } catch (error) {
        console.log("Something went wrong!", error);
        }
    }
    queryDB(updateData)

