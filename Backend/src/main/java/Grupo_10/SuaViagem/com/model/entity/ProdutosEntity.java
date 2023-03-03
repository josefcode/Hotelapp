package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.CategoryDTO;
import Grupo_10.SuaViagem.com.model.entity.DTO.ProdutosDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name  =  "produtos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ProdutosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String descricao;

    public ProdutosEntity() {
    }

    public ProdutosEntity(ProdutosDTO produtosDTO) {
        this.id = produtosDTO.getId();
        this.nome = produtosDTO.getNome();
        this.descricao = produtosDTO.getDescricao();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}