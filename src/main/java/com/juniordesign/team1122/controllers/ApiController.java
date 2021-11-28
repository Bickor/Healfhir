package com.juniordesign.team1122.controllers;

import com.juniordesign.team1122.services.DatabaseConnection;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class that controls the endpoints of the api.
 */
@RestController
public class ApiController {

    /**
     * Get a list of all patients.
     * @return Json of all the patients.
     */
    @GetMapping("/api/getAllPatients")
    public ResponseEntity<JSONObject> getAllPatients() {
        JSONObject json = DatabaseConnection.getAllPatients();

        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    /**
     * Add information about a patient to the database
     * @return Json stating if the operation was successful.
     */
    @PutMapping("/api/createPatient")
    public ResponseEntity<String> createPatient(@RequestBody String name) {
        boolean result = DatabaseConnection.createPatient(name);

        return new ResponseEntity<>("Method not yet implemented.", HttpStatus.NOT_IMPLEMENTED);
//        return result ? new ResponseEntity<>("Patient created.", HttpStatus.CREATED) :
//                new ResponseEntity<>("Something went wrong, try again.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
