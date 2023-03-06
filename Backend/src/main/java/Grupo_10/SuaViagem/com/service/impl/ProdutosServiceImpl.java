package Grupo_10.SuaViagem.com.service.impl;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.DTO.ProdutosDTO;
import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import Grupo_10.SuaViagem.com.repository.IProdutosRepository;
import Grupo_10.SuaViagem.com.service.IService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProdutosServiceImpl implements IService<ProdutosDTO> {

    @Autowired
    private IProdutosRepository iProdutosRepository;

    @Override
    public ProdutosDTO register(ProdutosDTO produtosDTO) throws NotFoundException {
        ProdutosEntity produtosEntity = mapperDTOToEntity(produtosDTO);
        produtosEntity = iProdutosRepository.save(produtosEntity);
        ProdutosDTO produtosDTO1 = new ProdutosDTO(produtosEntity);
        return produtosDTO1;
    }

    @Override
    public List<ProdutosDTO> findAll() {
        List<ProdutosEntity> produtosEntities = iProdutosRepository.findAll();
        List<ProdutosDTO> produtosDTOS = new ArrayList<>();

        for (ProdutosEntity produtosEntity : produtosEntities) {
            ProdutosDTO produtosDTO = mapperEntityToDTO(produtosEntity);
            produtosDTOS.add(produtosDTO);
        }
        return produtosDTOS;
    }

    @Override
    public String delete(int id) {
        iProdutosRepository.deleteById(id);
        return "Produto removido!";
    }

    @Override
    public ProdutosDTO edit(ProdutosDTO produtosDTO, int id) {
        ProdutosEntity produtosEntity = mapperDTOToEntity(produtosDTO);

        if(iProdutosRepository.findById(id).isPresent()) {
            produtosEntity.setId(id);
            iProdutosRepository.save(produtosEntity);
            return produtosDTO;
        } else {
            iProdutosRepository.save(produtosEntity);
            return produtosDTO;
        }    }

    @Override
    public ProdutosDTO findById(int id) throws NotFoundException {
        ProdutosEntity produtosEntity = iProdutosRepository.findById(id).orElseThrow(()-> new NotFoundException("Produto não encontrado com o id: " + id));
        ProdutosDTO produtosDTO = mapperEntityToDTO(produtosEntity);
        return produtosDTO;
    }

    private ProdutosEntity mapperDTOToEntity(ProdutosDTO produtosDTO){
        ObjectMapper objectMapper = new ObjectMapper();
        ProdutosEntity produtosEntity = objectMapper.convertValue(produtosDTO, ProdutosEntity.class);
        return produtosEntity;
    }

    private ProdutosDTO mapperEntityToDTO(ProdutosEntity produtosEntity){
        ObjectMapper objectMapper = new ObjectMapper();
        ProdutosDTO produtosDTO = objectMapper.convertValue(produtosEntity, ProdutosDTO.class);
        return produtosDTO;
    }
}
