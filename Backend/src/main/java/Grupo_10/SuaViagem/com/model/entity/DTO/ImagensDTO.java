package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ImagensEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ImagensDTO {

    @JsonIgnore
    @Column(nullable=false)
    private int id;

    @Column(nullable=false)
    private String titulo;

    @Column(nullable=false)
    private String url;

    public ImagensDTO() {
    }

    public ImagensDTO(ImagensEntity imagensEntity) {
        this.id = imagensEntity.getId();
        this.titulo = imagensEntity.getTitulo();
        this.url = imagensEntity.getUrl();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}