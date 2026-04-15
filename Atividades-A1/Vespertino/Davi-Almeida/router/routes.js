const express = require("express")
const router = express.Router()
const alunos = require('../src/data/alunos')

router.get('/',(req, res, next)=>{
    console.log('Passando pelo middleare!')
    res.send('API de alunos')
    next()
})



router.get('/alunos', (req, res) => {

    res.status(200).json(alunos)
})


router.post('/alunos', (req,res) => {
    const alunoNovo = {
        id: alunos.length +1,
        nome: req.body.nome,
        idade: req.body.idade,
        cpf: req.body.cpf
    };
    alunos.push(alunoNovo);
    res.status(201).json(alunoNovo)

});
//criando o put..
router.put('/alunos/:id', (req, res)  =>{
    const idAluno = parseInt (req.params.id);
    const aluno = alunos.find((a)=> a.id ===idAluno);


    /*parseInt para mudar para Int 
requisita um parametro e esse parametro é o id(ou seja [ele vai pesquisar nos ids])
método .find para percorrer o array de objetos: nesse caso alunos
chama uma função callback com o nome 'a' e ela é comparada com id aluno pois consta como a.id
lê-se: objeto: 'a' atributo: 'id' 
*/  

    if(!aluno){
    return  res.status(404).json({erro: 'Aluno não encontrado'});
    }


    aluno.nome = req.body.nome || tarefa.nome
    aluno.idade = req.body.idade || aluno.idade


    res.status(200).json(aluno);
});
router.delete('/alunos/:id', (req, res) =>{
    const idAluno = parseInt(req.params.id);
    const index = alunos.findIndex((a) => a.id === idAluno);
/* método .findIndex != de .find
método .find traz objeto
método .findIndex traz a posição

Nesse caso ele vai percorrer o array como um todo se ele não encontrar o id que foi posto na url ele 
ele vai retornar '-1'. 
*/
     if(index === -1  ){
    return  res.status(404).json({erro: 'aluno não encontrado'});
    }
alunos.splice(index, 1)
res.status(204).send()
if(res.status() ==204){
    return res.status(204).json({aluno: "deletado com sucesso "})

}
/*
Aqui ele corta usando o método .splice, a constante 'index' captura o valor que o método .findIndex retornou.
O método quer saber aonde vai procurar e nesse caso é na POSICAO 'index' e deletar 1 posicao
E é obtido a resposta de status 204 que quer dizer que não há itens mais naquela posicao, DEU CERTO!
*/ 
})





module.exports = router;