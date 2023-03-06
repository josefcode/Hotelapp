package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.CidadesEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CidadesDTO {

    @JsonIgnore
    @Column(nullable=false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String pais;

    @Column(nullable=false)
    private String sigla;

    public CidadesDTO() {
    }

    public CidadesDTO(CidadesEntity cidadesEntity) {
        this.id = cidadesEntity.getId();
        this.nome = cidadesEntity.getNome();
        this.pais = cidadesEntity.getPais();
        this.sigla = cidadesEntity.getSigla();
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
}