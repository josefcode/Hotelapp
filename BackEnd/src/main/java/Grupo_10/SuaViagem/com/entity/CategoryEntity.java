package Backend.src.main.java.Grupo_10.SuaViagem.com.entity;

public class CategoryEntity {

    private int id;
    private String qualificacao;
    private String descricao;
    private String urlDaImagem;

    public CategoryEntity() {
    }

    public CategoryEntity(int id, String qualificacao, String descricao, String urlDaImagem) {
        this.id = id;
        this.qualificacao = qualificacao;
        this.descricao = descricao;
        this.urlDaImagem = urlDaImagem;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
