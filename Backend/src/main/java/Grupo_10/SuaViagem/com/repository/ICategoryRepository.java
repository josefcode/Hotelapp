package Grupo_10.SuaViagem.com.repository;

import Grupo_10.SuaViagem.com.model.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository <CategoryEntity, Integer> {
}
