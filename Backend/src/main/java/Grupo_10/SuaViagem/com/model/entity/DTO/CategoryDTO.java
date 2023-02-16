package Grupo_10.SuaViagem.com.model.entity.DTO;

public class CategoryDTO {

    private String qualificacao;
    private String descricao;
    private String urlDaImagem;

    public CategoryDTO() {
    }

    public CategoryDTO(String qualificacao, String descricao, String urlDaImagem) {
        this.qualificacao = qualificacao;
        this.descricao = descricao;
        this.urlDaImagem = urlDaImagem;
    }

    public String getQualificacao() {
        return qualificacao;
    }

    public void setQualificacao(String qualificacao) {
        this.qualificacao = qualificacao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getUrlDaImagem() {
        return urlDaImagem;
    }

    public void setUrlDaImagem(String urlDaImagem) {
        this.urlDaImagem = urlDaImagem;
    }
}
