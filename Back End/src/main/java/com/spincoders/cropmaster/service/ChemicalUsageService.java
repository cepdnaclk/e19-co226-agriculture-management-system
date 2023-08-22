package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.ChemicalUsage;

import java.util.List;

public interface ChemicalUsageService {

    public ChemicalUsage saveChemicalUsage(ChemicalUsage chemicalUsage);

    public List<ChemicalUsage> getAllChemicalUsage();

    public List<Object[]> getChemicalIdsAndNicsByFarmlandID(int farmlandID);

    public List<ChemicalUsage> getChemicalByFarmland(int farmlandID);
}
