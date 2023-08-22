package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Chemical;

import java.util.List;

public interface ChemicalService {
    public Chemical saveChemical(Chemical chemical);
    public List<Chemical> getAllChemical();
}
