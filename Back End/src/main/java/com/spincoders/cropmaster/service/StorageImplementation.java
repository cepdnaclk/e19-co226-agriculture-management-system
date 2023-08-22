package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Storage;
import com.spincoders.cropmaster.repositary.StorageRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StorageImplementation implements StorageService{

    @Autowired
    private StorageRepositary storageRepositary;


    @Override
    public Storage saveStorage(Storage storage) {
        return storageRepositary.save(storage);
    }

    @Override
    public List<Storage> getAllStorage() {
        return storageRepositary.findAll();
    }
}
