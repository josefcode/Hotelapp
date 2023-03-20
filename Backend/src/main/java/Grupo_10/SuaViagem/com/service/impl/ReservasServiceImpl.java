package Grupo_10.SuaViagem.com.service.impl;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.DTO.ReservasDTO;
import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;
import Grupo_10.SuaViagem.com.repository.IReservasRepository;
import Grupo_10.SuaViagem.com.service.IService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservasServiceImpl implements IService<ReservasDTO> {

    @Autowired
    private IReservasRepository iReservasRepository;

    @Override
    public ReservasDTO register(ReservasDTO reservasDTO) {

        ReservasEntity reservasEntity = mapperDTOToEntity(reservasDTO);
        reservasEntity = iReservasRepository.save(reservasEntity);
        ReservasDTO reservasDTO1 = new ReservasDTO(reservasEntity);
        return reservasDTO1;
    }


    @Override
    public List<ReservasDTO> findAll() {
        List<ReservasEntity> reservasEntities = iReservasRepository.findAll();
        List<ReservasDTO> reservasDTOS = new ArrayList<>();

        for (ReservasEntity reservasEntity : reservasEntities){
            ReservasDTO reservasDTO = mapperEntityToDTO(reservasEntity);
            reservasDTOS.add(reservasDTO);
        }
        return reservasDTOS;
    }

    @Override
    public String delete(int id) {
        iReservasRepository.deleteById(id);
        return "Reserva removida!";
    }

    @Override
    public ReservasDTO edit(ReservasDTO reservasDTO, int id) {
        ReservasEntity reservasEntity = mapperDTOToEntity(reservasDTO);

        if(iReservasRepository.findById(id).isPresent()) {
            reservasEntity.setId_reservas(id);
            iReservasRepository.save(reservasEntity);
            return reservasDTO;
        } else {
            iReservasRepository.save(reservasEntity);
            return reservasDTO;
        }
    }

    @Override
    public ReservasDTO findById(int id) throws NotFoundException {
        ReservasEntity reservasEntity = iReservasRepository.findById(id).orElseThrow(()-> new org.webjars.NotFoundException("Reserva não encontrada com o id: " + id));
        ReservasDTO reservasDTO = mapperEntityToDTO(reservasEntity);
        return reservasDTO;
    }

    private ReservasEntity mapperDTOToEntity(ReservasDTO reservasDTO){
        ObjectMapper objectMapper = new ObjectMapper();
        ReservasEntity reservasEntity = objectMapper.convertValue(reservasDTO, ReservasEntity.class);
        return reservasEntity;
    }

    private ReservasDTO mapperEntityToDTO(ReservasEntity reservasEntity) {
        ObjectMapper objectMapper = new ObjectMapper();
        ReservasDTO reservasDTO = objectMapper.convertValue(reservasEntity, ReservasDTO.class);
        return reservasDTO;
    }
}
