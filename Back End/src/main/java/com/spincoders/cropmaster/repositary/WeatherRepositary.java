package com.spincoders.cropmaster.repositary;

import com.spincoders.cropmaster.model.Soil;
import com.spincoders.cropmaster.model.Weather;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeatherRepositary extends JpaRepository<Weather, Integer> {

    Weather findByFarmlandID(int farmlandID);

}
