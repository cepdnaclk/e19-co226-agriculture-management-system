package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Storage;
import com.spincoders.cropmaster.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/storage")
@CrossOrigin
public class StorageController {

    @Autowired
    private StorageService storageService;

    @PostMapping("/addNew")
    public String add(@RequestBody Storage storage) {
        storageService.saveStorage(storage);
        return "New Storage is added";
    }

    @GetMapping("/getAll")
    public List<Storage> getAllStorage(){
        return storageService.getAllStorage();
    }

}
