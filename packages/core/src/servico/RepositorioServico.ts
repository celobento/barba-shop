import Servico from "./Servico";

export default interface RepositorioServico {
    criar(servico: Servico): Promise<Servico>
    atualizar(id: number, servico: Servico): Promise<Servico>    
    listarTodos(): Promise<Servico[]>
    excluir(id: number): Promise<void>
}