package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Crop;
import com.spincoders.cropmaster.service.CropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/crop")
@CrossOrigin
public class CropController {

    @Autowired
    private CropService cropService;

    @PostMapping("/addNew")
    public String add(@RequestBody Crop crop) {
        cropService.saveCrop(crop);
        return "New Crop is added";
    }

    @GetMapping("/getAll")
    public List<Crop> getAllCrops(){
        return cropService.getAllCrop();
    }

    @GetMapping("/getbyID/{cropID}")
    public Optional<Crop> getCropById(@PathVariable int cropID){
        return cropService.getCropByID(cropID);
    }

}
