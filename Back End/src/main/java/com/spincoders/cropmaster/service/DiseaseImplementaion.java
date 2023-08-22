package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Disease;
import com.spincoders.cropmaster.repositary.DiseaseRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiseaseImplementaion implements DiseaseService{

    @Autowired
    private DiseaseRepositary diseaseRepositary;

    @Override
    public Disease saveDisease(Disease disease) {
        return diseaseRepositary.save(disease);
    }

    @Override
    public List<Disease> getAllDisease() {
        return diseaseRepositary.findAll();
    }
}
