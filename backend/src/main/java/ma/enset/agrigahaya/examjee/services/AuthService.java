package ma.enset.agrigahaya.examjee.services;

import ma.enset.agrigahaya.examjee.dtos.AuthRequestDTO;
import ma.enset.agrigahaya.examjee.dtos.AuthResponseDTO;
import ma.enset.agrigahaya.examjee.dtos.RegisterRequestDTO;

public interface AuthService {
    AuthResponseDTO authenticate(AuthRequestDTO dto);
    AuthResponseDTO register(RegisterRequestDTO dto);
}
