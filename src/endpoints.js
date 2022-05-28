import {Router} from "express";
import {Semaforo, DiaSemana, Fatorial, SequenciaPar} from "./services.js"

const server = Router();

export default server

server.get('/Semaforo/:cor', (req, resp) => {
    
    const cor = req.params.cor
    const x = Semaforo(cor)

    resp.send({
        Semaforo: x 
    })
})

server.get('/DiaSemana', (req, resp) => {
    
    const dia = req.query.dia
    const x = DiaSemana(dia)

    resp.send({
        dia: x 
    })
})

server.post('/Fatorial', (req, resp) => {
    try{
        const n = Number(req.query.n);
        const x = Fatorial(n)

        resp.send({
            Fat: x
        })
    }
   catch(err){
       resp.send({
        erro: err.message
       })
   }

})

server.post('/SequenciaPar', (req, resp) => {
    try{
        const n = req.body.numero
        const x = SequenciaPar(n)

        resp.send({
            n : x
        })
    }
   catch(err){
       resp.send({
        erro: err.message
       })
   }

})