package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Farmland;
import com.spincoders.cropmaster.model.Soil;
import com.spincoders.cropmaster.service.SoilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/soil")
@CrossOrigin
public class SoilController {

    @Autowired
    private SoilService soilService;

    @PostMapping("/addNew")
    public String add(@RequestBody Soil soil) {
        soilService.saveSoil(soil);
        return "New Soil is added";
    }

    @GetMapping("/getDetails/{farmlandID}")
    public ResponseEntity<Soil> getSoilByFarmlandID(@PathVariable int farmlandID) {
        Soil soil = soilService.getSoilinfoById(farmlandID);
        if (soil != null) {
            return ResponseEntity.ok(soil);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
