package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Farmland;
import com.spincoders.cropmaster.model.HostCrop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HostCropRepositary extends JpaRepository<HostCrop, Integer> {

    @Query("SELECT u FROM HostCrop u WHERE u.farmlandID = :farmlandID")
    List<HostCrop> findDiseaseByFarmland(@Param("farmlandID") int farmlandID);
}
