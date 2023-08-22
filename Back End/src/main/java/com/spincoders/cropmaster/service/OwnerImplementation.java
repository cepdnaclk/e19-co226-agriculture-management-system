package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Farmer;
import com.spincoders.cropmaster.model.Owner;
import com.spincoders.cropmaster.repositary.OwnerRepositary;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OwnerImplementation implements OwnerService {

    @Autowired
    private OwnerRepositary ownerRepositary;

    @Override
    public Owner saveOwner(Owner owner) {
        // Hash the password before saving
        String hashedPassword = BCrypt.hashpw(owner.getPassword(), BCrypt.gensalt());
        owner.setPassword(hashedPassword);
        return ownerRepositary.save(owner);
    }

    @Override
    public ResponseEntity<String> authenticateOwner(String nic, String password) {
        Owner owner = ownerRepositary.findByNic(nic);

        if (owner == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\": \"Invalid NIC\"}");
        }

        if (BCrypt.checkpw(password, owner.getPassword())) {
            return ResponseEntity.ok("{\"message\": \"Login successful for NIC: " + nic + "\"}");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"error\": \"Wrong password\"}");
        }
    }

    @Override
    public Owner findByNic(String nic) {
        return ownerRepositary.findByNic(nic);
    }
}
