package com.spincoders.cropmaster.model;

import jakarta.persistence.*;

@Entity
@Table(name = "weather")
public class Weather {

    @Id
    private int farmlandID;

    @Column(name = "temperature")
    private String temperature;

    @Column(name = "rainfall")
    private String rainfall;

    @Column(name = "humidity")
    private String humidity;

    @Column(name = "windspeed")
    private String windspeed;

    @Column(name = "radiation")
    private String radiation;

    public Weather() {
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

    public String getRainfall() {
        return rainfall;
    }

    public void setRainfall(String rainfall) {
        this.rainfall = rainfall;
    }

    public String getHumidity() {
        return humidity;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getWindspeed() {
        return windspeed;
    }

    public void setWindspeed(String windspeed) {
        this.windspeed = windspeed;
    }

    public String getRadiation() {
        return radiation;
    }

    public void setRadiation(String radiation) {
        this.radiation = radiation;
    }
}
