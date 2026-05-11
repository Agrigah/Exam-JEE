package ma.enset.agrigahaya.examjee.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import ma.enset.agrigahaya.examjee.enums.FuelType;
import ma.enset.agrigahaya.examjee.enums.GearBox;
import ma.enset.agrigahaya.examjee.enums.MotorcycleType;
import ma.enset.agrigahaya.examjee.enums.VehicleStatus;
import ma.enset.agrigahaya.examjee.enums.VehicleType;

import java.math.BigDecimal;
import java.time.LocalDate;

public record VehicleRequestDTO(
        @NotBlank String marque,
        @NotBlank String modele,
        @NotBlank String matricule,
        @NotNull @Positive BigDecimal prixParJour,
        @NotNull LocalDate dateMiseEnService,
        VehicleStatus statut,
        @NotNull Long agencyId,
        @NotNull VehicleType type,
        Integer nombrePortes,
        FuelType typeCarburant,
        GearBox boiteVitesse,
        Integer cylindree,
        MotorcycleType typeMoto,
        Boolean casqueInclus
) {
}
