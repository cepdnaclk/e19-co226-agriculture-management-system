package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Disease;

import java.util.List;

public interface DiseaseService {

    public Disease saveDisease(Disease disease);
    public List<Disease> getAllDisease();

}
