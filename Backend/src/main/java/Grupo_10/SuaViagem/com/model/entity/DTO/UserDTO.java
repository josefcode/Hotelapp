package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.enums.UserRoles;
import Grupo_10.SuaViagem.com.model.entity.FuncoesEntity;
import Grupo_10.SuaViagem.com.model.entity.UserEntity;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserDTO {

    @NotNull
    @Column(nullable = false)
    private String nome;
    @NotNull
    @Column(nullable = false, unique = true)
    private String sobrenome;
    @NotNull
    @Column(nullable = false, unique = true)
    private String email;
    @NotNull
    @Size(min = 6, max = 12)
    @Column(nullable = false)
    private String senha;
    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRoles userRoles;

    private FuncoesEntity funcoesEntity;

    public UserDTO() {
    }

    public UserDTO(UserEntity userEntity) {
        this.nome = userEntity.getNome();
        this.sobrenome = userEntity.getSobrenome();
        this.email = userEntity.getEmail();
        this.senha = userEntity.getSenha();
        this.userRoles = userEntity.getUserRoles();
        this.funcoesEntity = userEntity.getFuncoesEntity();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public UserRoles getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(UserRoles userRoles) {
        this.userRoles = userRoles;
    }

    public FuncoesEntity getFuncoesEntity() {
        return funcoesEntity;
    }

    public void setFuncoesEntity(FuncoesEntity funcoesEntity) {
        this.funcoesEntity = funcoesEntity;
    }
}