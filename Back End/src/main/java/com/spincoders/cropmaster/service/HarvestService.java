package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Harvest;

import java.util.List;

public interface HarvestService {

    public Harvest saveHarvest(Harvest harvest);

    public List<Harvest> getAllHarvest();
}
