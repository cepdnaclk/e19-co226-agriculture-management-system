package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "chemicalusage")
public class ChemicalUsage {
    @Id
    @Column(name = "chemicalusageID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int chemicalUsageID;

    @Column(name = "nic")
    private String nic;

    @Column(name = "farmlandID")
    private int farmlandID;

    @Column(name = "chemicalID")
    private int chemicalID;

    private String chemicalName;

    private String date;

    public ChemicalUsage() {
    }

    public int getChemicalUsageID() {
        return chemicalUsageID;
    }

    public void setChemicalUsageID(int chemicalUsageID) {
        this.chemicalUsageID = chemicalUsageID;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public int getFarmlandID() {
        return farmlandID;
    }

    public void setFarmlandID(int farmlandID) {
        this.farmlandID = farmlandID;
    }

    public int getChemicalID() {
        return chemicalID;
    }

    public void setChemicalID(int chemicalID) {
        this.chemicalID = chemicalID;
    }

    public String getChemicalName() {
        return chemicalName;
    }

    public void setChemicalName(String chemicalName) {
        this.chemicalName = chemicalName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
