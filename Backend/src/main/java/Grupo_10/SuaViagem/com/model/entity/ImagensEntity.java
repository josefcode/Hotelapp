package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.ImagensDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name  =  "imagens")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ImagensEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(nullable=false)
    private String titulo;

    @Column(nullable=false)
    private String url;

    public ImagensEntity() {
    }

    public ImagensEntity(ImagensDTO imagensDTO) {
        this.id = imagensDTO.getId();
        this.titulo = imagensDTO.getTitulo();
        this.url = imagensDTO.getUrl();
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