package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Disease;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiseaseRepositary extends JpaRepository<Disease, Integer> {
}
