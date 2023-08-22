package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Storage;

import java.util.List;

public interface StorageService {

    public Storage saveStorage(Storage storage);

    public List<Storage> getAllStorage();
}
