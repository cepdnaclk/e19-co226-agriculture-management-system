package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Disease;
import com.spincoders.cropmaster.model.HostCrop;
import com.spincoders.cropmaster.service.HostCropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hostcrop")
@CrossOrigin
public class HostCropController {

    @Autowired
    private HostCropService hostCropService;

    @PostMapping("/addNew")
    public String add(@RequestBody HostCrop hostCrop) {
        hostCropService.saveHostCrop(hostCrop);
        return "New HostCrop is added";
    }

    @GetMapping("/getAll")
    public List<HostCrop> getAllDiseases(){
        return hostCropService.getAllHostCrop();
    }

    @GetMapping("/getDisease/{farmlandID}")
    public List<HostCrop> getDiseaseByFarmland(@PathVariable int farmlandID){
        return hostCropService.getDiseaseByFarmland(farmlandID);
    }


}
