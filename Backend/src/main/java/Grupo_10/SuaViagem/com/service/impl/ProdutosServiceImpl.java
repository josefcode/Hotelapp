package Grupo_10.SuaViagem.com.service.impl;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.CategoriasEntity;
import Grupo_10.SuaViagem.com.model.entity.CidadesEntity;
import Grupo_10.SuaViagem.com.model.entity.DTO.ProdutosDTO;
import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import Grupo_10.SuaViagem.com.repository.ICategoriasRepository;
import Grupo_10.SuaViagem.com.repository.ICidadesRepository;
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

    @Autowired
    private ICategoriasRepository iCategoriasRepository;

    @Autowired
    private ICidadesRepository iCidadesRepository;


    @Override
    public ProdutosDTO register(ProdutosDTO produtosDTO) throws NotFoundException {
        CategoriasEntity categoriasEntity = iCategoriasRepository.findById(produtosDTO.getCategoriasEntity().getId_categorias())
                .orElseThrow(() -> new NotFoundException("Categoria não encontrada"));
        CidadesEntity cidadeEntity = iCidadesRepository.findById(produtosDTO.getCidadesEntity().getId_cidades())
                .orElseThrow(() -> new NotFoundException("Cidade não encontrada"));

        produtosDTO.setCidadesEntity(cidadeEntity);
        produtosDTO.setCategoriasEntity(categoriasEntity);
        produtosDTO.getCategoriasEntity().getId_categorias(); // verificação adicionada
        produtosDTO.getCidadesEntity().getId_cidades(); // verificação adicionada

        return mapperEntityToDTO(iProdutosRepository.save(mapperDTOToEntity(produtosDTO)));
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
            produtosEntity.setId_produtos(id);
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

    public List<ProdutosDTO> findByCategoriasEntityDescricao(String category) {
        List<ProdutosEntity> produtosEntities = iProdutosRepository.findByCategoriasEntityDescricao(category);
        List<ProdutosDTO> produtosDTOS = new ArrayList<>();

        for (ProdutosEntity produtosEntity : produtosEntities) {
            ProdutosDTO produtosDTO = mapperEntityToDTO(produtosEntity);
            produtosDTOS.add(produtosDTO);
        }
        return produtosDTOS;
    }

    public List<ProdutosDTO> findByCidadesEntityNome(String cidade) {
        List<ProdutosEntity> produtosEntities = iProdutosRepository.findByCidadesEntityNome(cidade);
        List<ProdutosDTO> produtosDTOS = new ArrayList<>();

        for (ProdutosEntity produtosEntity : produtosEntities) {
            ProdutosDTO produtosDTO = mapperEntityToDTO(produtosEntity);
            produtosDTOS.add(produtosDTO);
        }
        return produtosDTOS;
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