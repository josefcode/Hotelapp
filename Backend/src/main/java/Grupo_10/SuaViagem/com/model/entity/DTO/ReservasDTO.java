package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import java.sql.Time;
import java.util.Date;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservasDTO {

    @Column(nullable=false)
    private int id_reservas;
    @Column(nullable=false)
    private Time horaInicial;

    @Column(nullable=false)
    private java.util.Date dataInicial;

    @Column(nullable=false)
    private java.util.Date dataFinal;

    public ReservasDTO(ReservasEntity reservasEntity) {
        this.id_reservas = reservasEntity.getId_reservas();
        this.horaInicial = reservasEntity.getHoraInicial();
        this.dataInicial = reservasEntity.getDataInicial();
        this.dataFinal = reservasEntity.getDataFinal();
    }

    public ReservasDTO() {
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
}
