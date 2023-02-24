package Grupo_10.SuaViagem.com.service.impl;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.CategoryEntity;
import Grupo_10.SuaViagem.com.model.entity.DTO.CategoryDTO;
import Grupo_10.SuaViagem.com.repository.ICategoryRepository;
import Grupo_10.SuaViagem.com.service.IService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements IService<CategoryDTO> {

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public CategoryDTO register(CategoryDTO categoryDTO) {
        CategoryEntity categoryEntity = mapperDTOToEntity(categoryDTO);
        categoryEntity = iCategoryRepository.save(categoryEntity);
        CategoryDTO categoryDTO1 = new CategoryDTO(categoryEntity);
        return categoryDTO1;
    }

    @Override
    public List<CategoryDTO> findAll() {
        List<CategoryEntity> categoryEntities = iCategoryRepository.findAll();
        List<CategoryDTO> categoryDTOS = new ArrayList<>();

        for (CategoryEntity categoryEntity : categoryEntities) {
            CategoryDTO categoryDTO = mapperEntityToDTO(categoryEntity);
            categoryDTOS.add(categoryDTO);
        }
        return categoryDTOS;
    }

    @Override
    public String delete(int id) {
        iCategoryRepository.deleteById(id);
        return "Categoria removida!";
    }

    @Override
    public CategoryDTO edit(CategoryDTO categoryDTO, int id) {
        CategoryEntity categoryEntity = mapperDTOToEntity(categoryDTO);

        if(iCategoryRepository.findById(id).isPresent()) {
            categoryEntity.setId_categorias(id);
            iCategoryRepository.save(categoryEntity);
            return categoryDTO;
        } else {
            iCategoryRepository.save(categoryEntity);
            return categoryDTO;
        }
    }

    @Override
    public CategoryDTO findById(int id) throws NotFoundException {
        CategoryEntity categoryEntity = iCategoryRepository.findById(id).orElseThrow(()-> new NotFoundException("Categoria não encontrada com o id: " + id));
        CategoryDTO categoryDTO = mapperEntityToDTO(categoryEntity);
        return categoryDTO;
    }

    private CategoryEntity mapperDTOToEntity(CategoryDTO categoryDTO){
        ObjectMapper objectMapper = new ObjectMapper();
        CategoryEntity categoryEntity = objectMapper.convertValue(categoryDTO, CategoryEntity.class);
        return categoryEntity;
    }

    private CategoryDTO mapperEntityToDTO(CategoryEntity categoryEntity){
        ObjectMapper objectMapper = new ObjectMapper();
        CategoryDTO categoryDTO = objectMapper.convertValue(categoryEntity, CategoryDTO.class);
        return categoryDTO;
    }
}
