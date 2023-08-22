package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Soil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoilRepositary extends JpaRepository<Soil, Integer> {
    Soil findByFarmlandID(int farmlandID);
}
