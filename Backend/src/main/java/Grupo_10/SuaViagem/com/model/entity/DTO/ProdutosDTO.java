package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProdutosDTO {

    @Column(nullable=false)
    private int id_produtos;

    @Column(nullable=false)
    private String nome;

    @Column(nullable=false)
    private String descricao;

    private List<CaracteristicasEntity> caracteristicasEntityList = new ArrayList<>();

    private List<ImagensEntity> imagensEntityList = new ArrayList<>();

    private CategoriasEntity categoriasEntity;

    private CidadesEntity cidadesEntity;

    public ProdutosDTO() {
    }

    public ProdutosDTO(ProdutosEntity produtosEntity) {
        this.id_produtos = produtosEntity.getId_produtos();
        this.nome = produtosEntity.getNome();
        this.descricao = produtosEntity.getDescricao();
        this.caracteristicasEntityList = produtosEntity.getCaracteristicasEntityList();
        this.imagensEntityList = produtosEntity.getImagensEntityList();
        this.categoriasEntity = produtosEntity.getCategoryEntity();
        this.cidadesEntity = produtosEntity.getCidadesEntity();
    }

    public int getId_produtos() {
        return id_produtos;
    }

    public void setId_produtos(int id_produtos) {
        this.id_produtos = id_produtos;
    }

    public CategoriasEntity getCategoriasEntity() {
        return categoriasEntity;
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