package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Farmland;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FarmLandRepositary extends JpaRepository<Farmland, Integer> {

    @Query("SELECT u FROM Farmland u WHERE u.nic = :nic and u.cropID != 0 ")
    List<Farmland> findCropLand(@Param("nic") String nic);

    @Query("SELECT u FROM Farmland u WHERE u.nic = :nic and u.cropID = 0 ")
    List<Farmland> findUncropLand(@Param("nic") String nic);

    @Query("SELECT u FROM Farmland u WHERE u.nic = :nic")
    List<Farmland> findFarmlandByFarmer(@Param("nic") String nic);

    @Query("SELECT u FROM Farmland u WHERE u.nic = ''")
    List<Farmland> findFarmlandNoNic();

    @Query("SELECT u FROM Farmland u WHERE u.nic is not null ")
    List<Farmland> findFarmlandNic();


}
