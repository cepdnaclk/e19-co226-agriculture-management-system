package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.ChemicalUsage;
import com.spincoders.cropmaster.model.Machinery;
import com.spincoders.cropmaster.service.MachineryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/machinery")
@CrossOrigin
public class MachineryController {

    @Autowired
    private MachineryService machineryService;

    @PostMapping("/addNew")
    public String add(@RequestBody Machinery machinery) {
        machineryService.saveMachinery(machinery);
        return "New Machinery is added";
    }

    @GetMapping("/getAll")
    public List<Machinery> getAllDiseases(){
        return machineryService.getAllMachinery();
    }

}
