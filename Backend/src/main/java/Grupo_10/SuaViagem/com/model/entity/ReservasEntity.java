package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.ReservasDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name  =  "reservas")
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservasEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reservas", nullable = false)
    private int id_reservas;
    @Column(nullable=false)
    @JsonFormat(pattern = "HH:mm:ss")
    private Time hora_inicio_reserva;

    @Column(nullable=false)
    private Date data_inicial_reserva;

    @Column(nullable=false)
    private Date data_final_reserva;

    @ManyToOne
    @JoinColumn(name="cliente_id")
    private ClientesEntity clientesEntity;

    public ReservasEntity() {
    }

    public ReservasEntity(ReservasDTO reservasDTO) {
        this.id_reservas = reservasDTO.getId_reservas();
        this.hora_inicio_reserva = reservasDTO.getHora_inicio_reserva();
        this.data_inicial_reserva = reservasDTO.getData_inicial_reserva();
        this.data_final_reserva = reservasDTO.getData_final_reserva();
    }

    public int getId_reservas() {
        return id_reservas;
    }

    public void setId_reservas(int id_reservas) {
        this.id_reservas = id_reservas;
    }

    public Time getHora_inicio_reserva() {
        return hora_inicio_reserva;
    }

    public void setHora_inicio_reserva(Time hora_inicio_reserva) {
        this.hora_inicio_reserva = hora_inicio_reserva;
    }

    public Date getData_inicial_reserva() {
        return data_inicial_reserva;
    }

    public void setData_inicial_reserva(Date data_inicial_reserva) {
        this.data_inicial_reserva = data_inicial_reserva;
    }

    public Date getData_final_reserva() {
        return data_final_reserva;
    }

    public void setData_final_reserva(Date data_final_reserva) {
        this.data_final_reserva = data_final_reserva;
    }
}
