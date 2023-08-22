package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmerRepositary extends JpaRepository<Farmer,Integer> {

    Farmer findByNic(String nic);
}
