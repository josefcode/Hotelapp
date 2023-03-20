package Grupo_10.SuaViagem.com.model.entity.DTO;

import Grupo_10.SuaViagem.com.model.entity.ClientesEntity;
import Grupo_10.SuaViagem.com.model.entity.ReservasEntity;
import Grupo_10.SuaViagem.com.model.entity.UserEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Column;
import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ClientesDTO {

    @Column(nullable=false)
    private UserEntity userEntity;

    @Column(nullable=false)
    private List<ReservasEntity> reservasEntityList = new ArrayList<>();

    public ClientesDTO() {
    }

    public ClientesDTO(ClientesEntity clientesEntity) {
        this.userEntity = clientesEntity.getUserEntity();
        this.reservasEntityList = clientesEntity.getReservasEntityList();
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public List<ReservasEntity> getReservasEntityList() {
        return reservasEntityList;
    }

    public void setReservasEntityList(List<ReservasEntity> reservasEntityList) {
        this.reservasEntityList = reservasEntityList;
    }
}
