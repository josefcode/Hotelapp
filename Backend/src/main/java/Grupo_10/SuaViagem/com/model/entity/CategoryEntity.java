package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.CategoryDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name  =  "categorias")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categorias", nullable = false)
    private int id_categorias;

    @Column(nullable=false)
    private String qualificacao;

    @Column(nullable=false)
    private String descricao;

    @Column(nullable=false)
    private String url_imagem;

    @OneToMany(mappedBy = "categoryEntity", cascade = CascadeType.ALL)
    private List<ProdutosEntity> produtosEntityList = new ArrayList<>();

    public CategoryEntity() {
    }

    public CategoryEntity(CategoryDTO categoryDTO) {
        this.id_categorias = categoryDTO.getId_categorias();
        this.qualificacao = categoryDTO.getQualificacao();
        this.descricao = categoryDTO.getDescricao();
        this.url_imagem = categoryDTO.getUrl_imagem();
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