package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Crop;
import com.spincoders.cropmaster.repositary.CropRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CropImplementaion implements CropService {

    @Autowired
    private CropRepositary cropRepositary;

    @Override
    public Crop saveCrop(Crop crop) {
        return cropRepositary.save(crop);
    }

    @Override
    public List<Crop> getAllCrop() {
        return cropRepositary.findAll();
    }

    @Override
    public Optional<Crop> getCropByID(int cropID) {
        return cropRepositary.findById(cropID);
    }
}
