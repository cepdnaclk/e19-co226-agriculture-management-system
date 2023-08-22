package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Chemical;
import com.spincoders.cropmaster.model.Harvest;
import com.spincoders.cropmaster.service.HarvestService;
import jakarta.persistence.Column;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/harvest")
@CrossOrigin
public class HarvestController {

    @Autowired
    private HarvestService harvestService;

    @PostMapping("/addNew")
    public String add(@RequestBody Harvest harvest) {
        harvestService.saveHarvest(harvest);
        return "New Harvest is added";
    }

    @GetMapping("/getAll")
    public List<Harvest> getAllHarvest(){
        return harvestService.getAllHarvest();
    }


}
