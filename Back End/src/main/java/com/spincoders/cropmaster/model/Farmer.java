package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Farmer")
public class Farmer {

    @Id
    @Column(name = "farmerID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int farmerID;

    @Column(name = "nic")
    private String nic;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "experince")
    private String experince;

    public Farmer() {
    }

    public int getFarmerID() {
        return farmerID;
    }

    public void setFarmerID(int farmerID) {
        this.farmerID = farmerID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getExperince() {
        return experince;
    }

    public void setExperince(String experince) {
        this.experince = experince;
    }
}
