package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Harvest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HarvestRepositary extends JpaRepository<Harvest, Integer> {
}
