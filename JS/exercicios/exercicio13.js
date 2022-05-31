//Exercicio - Crie um objeto 'postagem de blog" que contenha os seguintes atributos:
// Titulo | Mensagem | Autor | Vizualizações | Comentários (autor, mensagem) | EstaAovivo

//Solução
function Postagem(titulo, mensagem, autor, views, comentarios, estaAoVivo) {
    this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.views = views,
        this.comentarios = comentarios,
        this.estaAoVivo = estaAoVivo
}

//Exemplos
const postagem = new Postagem("Titulo ClickBait", "Texto Descricao", "Pablo", 333, [{"Susan" : "Bom!"}, {"Ana" : "Ruim!"}], true)
console.log(postagem);
