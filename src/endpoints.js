import { dobro, somar, media, temperatura, primaria, IngressoCinema, tabuada, frequenciaCaracter, maiorNumero} from './services.js'
import { Router } from 'express'


const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {  
    let numero = Number(req.params.numero);
    
    const d = dobro (numero); 
    
    resp.send({dobro: d});

})

server.get ('/somar', (req, resp) => {  // query
    let a = Number(req.query.a);
    let b = Number(req.query.b);

    const x = somar (a,b);

    resp.send({
        somar: x
    })
})

   

server.post('/somar', (req, resp) =>{
    try{
    let a = req.body.a;
    let b = req.body.b;
  
    const x = somar(a,b);
       resp.send({
        somar: x
    })
}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/media', (req, resp) =>{
    try{
   let {n1,n2,n3} = req.body;
  
    const x = media(n1,n2,n3);
       resp.send({
        media: x
    })
}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/temperatura', (req, resp) =>{
    try{
  let temp = Number(req.query.temp);   

 const x = temperatura(temp);
 resp.send({
  media: x
})

}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dia2/primaria/:cor', (req, resp) => {  
    let cor = req.params.cor;
    
    const d = primaria(cor); 
    
    resp.send({primaria: d});

})


server.post('/dia2/ingressoCinema', (req, resp) => {
    
    let inteiras = req.body.inteiras;
    let meias = req.body.meias;
    let diaSemana = req.body.diaSemana;
    let nacionalidade = req.body.nacionalidade;
    const x = IngressoCinema(inteiras,meias,diaSemana,nacionalidade);
       resp.send({
        total: x
    })    
})

server.post('/dia2/maiorNumero', (req, resp) =>{
    try{
    const numeros = req.body;
    const maior = maiorNumero(numeros)
     resp.send({
         maior: maior
     })
    }catch(err) {
        resp.send({
        erro: err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) =>{
    try{
        
        const texto = req.params.texto;
        const caractere = req.params.caractere
        const freq = frequenciaCaracter(texto, caractere);
        resp.send({ 
            freq: freq
        })
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
})


server.get('/tabuada', (req, resp) =>{
    let numero = Number(req.query.numero) 
    let multiplicacao = Number(req.query.multiplicacao)

    const x = tabuada(numero, multiplicacao)
     resp.send({
         tabuada: x
     })
})
 export default server; 