package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Chemical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChemicalRepositary extends JpaRepository<Chemical, Integer> {
}
