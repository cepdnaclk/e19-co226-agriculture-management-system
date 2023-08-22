package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Crop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CropRepositary extends JpaRepository<Crop, Integer> {


}
