package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.CaracteristicasDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name  =  "caracteristicas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CaracteristicasEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String icone;

    @ManyToMany(mappedBy="caracteristicasEntityList")
    private List<ProdutosEntity> produtosEntityList = new ArrayList<>();

    public CaracteristicasEntity() {
    }

    public CaracteristicasEntity(CaracteristicasDTO caracteristicasDTO) {
        this.id = caracteristicasDTO.getId();
        this.nome = caracteristicasDTO.getNome();
        this.icone = caracteristicasDTO.getIcone();
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