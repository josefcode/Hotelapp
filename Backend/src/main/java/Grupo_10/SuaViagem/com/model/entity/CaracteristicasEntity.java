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
    @Column(name = "id_caracteristicas", nullable = false)
    private int id_caracteristicas;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String icone;

    @ManyToMany(mappedBy="caracteristicasEntityList")
    private List<ProdutosEntity> produtosEntityList = new ArrayList<>();

    public CaracteristicasEntity() {
    }

    public CaracteristicasEntity(CaracteristicasDTO caracteristicasDTO) {
        this.id_caracteristicas = caracteristicasDTO.getId_caracteristicas();
        this.nome = caracteristicasDTO.getNome();
        this.icone = caracteristicasDTO.getIcone();
    }

    public int getId_caracteristicas() {
        return id_caracteristicas;
    }

    public void setId_caracteristicas(int id_caracteristicas) {
        this.id_caracteristicas = id_caracteristicas;
    }

    public List<ProdutosEntity> getProdutosEntityList() {
        return produtosEntityList;
    }

    public void setProdutosEntityList(List<ProdutosEntity> produtosEntityList) {
        this.produtosEntityList = produtosEntityList;
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