package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Machinery;

import java.util.List;

public interface MachineryService {

    public Machinery saveMachinery(Machinery machinery);

    public List<Machinery> getAllMachinery();
}
