package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Farmland;
import com.spincoders.cropmaster.repositary.FarmLandRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmLandImplementaion implements FarmLandService{

    @Autowired
    private FarmLandRepositary farmLandRepositary;

    @Override
    public Farmland saveFarmland(Farmland farmland) {
        return farmLandRepositary.save(farmland);
    }

    @Override
    public List<Farmland> getAllFarmLand() {
        return farmLandRepositary.findAll();
    }

    @Override
    public List<Farmland> getCropFarmland(String nic) {
        return farmLandRepositary.findCropLand(nic);
    }

    @Override
    public List<Farmland> getUncropFarmland(String nic) {
        return farmLandRepositary.findUncropLand(nic);
    }

    @Override
    public Farmland updateAssignedCrop(int farmlandId, int cropId) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            // Update the assigned crop
            farmland.setCropID(cropId);
            return farmLandRepositary.save(farmland);
        }
        return null;
    }

    @Override
    public Farmland updateAssignedIrrigation(int farmlandId, int irrigationId) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            // Update the assigned irrigation
            farmland.setIrrigationID(irrigationId);
            return farmLandRepositary.save(farmland);
        }
        return null;
    }

    @Override
    public Farmland updateAssignedStorage(int farmlandId, int storageId) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            // Update the assigned storage
            farmland.setStorageID(storageId);
            return farmLandRepositary.save(farmland);
        }
        return null;
    }

    @Override
    public Farmland updateAssignedHarvest(int farmlandId, int harvestId) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            // Update the assigned harvest
            farmland.setHarvestID(harvestId);
            return farmLandRepositary.save(farmland);
        }
        return null;
    }

    @Override
    public List<Farmland> getFarmlandByNic(String nic) {
        return farmLandRepositary.findFarmlandByFarmer(nic);
    }

    @Override
    public Farmland updateFarmer(int farmlandId, String farmerNIC) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            // Update the assigned crop
            farmland.setNic(farmerNIC);
            return farmLandRepositary.save(farmland);
        }
        return null;
    }

    @Override
    public List<Farmland> getFarmlandNoNic() {
        return farmLandRepositary.findFarmlandNoNic();
    }

    @Override
    public List<Farmland> getFarmlandNic() {
        return farmLandRepositary.findFarmlandNic();
    }

    @Override
    public int getCropID(int farmlandId) {
        Farmland farmland = farmLandRepositary.findById(farmlandId).orElse(null);
        if (farmland != null) {
            return farmland.getCropID();
        }else{
            return 0;
        }
    }
}
