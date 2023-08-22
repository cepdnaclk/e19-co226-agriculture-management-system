package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Soil;
import com.spincoders.cropmaster.repositary.SoilRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SoilImplementation implements SoilService{

    @Autowired
    private SoilRepositary soilRepositary;

    @Override
    public Soil saveSoil(Soil soil) {
        return soilRepositary.save(soil);
    }

    @Override
    public Soil getSoilinfoById(int farmlandID) {
        return soilRepositary.findByFarmlandID(farmlandID);

    }
}
