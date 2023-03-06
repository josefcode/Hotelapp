package Grupo_10.SuaViagem.com.JDBC;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.List;
import Grupo_10.SuaViagem.com.model.entity.DTO.CidadesDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AdicionarCidadesFromJson {

    public static void adicionarCidades() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            List<CidadesDTO> cidadesDTOList = objectMapper.readValue(new FileReader("C:/Users/marcelo.muniz/Documents/Estudos/CTD/SuaViagem.com/grupo-10/Backend/src/main/java/Grupo_10/SuaViagem/com/JDBC/cidades.json"), new TypeReference<List<CidadesDTO>>() {});

            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/db_projeto_integrador", "root", "123456");

            String insertCidadeSql = "INSERT INTO cidades (id, nome, sigla, pais) VALUES (?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertCidadeSql);
            for (CidadesDTO cidadesDTO : cidadesDTOList) {
                preparedStatement.setInt(1, cidadesDTO.getId());
                preparedStatement.setString(2, cidadesDTO.getNome());
                preparedStatement.setString(3, cidadesDTO.getSigla());
                preparedStatement.setString(4, cidadesDTO.getPais());
                preparedStatement.executeUpdate();
            }

            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}