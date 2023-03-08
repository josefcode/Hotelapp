package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.ProdutosDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name  =  "produtos")
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProdutosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_produtos", nullable = false)
    private int id_produtos;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String descricao;

    @ManyToMany
    @JoinTable(name="produtos_categorias", joinColumns=
            {@JoinColumn(name="produtos_id")}, inverseJoinColumns=
            {@JoinColumn(name="categorias_id")})
    private List<CaracteristicasEntity> caracteristicasEntityList = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="produtos_id")
    private List<ImagensEntity> imagensEntityList = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_entity_id")
    private CategoriasEntity categoriasEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cidades_entity_id")
    private CidadesEntity cidadesEntity;

    public ProdutosEntity() {
    }

    public ProdutosEntity(ProdutosDTO produtosDTO) {
        this.id_produtos = produtosDTO.getId_produtos();
        this.nome = produtosDTO.getNome();
        this.descricao = produtosDTO.getDescricao();
        this.caracteristicasEntityList = produtosDTO.getCaracteristicasEntityList();
        this.imagensEntityList = produtosDTO.getImagensEntityList();
        this.categoriasEntity = new CategoriasEntity(produtosDTO.getCategoriasEntity());
        this.cidadesEntity = produtosDTO.getCidadesEntity();
    }

    public int getId_produtos() {
        return id_produtos;
    }

    public void setId_produtos(int id_produtos) {
        this.id_produtos = id_produtos;
    }

    public void setCategoriasEntity(CategoriasEntity categoriasEntity) {
        this.categoriasEntity = categoriasEntity;
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

    public List<CaracteristicasEntity> getCaracteristicasEntityList() {
        return caracteristicasEntityList;
    }

    public void setCaracteristicasEntityList(List<CaracteristicasEntity> caracteristicasEntityList) {
        this.caracteristicasEntityList = caracteristicasEntityList;
    }

    public List<ImagensEntity> getImagensEntityList() {
        return imagensEntityList;
    }

    public void setImagensEntityList(List<ImagensEntity> imagensEntityList) {
        this.imagensEntityList = imagensEntityList;
    }

    public CategoriasEntity getCategoryEntity() {
        return categoriasEntity;
    }

    public void setCategoryEntity(CategoriasEntity categoriasEntity) {
        this.categoriasEntity = categoriasEntity;
    }

    public CidadesEntity getCidadesEntity() {
        return cidadesEntity;
    }

    public void setCidadesEntity(CidadesEntity cidadesEntity) {
        this.cidadesEntity = cidadesEntity;
    }
}