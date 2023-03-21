package Grupo_10.SuaViagem.com.model.entity;

import Grupo_10.SuaViagem.com.model.entity.DTO.ClientesDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="clientes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ClientesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_clientes", nullable = false)
    private int id_clientes;

    @ManyToOne
    @JoinColumn(name = "user_entity_id")
    private UserEntity userEntity;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_clientes")
    private List<ReservasEntity> reservasEntityList = new ArrayList<>();

    public ClientesEntity() {
    }

    public ClientesEntity(ClientesDTO clientesDTO) {
        this.userEntity = clientesDTO.getUserEntity();
        this.reservasEntityList = clientesDTO.getReservasEntityList();
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
