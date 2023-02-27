package Grupo_10.SuaViagem.com.controller;

import Grupo_10.SuaViagem.com.model.entity.DTO.UserDTO;
import Grupo_10.SuaViagem.com.security.AuthenticationResponse;
import Grupo_10.SuaViagem.com.security.JwtUtil;
import Grupo_10.SuaViagem.com.service.impl.UserServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    @Operation(
            summary = "Registra usuário",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Usuário autenticado com sucesso"
                    )
            }
    )
    public ResponseEntity<String> create(@RequestBody UserDTO userDTO){

        Boolean create = userService.create(userDTO);

        if(create){
            return new ResponseEntity<>("Usário registrado com sucesso", HttpStatus.CREATED);
        }

        return new ResponseEntity<>("Problemas ao registrar o usuário", HttpStatus.CONFLICT);
    }

    @PostMapping("/authenticate")
    @Operation(
            summary = "Autentica usuário",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Usuário autenticado com sucesso"
                    )
            }
    )
    public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody UserDTO userDTO) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userDTO.getUsername(), userDTO.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }
        final UserDetails userDetails = userService.loadUserByUsername(userDTO.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}