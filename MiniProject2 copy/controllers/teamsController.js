//first run 'npm install axios'
const axios = require('axios');


const loadTeams = (req,res) =>{

axios.get('https://www.balldontlie.io/api/v1/teams')
.then((response) => {console.log(response.data)
    res.status(200).json({success: true, ...response.data})
    })
};

module.exports = {loadTeams}


