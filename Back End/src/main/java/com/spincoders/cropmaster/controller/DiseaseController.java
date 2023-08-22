package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Disease;
import com.spincoders.cropmaster.model.Farmland;
import com.spincoders.cropmaster.service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disease")
@CrossOrigin
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @PostMapping("/addNew")
    public String add(@RequestBody Disease disease) {
        diseaseService.saveDisease(disease);
        return "New Disease is added";
    }

    @GetMapping("/getAll")
    public List<Disease> getAllDiseases(){
        return diseaseService.getAllDisease();
    }

}
