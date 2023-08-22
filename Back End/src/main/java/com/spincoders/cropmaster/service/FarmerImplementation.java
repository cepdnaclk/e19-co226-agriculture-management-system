package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Farmer;
import com.spincoders.cropmaster.repositary.FarmerRepositary;
import jakarta.persistence.Access;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FarmerImplementation implements FarmerService{

    @Autowired
    private FarmerRepositary farmerRepositary;

    @Override
    public Farmer saveFarmer(Farmer farmer) {
        String hashedPassword = BCrypt.hashpw(farmer.getPassword(), BCrypt.gensalt());
        farmer.setPassword(hashedPassword);
        return farmerRepositary.save(farmer);
    }

    @Override
    public List<Farmer> getAllFarmers() {
        return farmerRepositary.findAll();
    }

    @Override
    public ResponseEntity<String> authenticateFarmer(String nic, String password) {
        Farmer farmer = farmerRepositary.findByNic(nic);

        if (farmer == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\": \"Invalid NIC\"}");
        }

        if (BCrypt.checkpw(password, farmer.getPassword())) {
            return ResponseEntity.ok("{\"message\": \"Login successful for NIC: " + nic + "\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Wrong password\"}");
        }
    }

    @Override
    public Farmer findByNic(String nic) {
        return farmerRepositary.findByNic(nic);
    }
}
