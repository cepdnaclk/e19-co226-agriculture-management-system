package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Irrigation")
public class Irrigation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int systemID;

    @Column(name = "delivery")
    private String delivery;

    @Column(name = "source")
    private String source;

    @Column(name = "method")
    private String method;

    @Column(name = "maintainerNIC")
    private String maintainerNIC;

    public Irrigation() {
    }

    public int getSystemID() {
        return systemID;
    }

    public void setSystemID(int systemID) {
        this.systemID = systemID;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getMaintainerNIC() {
        return maintainerNIC;
    }

    public void setMaintainerNIC(String maintainerNIC) {
        this.maintainerNIC = maintainerNIC;
    }
}
