package com.spincoders.cropmaster.controller;
import com.spincoders.cropmaster.model.Farmer;
import com.spincoders.cropmaster.service.FarmerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/farmer")
@CrossOrigin
public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @PostMapping("/addNew")
    public ResponseEntity<Farmer> add(@RequestBody Farmer farmer) {
        Farmer savedFarmer = farmerService.saveFarmer(farmer);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFarmer);
    }

    @GetMapping("/getAll")
    public List<Farmer> getAllFarmers(){
        return farmerService.getAllFarmers();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
        String nic = loginData.get("nic");
        String password = loginData.get("password");

        ResponseEntity<String> response = farmerService.authenticateFarmer(nic, password);
        return response;
    }

    @GetMapping("/{nic}")
    public ResponseEntity<Farmer> getFarmerByNic(@PathVariable String nic) {
        Farmer farmer = farmerService.findByNic(nic);

        if (farmer != null) {
            return ResponseEntity.ok(farmer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
