package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.CaracteristicasEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CaracteristicasDTO {

    @JsonIgnore
    @Column(nullable=false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String icone;

    public CaracteristicasDTO() {
    }

    public CaracteristicasDTO(CaracteristicasEntity caracteristicasEntity) {
        this.id = caracteristicasEntity.getId();
        this.nome = caracteristicasEntity.getNome();
        this.icone = caracteristicasEntity.getIcone();
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

    public String getIcone() {
        return icone;
    }

    public void setIcone(String icone) {
        this.icone = icone;
    }
}