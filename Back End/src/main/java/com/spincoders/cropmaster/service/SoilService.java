package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Soil;

import java.util.Optional;

public interface SoilService {

    public Soil saveSoil(Soil soil);

    public Soil getSoilinfoById(int farmlandID);

}
