package ma.enset.agrigahaya.examjee.dtos;

import ma.enset.agrigahaya.examjee.enums.FuelType;
import ma.enset.agrigahaya.examjee.enums.GearBox;
import ma.enset.agrigahaya.examjee.enums.MotorcycleType;
import ma.enset.agrigahaya.examjee.enums.VehicleStatus;
import ma.enset.agrigahaya.examjee.enums.VehicleType;

import java.math.BigDecimal;
import java.time.LocalDate;

public record VehicleResponseDTO(
        Long id,
        String marque,
        String modele,
        String matricule,
        BigDecimal prixParJour,
        LocalDate dateMiseEnService,
        VehicleStatus statut,
        Long agencyId,
        String agencyName,
        VehicleType type,
        Integer nombrePortes,
        FuelType typeCarburant,
        GearBox boiteVitesse,
        Integer cylindree,
        MotorcycleType typeMoto,
        Boolean casqueInclus
) {
}
