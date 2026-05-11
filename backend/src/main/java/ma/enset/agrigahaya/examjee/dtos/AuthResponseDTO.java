package ma.enset.agrigahaya.examjee.dtos;

import ma.enset.agrigahaya.examjee.enums.UserRole;

public record AuthResponseDTO(
        String token,
        String tokenType,
        String username,
        String fullName,
        UserRole role
) {
}
