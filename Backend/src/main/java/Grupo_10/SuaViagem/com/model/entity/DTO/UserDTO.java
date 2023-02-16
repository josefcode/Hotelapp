package Grupo_10.SuaViagem.com.model.entity.DTO;

public class UserDTO {

    private String name;
    private String sobrenome;
    private String username;
    private String email;
    private String password;

//    private UserRoles userRoles;


    public UserDTO() {
    }

    public UserDTO(String name, String sobrenome, String username, String email, String password) {
        this.name = name;
        this.sobrenome = sobrenome;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
