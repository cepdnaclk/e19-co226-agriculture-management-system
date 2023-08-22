package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.MachineryUsage;

import java.util.List;

public interface MachineryUsageService {

    public MachineryUsage saveMachineryUsage(MachineryUsage machineryUsage);

    public List<MachineryUsage> getAllMachineryUsage();

    public List<Object[]> getMachineIdsAndNicsByFarmlandID(int farmlandID);

    public List<MachineryUsage> getMachineByFarmland(int farmlandID);

}
