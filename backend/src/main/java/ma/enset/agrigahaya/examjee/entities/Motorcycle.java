package ma.enset.agrigahaya.examjee.entities;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import ma.enset.agrigahaya.examjee.enums.MotorcycleType;
import ma.enset.agrigahaya.examjee.enums.VehicleType;

@Entity
@DiscriminatorValue("MOTO")
public class Motorcycle extends Vehicle {
    @Column(nullable = false)
    private Integer cylindree;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MotorcycleType typeMoto;

    @Column(nullable = false)
    private Boolean casqueInclus = Boolean.FALSE;

    @Override
    public VehicleType getType() {
        return VehicleType.MOTO;
    }

    public Integer getCylindree() {
        return cylindree;
    }

    public void setCylindree(Integer cylindree) {
        this.cylindree = cylindree;
    }

    public MotorcycleType getTypeMoto() {
        return typeMoto;
    }

    public void setTypeMoto(MotorcycleType typeMoto) {
        this.typeMoto = typeMoto;
    }

    public Boolean getCasqueInclus() {
        return casqueInclus;
    }

    public void setCasqueInclus(Boolean casqueInclus) {
        this.casqueInclus = casqueInclus;
    }
}
