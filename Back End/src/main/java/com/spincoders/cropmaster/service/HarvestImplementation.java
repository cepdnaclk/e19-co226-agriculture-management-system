package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Harvest;
import com.spincoders.cropmaster.repositary.HarvestRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HarvestImplementation implements HarvestService{

    @Autowired
    private HarvestRepositary harvestRepositary;


    @Override
    public Harvest saveHarvest(Harvest harvest) {
        return harvestRepositary.save(harvest);
    }

    @Override
    public List<Harvest> getAllHarvest() {
        return harvestRepositary.findAll();
    }
}
