package Grupo_10.SuaViagem.com.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DBconnection {

    public static void main(String[] args) throws SQLException {

        Connection connection = null;

        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/banco", "usuario", "senha");
            ResultSet  usuario = connection.createStatement().executeQuery("SELECT * FROM USER");

            while (usuario.next()) {
                System.out.println("Nome Usuário: " + usuario.getString("nome"));
            }

        } catch (ClassNotFoundException ex) {

            System.out.println("Driver do banco de dados não localizado");

        } catch (SQLException e) {

            throw new RuntimeException("Ocorreu um erro ao acessar o banco: " + e);

        } finally {

            if(connection != null) {
                connection.close();

            }
        }

    }
}
