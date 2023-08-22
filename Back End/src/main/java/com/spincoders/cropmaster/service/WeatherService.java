package com.spincoders.cropmaster.service;

import com.spincoders.cropmaster.model.Soil;
import com.spincoders.cropmaster.model.Weather;

public interface WeatherService {

    public Weather saveWeather(Weather weather);

    public Weather getWeatherinfoById(int farmlandID);
}
