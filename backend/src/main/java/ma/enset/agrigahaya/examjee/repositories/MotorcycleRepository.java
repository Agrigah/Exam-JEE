package ma.enset.agrigahaya.examjee.repositories;

import ma.enset.agrigahaya.examjee.entities.Motorcycle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotorcycleRepository extends JpaRepository<Motorcycle, Long> {
}
