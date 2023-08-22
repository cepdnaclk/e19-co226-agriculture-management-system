package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.ChemicalUsage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChemicalUsageRepositary extends JpaRepository<ChemicalUsage,Integer> {

    @Query("SELECT cu.chemicalID, cu.nic FROM ChemicalUsage cu WHERE cu.farmlandID = :farmlandID")
    List<Object[]> findChemicalIdsAndNicsByFarmlandID(int farmlandID);

    @Query("SELECT u FROM ChemicalUsage u WHERE u.farmlandID = :farmlandID")
    List<ChemicalUsage> findChemicalUsageByFarmlandID(@Param("farmlandID") int farmlandID);
}
