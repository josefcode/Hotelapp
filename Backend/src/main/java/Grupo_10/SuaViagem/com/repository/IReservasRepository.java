package Grupo_10.SuaViagem.com.repository;

import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.util.Date;

@Repository
public interface IReservasRepository extends JpaRepository<ReservasEntity, Integer> {

    ReservasEntity findByHoraInicialAndDataInicialAndDataFinal(Time horaInicial, Date dataInicial, Date dataFinal);

}
