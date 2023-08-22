package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Machinery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MachineryRepositary extends JpaRepository<Machinery,Integer> {
}
