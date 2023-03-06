package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.CidadesDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name  =  "cidades")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CidadesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String pais;

    @Column(nullable=false)
    private String sigla;

    @OneToMany(mappedBy = "cidadesEntity", cascade = CascadeType.ALL)
    private List<ProdutosEntity> produtosEntityList = new ArrayList<>();

    public CidadesEntity() {
    }

    public CidadesEntity(CidadesDTO cidadesDTO) {
        this.id = cidadesDTO.getId();
        this.nome = cidadesDTO.getNome();
        this.pais = cidadesDTO.getPais();
        this.sigla = cidadesDTO.getSigla();
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

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public List<ProdutosEntity> getProdutosEntityList() {
        return produtosEntityList;
    }

    public void setProdutosEntityList(List<ProdutosEntity> produtosEntityList) {
        this.produtosEntityList = produtosEntityList;
    }
}