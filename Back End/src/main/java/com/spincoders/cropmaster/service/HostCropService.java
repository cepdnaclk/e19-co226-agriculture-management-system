package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.HostCrop;

import java.util.List;

public interface HostCropService {
    public HostCrop saveHostCrop(HostCrop hostCrop);

    public List<HostCrop> getAllHostCrop();

    public List<HostCrop> getDiseaseByFarmland(int farmlandID);

}
