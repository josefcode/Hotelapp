package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.ReservasDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name  =  "reservas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ReservasEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reservas", nullable = false)
    private int id_reservas;
    @Column(nullable=false, unique = true)
    private Time horaInicial;

    @Column(nullable=false, unique = true)
    @Temporal(TemporalType.DATE)
    private java.util.Date dataInicial;

    @Column(nullable=false, unique = true)
    @Temporal(TemporalType.DATE)
    private java.util.Date dataFinal;

    @ManyToOne
    @JoinColumn(name="cliente_id")
    private ClientesEntity clientesEntity;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ProdutosEntity> produtosEntityList = new ArrayList<>();

    public ReservasEntity() {
    }

    public ReservasEntity(ReservasDTO reservasDTO) {
        this.id_reservas = reservasDTO.getId_reservas();
        this.horaInicial = reservasDTO.getHoraInicial();
        this.dataInicial = reservasDTO.getDataInicial();
        this.dataFinal = reservasDTO.getDataFinal();
    }

    public int getId_reservas() {
        return id_reservas;
    }

    public void setId_reservas(int id_reservas) {
        this.id_reservas = id_reservas;
    }

    public Time getHoraInicial() {
        return horaInicial;
    }

    public void setHoraInicial(Time hora_inicio_reserva) {
        this.horaInicial = hora_inicio_reserva;
    }

    public Date getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(Date dataInicial) {
        this.dataInicial = dataInicial;
    }

    public Date getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(Date dataFinal) {
        this.dataFinal = dataFinal;
    }

    public ClientesEntity getClientesEntity() {
        return clientesEntity;
    }

    public void setClientesEntity(ClientesEntity clientesEntity) {
        this.clientesEntity = clientesEntity;
    }

    public List<ProdutosEntity> getProdutosEntityList() {
        return produtosEntityList;
    }

    public void setProdutosEntityList(List<ProdutosEntity> produtosEntityList) {
        this.produtosEntityList = produtosEntityList;
    }
}
