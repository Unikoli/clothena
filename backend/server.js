const app = require("./app");

const PORT=process.env.PORT||5000;
const server=app.listen(PORT,'0.0.0.0',()=>{
    console.log(`server is running on port ${PORT}`);
})

