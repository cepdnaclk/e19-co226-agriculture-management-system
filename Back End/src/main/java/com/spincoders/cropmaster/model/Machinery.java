package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Machinery")
public class Machinery {

    @Id
    @Column(name = "machineID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int machineID;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "cost")
    private String cost;

    @Column(name = "envir_impact")
    private String envir_impact;

    @Column(name = "safely")
    private String safely;

    public Machinery() {
    }

    public int getMachineID() {
        return machineID;
    }

    public void setMachineID(int machineID) {
        this.machineID = machineID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getEnvir_impact() {
        return envir_impact;
    }

    public void setEnvir_impact(String envir_impact) {
        this.envir_impact = envir_impact;
    }

    public String getSafely() {
        return safely;
    }

    public void setSafely(String safely) {
        this.safely = safely;
    }
}

