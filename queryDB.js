import fs from "fs" ;

export default async function queryDB(externalFunction) {
    try {
        let info = [];

        if (fs.existsSync("db.json")){
            await fs.readFile("db.json", function (error,data){
                info = JSON.parse(data.toString());
                    console.log(info);

                    if(error) {
                        console.log("Reading File Failed", error);
                        return;
                    }
                
                    if(externalFunction && !error) {
                        externalFunction(info);
                        return;
                        }
                    });
                }else {
                    if (externalFunction) {
                            externalFunction(info);
                            return;
                        }
                    }
                 } catch (error) {
                    console.log("Something went wrong", error);
                 }
                }   
