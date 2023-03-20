package Grupo_10.SuaViagem.com.repository;

import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProdutosRepository extends JpaRepository <ProdutosEntity, Integer> {

    List<ProdutosEntity> findByCategoriasEntityDescricao(String category);

    List<ProdutosEntity> findByCidadesEntityNome(String cidade);

//    List<ProdutosEntity> findByCidadeEData(String cidade, LocalDate dataInicio, LocalDate dataFim);

}