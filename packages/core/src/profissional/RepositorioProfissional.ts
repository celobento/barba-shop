import Profissional from "./Profissional";

export default interface RepositorioProfissional {
    criar(profissional: Profissional):Promise<Profissional>
    atualizar(id: number, profissional: Profissional):Promise<Profissional>
    listarTodos():Promise<Profissional[]>
    excluir(id: number):Promise<void>
}