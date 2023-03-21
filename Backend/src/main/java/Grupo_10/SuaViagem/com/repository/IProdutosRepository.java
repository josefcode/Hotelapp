package Grupo_10.SuaViagem.com.repository;

import Grupo_10.SuaViagem.com.model.entity.ProdutosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Temporal;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

@Repository
public interface IProdutosRepository extends JpaRepository <ProdutosEntity, Integer> {

    List<ProdutosEntity> findByCategoriasEntityDescricao(String category);

    List<ProdutosEntity> findByCidadesEntityNome(String cidade);

    @Query("SELECT p FROM ProdutosEntity p JOIN p.cidadesEntity c JOIN p.reservasEntity r WHERE c.nome = :cidade AND r.dataInicial >= :dataInicial AND r.dataFinal <= :dataFinal")
    List<ProdutosEntity> findByCidadeAndDatas(@Param("cidade") String cidade,
                                              @Param("dataInicial") Date dataInicial,
                                              @Param("dataFinal") Date dataFinal);

}