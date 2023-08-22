package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "chemical")
public class Chemical {

    @Id
    @Column(name = "chemicalID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chemicalID;

    @Column(name = "name")
    private String name;

    @Column(name = "handling")
    private String handling;

    @Column(name = "usageInfo")
    private String usage;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "safety")
    private String safety;

    @Column(name = "envir_impact")
    private String envir_impact;

    public Chemical() {
    }

    public int getChemicalID() {
        return chemicalID;
    }

    public void setChemicalID(int chemicalID) {
        this.chemicalID = chemicalID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHandling() {
        return handling;
    }

    public void setHandling(String handling) {
        this.handling = handling;
    }

    public String getUsage() {
        return usage;
    }

    public void setUsage(String usage) {
        this.usage = usage;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getSafety() {
        return safety;
    }

    public void setSafety(String safety) {
        this.safety = safety;
    }

    public String getEnvir_impact() {
        return envir_impact;
    }

    public void setEnvir_impact(String envir_impact) {
        this.envir_impact = envir_impact;
    }
}
