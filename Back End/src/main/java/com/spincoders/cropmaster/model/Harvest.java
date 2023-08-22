package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Harvest")
public class Harvest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int methodID;

    @Column(name = "method")
    private String method;

    @Column(name = "time")
    private String time;

    @Column(name = "cost")
    private String cost;

    public Harvest() {
    }

    public int getMethodID() {
        return methodID;
    }

    public void setMethodID(int methodID) {
        this.methodID = methodID;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }
}
