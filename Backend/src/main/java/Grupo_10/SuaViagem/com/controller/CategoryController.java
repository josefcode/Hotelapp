package Grupo_10.SuaViagem.com.controller;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.DTO.CategoryDTO;
import Grupo_10.SuaViagem.com.service.impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    @PostMapping("/register")
    public ResponseEntity<CategoryDTO> register(@RequestBody CategoryDTO categoryDTO) throws NotFoundException {
        ResponseEntity responseEntity;


        CategoryDTO categoryDTO1 = categoryService.register(null);
        responseEntity = new ResponseEntity<>(categoryDTO1, HttpStatus.OK);

        return responseEntity;
    }

    @GetMapping("/findAll")
    public List<CategoryDTO> findAll() {
        return categoryService.findAll();
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        return categoryService.delete(id);
    }

    @PutMapping("/{id}")
    public CategoryDTO edit(@RequestBody CategoryDTO categoryDTO,@PathVariable Integer id){
        return categoryService.edit(categoryDTO, id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoryDTO> findById(@PathVariable int id) throws NotFoundException {
        return new ResponseEntity<>(categoryService.findById(id), HttpStatus.OK);
    }
}
