package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Irrigation;

import java.util.List;

public interface IrrigationService {

    public Irrigation saveIrrigation(Irrigation irrigation);

    public List<Irrigation> getAllIrrigation();
}
