package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.CategoryEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryDTO {

    @JsonIgnore
    @Column(nullable=false)
    private int id_categorias;

    @Column(nullable=false)
    private String qualificacao;

    @Column(nullable=false)
    private String descricao;

    @Column(nullable=false)
    private String url_imagem;

    public CategoryDTO() {
    }
    public CategoryDTO(CategoryEntity categoryEntity) {
        this.id_categorias = categoryEntity.getId_categorias();
        this.qualificacao = categoryEntity.getQualificacao();
        this.descricao = categoryEntity.getDescricao();
        this.url_imagem = categoryEntity.getUrl_imagem();
    }

    public int getId_categorias() {
        return id_categorias;
    }

    public void setId_categorias(int id_categorias) {
        this.id_categorias = id_categorias;
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

    public String getUrl_imagem() {
        return url_imagem;
    }

    public void setUrl_imagem(String url_imagem) {
        this.url_imagem = url_imagem;
    }
}