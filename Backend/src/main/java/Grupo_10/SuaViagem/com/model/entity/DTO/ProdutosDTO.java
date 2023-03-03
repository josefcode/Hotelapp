package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProdutosDTO {

    @JsonIgnore
    @Column(nullable=false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String descricao;

    public ProdutosDTO() {
    }

    public ProdutosDTO(ProdutosEntity produtosEntity) {
        this.id = produtosEntity.getId();
        this.nome = produtosEntity.getNome();
        this.descricao = produtosEntity.getDescricao();
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