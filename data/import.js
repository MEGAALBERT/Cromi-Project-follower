require("dotenv").config(); // this will point to the .env file that has our Data_base URL
const fs = require("fs"); // to read jason files
const db = require("../server/knex.js"); // needs database to know where to import the data

(async () => {
    try {
      const projects = JSON.parse(fs.readFileSync("./data/projects.json"));
      for(const project of projects) {
          const project_name= project.ProjectName;
          const description= project.Description;
          const active = project.Active;
          const contact_info = project.contactInfo;
          const image = project.image;

          const result = await db("projects").insert({
              project_name,
              description,
              active,
              contact_info,
              image,
          })
        console.log(result);   
      }
    } catch (err) {
        console.log("Error inserting data", err);
    }
})();