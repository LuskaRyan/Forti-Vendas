const app = require("./app")
//porta do servidor http
const PORT = 3333;


//subindo o servidor na web
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta${PORT}`);
});
