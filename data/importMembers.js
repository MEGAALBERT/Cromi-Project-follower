require("dotenv").config(); // this will point to the .env file that has our Data_base URL
const fs = require("fs"); // to read jason files
const db = require("../server/knex.js"); // needs database to know where to import the data

(async () => {
    try {
      const members = JSON.parse(fs.readFileSync("./data/members.json"));
      for(const member of members) {
          const member_name = member.name
          const mote= member.mote;
          const actividad= member.actividad;
          const correo_electronico = member.correo_electronico;

          const result = await db("members").insert({
            member_name,
            mote,
            actividad,
            correo_electronico
          })
        console.log(result);   
      }
    } catch (err) {
        console.log("Error inserting data", err);
    }
})();
