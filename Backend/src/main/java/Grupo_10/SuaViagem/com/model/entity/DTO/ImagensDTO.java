package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ImagensEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ImagensDTO {

    @Column(nullable=false)
    private int id_imagens;

    @Column(nullable=false)
    private String titulo;

    @Column(nullable=false)
    private String url;

    public ImagensDTO() {
    }

    public ImagensDTO(ImagensEntity imagensEntity) {
        this.id_imagens = imagensEntity.getId_imagens();
        this.titulo = imagensEntity.getTitulo();
        this.url = imagensEntity.getUrl();
    }

    public int getId_imagens() {
        return id_imagens;
    }

    public void setId_imagens(int id_imagens) {
        this.id_imagens = id_imagens;
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