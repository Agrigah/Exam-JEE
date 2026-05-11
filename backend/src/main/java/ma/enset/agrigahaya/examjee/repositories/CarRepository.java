package ma.enset.agrigahaya.examjee.repositories;

import ma.enset.agrigahaya.examjee.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}
