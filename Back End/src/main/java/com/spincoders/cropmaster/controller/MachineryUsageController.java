package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Machinery;
import com.spincoders.cropmaster.model.MachineryUsage;
import com.spincoders.cropmaster.service.MachineryUsageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/machineryusage")
@CrossOrigin
public class MachineryUsageController {

    @Autowired
    private MachineryUsageService machineryUsageService;

    @PostMapping("/addNew")
    public String add(@RequestBody MachineryUsage machineryUsage) {
        machineryUsageService.saveMachineryUsage(machineryUsage);
        return "New MachineryUsage is added";
    }

    @GetMapping("/getAll")
    public List<MachineryUsage> getAllDiseases(){
        return machineryUsageService.getAllMachineryUsage();
    }

    @GetMapping("/getDetails/{farmlandID}")
    public List<Object[]> getMachineIdsAndNicsByFarmlandID(@PathVariable int farmlandID) {
        return machineryUsageService.getMachineIdsAndNicsByFarmlandID(farmlandID);
    }

    @GetMapping("/getMachinery/{farmlandID}")
    public List<MachineryUsage> getMachineryByFarmland(@PathVariable int farmlandID){
        return machineryUsageService.getMachineByFarmland(farmlandID);
    }


}
