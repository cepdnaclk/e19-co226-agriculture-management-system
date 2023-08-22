package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Soil")
public class Soil {
    @Id
    private int farmlandID;

    @Column(name = "temperature")
    private String temperature;

    @Column(name = "ph")
    private String ph;

    @Column(name = "structure")
    private String structure;

    @Column(name = "waterholdig")
    private String waterholding;

    @Column(name = "nutrition")
    private String nutrition;

    public Soil() {
    }

    public int getFarmlandID() {
        return farmlandID;
    }

    public void setFarmlandID(int farmlandID) {
        this.farmlandID = farmlandID;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getPh() {
        return ph;
    }

    public void setPh(String ph) {
        this.ph = ph;
    }

    public String getStructure() {
        return structure;
    }

    public void setStructure(String structure) {
        this.structure = structure;
    }

    public String getWaterholding() {
        return waterholding;
    }

    public void setWaterholding(String waterholding) {
        this.waterholding = waterholding;
    }

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }
}
