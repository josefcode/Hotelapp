package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

public class ReservasDTO {

    private int id_reservas;
    private Time hora_inicio_reserva;
    private Date data_inicial_reserva;
    private Date data_final_reserva;

    public ReservasDTO(ReservasEntity reservasEntity) {
        this.id_reservas = reservasEntity.getId_reservas();
        this.hora_inicio_reserva = reservasEntity.getHora_inicio_reserva();
        this.data_inicial_reserva = reservasEntity.getData_inicial_reserva();
        this.data_final_reserva = reservasEntity.getData_final_reserva();
    }

    public ReservasDTO() {
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
