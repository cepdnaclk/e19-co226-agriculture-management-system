package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Storage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StorageRepositary extends JpaRepository<Storage, Integer> {
}
