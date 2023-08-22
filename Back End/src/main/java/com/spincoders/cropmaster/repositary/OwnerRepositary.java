package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Owner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepositary extends JpaRepository<Owner, Integer> {

    Owner findByNic(String nic);
}
