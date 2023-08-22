package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "crop")
public class Crop {

    @Id
    @Column(name = "cropID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cropId;

    @Column(name = "name")
    private String name;

    @Column(name = "variety")
    private String variety;

    public Crop() {
    }

    public int getCropId() {
        return cropId;
    }

    public void setCropId(int cropId) {
        this.cropId = cropId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVariety() {
        return variety;
    }

    public void setVariety(String variety) {
        this.variety = variety;
    }
}
