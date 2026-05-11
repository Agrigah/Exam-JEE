package ma.enset.agrigahaya.examjee.repositories;

import ma.enset.agrigahaya.examjee.entities.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgencyRepository extends JpaRepository<Agency, Long> {
    boolean existsByNomIgnoreCase(String nom);
}
