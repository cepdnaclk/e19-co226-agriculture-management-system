package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Chemical;
import com.spincoders.cropmaster.model.HostCrop;
import com.spincoders.cropmaster.service.ChemicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chemical")
@CrossOrigin
public class ChemicalController {

    @Autowired
    private ChemicalService chemicalService;

    @PostMapping("/addNew")
    public String add(@RequestBody Chemical chemical) {
        chemicalService.saveChemical(chemical);
        return "New Chemical is added";
    }

    @GetMapping("/getAll")
    public List<Chemical> getAllDiseases(){
        return chemicalService.getAllChemical();
    }

}
