package Grupo_10.SuaViagem.com.controller;

import Grupo_10.SuaViagem.com.exception.NotFoundException;
import Grupo_10.SuaViagem.com.model.entity.DTO.CategoryDTO;
import Grupo_10.SuaViagem.com.service.impl.CategoryServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("/category")
@RestController
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    @PostMapping("/register")
    @Operation(
            summary = "Registra uma categoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Categoria registrada com sucesso!"
                    )
            }
    )
    public ResponseEntity<CategoryDTO> register(@RequestBody CategoryDTO categoryDTO) throws NotFoundException {
        ResponseEntity responseEntity = null;

        if(categoryDTO != null) {
            CategoryDTO categoryDTO1 = categoryService.register(categoryDTO);
            responseEntity = new ResponseEntity<>(categoryDTO1, HttpStatus.OK);
        }
        return responseEntity;
    }
    @GetMapping("/findAll")
    @Operation(
            summary = "Localiza todos registros da categoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Categorias localizadas com sucesso!"
                    )
            }
    )
    public List<CategoryDTO> findAll() {
        return categoryService.findAll();
    }

    @DeleteMapping("/{id}")
    @Operation(
            summary = "Deleta registro específico da categoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Categoria deletada com sucesso!"
                    )
            }
    )
    public String delete(@PathVariable int id){
        return categoryService.delete(id);
    }

    @PutMapping("/{id}")
    @Operation(
            summary = "Edita registro específico da categoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Categoria editada com sucesso!"
                    )
            }
    )
    public CategoryDTO edit(@RequestBody CategoryDTO categoryDTO,@PathVariable int id){
        return categoryService.edit(categoryDTO, id);
    }

    @GetMapping("/{id}")
    @Operation(
            summary = "Localiza registro específico da categoria",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Categoria localizada com sucesso!"
                    )
            }
    )
    public ResponseEntity<CategoryDTO> findById(@PathVariable int id) throws NotFoundException {
        return new ResponseEntity<>(categoryService.findById(id), HttpStatus.OK);
    }
}