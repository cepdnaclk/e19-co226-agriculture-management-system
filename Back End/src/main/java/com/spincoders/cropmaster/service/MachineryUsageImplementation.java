package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.MachineryUsage;
import com.spincoders.cropmaster.repositary.MachineryRepositary;
import com.spincoders.cropmaster.repositary.MachineryUsageRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MachineryUsageImplementation implements MachineryUsageService{

    @Autowired
    private MachineryUsageRepositary machineryUsageRepositary;

    @Override
    public MachineryUsage saveMachineryUsage(MachineryUsage machineryUsage) {
        return machineryUsageRepositary.save(machineryUsage);
    }

    @Override
    public List<MachineryUsage> getAllMachineryUsage() {
        return machineryUsageRepositary.findAll();
    }

    @Override
    public List<Object[]> getMachineIdsAndNicsByFarmlandID(int farmlandID) {
        return machineryUsageRepositary.findMachineIdsAndNicsByFarmlandID(farmlandID);
    }

    @Override
    public List<MachineryUsage> getMachineByFarmland(int farmlandID) {
        return machineryUsageRepositary.findMachineryUsageByFarmlandID(farmlandID);
    }
}
