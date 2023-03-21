package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.CaracteristicasEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CaracteristicasDTO {

    @Column(nullable=false)
    private int id_caracteristicas;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=true)
    private String icone;

    public CaracteristicasDTO() {
    }

    public CaracteristicasDTO(CaracteristicasEntity caracteristicasEntity) {
        this.id_caracteristicas = caracteristicasEntity.getId_caracteristicas();
        this.nome = caracteristicasEntity.getNome();
        this.icone = caracteristicasEntity.getIcone();
    }

    public int getId_caracteristicas() {
        return id_caracteristicas;
    }

    public void setId_caracteristicas(int id_caracteristicas) {
        this.id_caracteristicas = id_caracteristicas;
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