package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Farmer;
import com.spincoders.cropmaster.model.Farmland;
import com.spincoders.cropmaster.service.FarmLandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/farmland")
@CrossOrigin
public class FarmLandController {

    @Autowired
    private FarmLandService farmLandService;

    @PostMapping("/addNew")
    public String add(@RequestBody Farmland farmland) {
        farmLandService.saveFarmland(farmland);
        return "New FarmLand is added";
    }

    @GetMapping("/getAll")
    public List<Farmland> getAllFarmLands(){
        return farmLandService.getAllFarmLand();
    }

    @GetMapping("/croped/{nic}")
    public List<Farmland> getCropedFarmlands(@PathVariable String nic) {
        return farmLandService.getCropFarmland(nic);
    }

    @GetMapping("/getAll/{nic}")
    public List<Farmland> getFarmlandByNic(@PathVariable String nic) {
        return farmLandService.getFarmlandByNic(nic);
    }

    @GetMapping("/uncroped/{nic}")
    public List<Farmland> getUncropedFarmlands(@PathVariable String nic) {
        return farmLandService.getUncropFarmland(nic);
    }

    @PutMapping("/updateCrop/{farmlandId}/{cropId}")
    public Farmland updateAssignedCrop(@PathVariable int farmlandId, @PathVariable int cropId) {
        return farmLandService.updateAssignedCrop(farmlandId, cropId);
    }

    @PutMapping("/updateIrrigation/{farmlandId}/{irrigationId}")
    public Farmland updateAssignedIrrigation(@PathVariable int farmlandId, @PathVariable int irrigationId) {
        return farmLandService.updateAssignedIrrigation(farmlandId, irrigationId);
    }

    @PutMapping("/updateStorage/{farmlandId}/{storageId}")
    public Farmland updateAssignedStorage(@PathVariable int farmlandId, @PathVariable int storageId) {
        return farmLandService.updateAssignedStorage(farmlandId, storageId);
    }

    @PutMapping("/updateHarvest/{farmlandId}/{harvestId}")
    public Farmland updateAssignedHarvest(@PathVariable int farmlandId, @PathVariable int harvestId) {
        return farmLandService.updateAssignedHarvest(farmlandId, harvestId);
    }

    @PutMapping("/updateFarmer/{farmlandId}/{farmerNic}")
    public Farmland updateFarmerForFarmland(@PathVariable int farmlandId, @PathVariable String farmerNic) {
        return farmLandService.updateFarmer(farmlandId, farmerNic);
    }

    @GetMapping("/noNic")
    public List<Farmland> getFarmlandNoNic() {
        return farmLandService.getFarmlandNoNic();
    }

    @GetMapping("/nic")
    public List<Farmland> getFarmlandNic() {
        return farmLandService.getFarmlandNic();
    }

    @GetMapping("getCrop/{farmlandId}")
    public int getFarmlandCropID(@PathVariable int farmlandId) {
        return farmLandService.getCropID(farmlandId);
    }

}
