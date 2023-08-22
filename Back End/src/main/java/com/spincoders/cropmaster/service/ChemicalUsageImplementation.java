package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.ChemicalUsage;
import com.spincoders.cropmaster.repositary.ChemicalUsageRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChemicalUsageImplementation implements ChemicalUsageService{

    @Autowired
    private ChemicalUsageRepositary chemicalUsageRepositary;

    @Override
    public ChemicalUsage saveChemicalUsage(ChemicalUsage chemicalUsage) {
        return chemicalUsageRepositary.save(chemicalUsage);
    }

    @Override
    public List<ChemicalUsage> getAllChemicalUsage() {
        return chemicalUsageRepositary.findAll();
    }

    @Override
    public List<Object[]> getChemicalIdsAndNicsByFarmlandID(int farmlandID) {
        return chemicalUsageRepositary.findChemicalIdsAndNicsByFarmlandID(farmlandID);

    }

    @Override
    public List<ChemicalUsage> getChemicalByFarmland(int farmlandID) {
        return chemicalUsageRepositary.findChemicalUsageByFarmlandID(farmlandID);
    }
}
