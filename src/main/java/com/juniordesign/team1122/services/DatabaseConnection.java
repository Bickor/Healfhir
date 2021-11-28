package com.juniordesign.team1122.services;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * Class that will handle any database connection.
 */
public class DatabaseConnection {

    /**
     * TODO: Connect to database and get all patients. For now we will use sample data.
     * Gets all patients from the database.
     * @return Json with all the patients
     */
    public static JSONObject getAllPatients() {
        JSONParser parser = new JSONParser();
        JSONObject json = new JSONObject();
        json.put("Name", "Greg Wilson");
        json.put("Date of Birth", "10/29/1990");
        json.put("CellphoneNumber", "(520) 403 8174");
        return json;
    }

    public static boolean createPatient(String name) {
        // TODO: Connect to database and create a patient.
        return true;
    }
}
