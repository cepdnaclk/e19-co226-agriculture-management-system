package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.HostCrop;
import com.spincoders.cropmaster.model.MachineryUsage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MachineryUsageRepositary extends JpaRepository<MachineryUsage,Integer> {
    @Query("SELECT cu.machineryID, cu.nic FROM MachineryUsage cu WHERE cu.farmlandID = :farmlandID")
    List<Object[]> findMachineIdsAndNicsByFarmlandID(int farmlandID);

    @Query("SELECT u FROM MachineryUsage u WHERE u.farmlandID = :farmlandID")
    List<MachineryUsage> findMachineryUsageByFarmlandID(@Param("farmlandID") int farmlandID);

}
