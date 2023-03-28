package Grupo_10.SuaViagem.com.service.impl;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.DTO.ReservasDTO;
import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;
import Grupo_10.SuaViagem.com.repository.IProdutosRepository;
import Grupo_10.SuaViagem.com.repository.IReservasRepository;
import Grupo_10.SuaViagem.com.service.IService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReservasServiceImpl implements IService<ReservasDTO> {

    @Autowired
    private IReservasRepository iReservasRepository;

    @Autowired
    private IProdutosRepository iProdutosRepository;

    @Override
    public ReservasDTO register(ReservasDTO reservasDTO) throws NotFoundException {
        if (reservasDTO.getProdutosEntity() == null) {
            throw new NotFoundException("O id do produto não pode ser nulo.");
        }

        // Recupera o objeto de produto correspondente ao ID do produto fornecido
        ProdutosEntity produtosEntity = iProdutosRepository.findById(reservasDTO.getProdutosEntity().getId_produtos())
                .orElseThrow(() -> new NotFoundException("Produto não encontrado"));

        Date dataInicial = reservasDTO.getDataInicial();
        Date dataFinal = reservasDTO.getDataFinal();

        // Verifica se já existe uma reserva para o produto no intervalo de datas fornecido
        boolean hasConflict = produtosEntity.getReservasEntity()
                .stream()
                .anyMatch(r -> {
                    Date rDataInicial = r.getDataInicial();
                    Date rDataFinal = r.getDataFinal();
                    return (dataInicial.after(rDataInicial) && dataInicial.before(rDataFinal))
                            || (dataFinal.after(rDataInicial) && dataFinal.before(rDataFinal))
                            || dataInicial.equals(rDataInicial)
                            || dataFinal.equals(rDataFinal);
                });

        if (hasConflict) {
            throw new NotFoundException("Já existe uma reserva para este produto no intervalo de datas fornecido.");
        }

        // Adiciona a nova reserva ao array de reservas do produto
        ReservasEntity reservasEntity = mapperDTOToEntity(reservasDTO);
        produtosEntity.getReservasEntity().add(reservasEntity);

        // Salva o objeto de produto atualizado no banco de dados
        iProdutosRepository.save(produtosEntity);

        return mapperEntityToDTO(reservasEntity);
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
