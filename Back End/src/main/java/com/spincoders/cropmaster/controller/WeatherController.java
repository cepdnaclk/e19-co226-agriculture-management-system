package com.spincoders.cropmaster.controller;

import com.spincoders.cropmaster.model.Soil;
import com.spincoders.cropmaster.model.Weather;
import com.spincoders.cropmaster.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/weather")
@CrossOrigin
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @PostMapping("/addNew")
    public String add(@RequestBody Weather Weather) {
        weatherService.saveWeather(Weather);
        return "New Weather is added";
    }

    @GetMapping("/getDetails/{farmlandID}")
    public ResponseEntity<Weather> getSoilByFarmlandID(@PathVariable int farmlandID) {
        Weather weather = weatherService.getWeatherinfoById(farmlandID);
        if (weather != null) {
            return ResponseEntity.ok(weather);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
