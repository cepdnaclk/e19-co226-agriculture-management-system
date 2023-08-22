package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Chemical;
import com.spincoders.cropmaster.repositary.ChemicalRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChemicalImplementation implements ChemicalService {

    @Autowired
    private ChemicalRepositary chemicalRepositary;


    @Override
    public Chemical saveChemical(Chemical chemical) {
        return chemicalRepositary.save(chemical);
    }

    @Override
    public List<Chemical> getAllChemical() {
        return chemicalRepositary.findAll();
    }
}
