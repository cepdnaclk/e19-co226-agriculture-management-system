package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Chemical;
import com.spincoders.cropmaster.model.Irrigation;
import com.spincoders.cropmaster.service.IrrigationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/irrigation")
@CrossOrigin
public class IrrigationController {

    @Autowired
    private IrrigationService irrigationService;

    @PostMapping("/addNew")
    public String add(@RequestBody Irrigation irrigation) {
        irrigationService.saveIrrigation(irrigation);
        return "New Irrigation is added";
    }

    @GetMapping("/getAll")
    public List<Irrigation> getAllDiseases(){
        return irrigationService.getAllIrrigation();
    }


}
