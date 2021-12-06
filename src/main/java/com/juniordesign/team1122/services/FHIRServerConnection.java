package com.juniordesign.team1122.services;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.Scanner;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

@Service
public class FHIRServerConnection {
    private final RestTemplate template;
    private final HttpHeaders headers;

    public FHIRServerConnection(RestTemplateBuilder restTemplateBuilder) {
        this.template = restTemplateBuilder.build();
        // Auth is messed up because we don't have permission to add a callback URL
        // to Azure, so just auth through Postman and copy the token into a file
        try {
            Scanner sc = new Scanner(new File("token.txt"));
            this.headers = new HttpHeaders();
            this.headers.setContentType(MediaType.APPLICATION_JSON);
            this.headers.setBearerAuth(sc.nextLine());
            sc.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public JSONObject getAllPatients() {
        final String url = "https://az-healthfhir.azurehealthcareapis.com/Patient";
        final ResponseEntity<String> response = this.template.exchange(url, GET, new HttpEntity<>(headers), String.class);
        if (response.getStatusCodeValue() != 200) {
            throw new RuntimeException(String.format("Got error code %d when querying all patients", response.getStatusCodeValue()));
        }
        try {
            return (JSONObject) new JSONParser().parse(response.getBody());
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @SuppressWarnings("unchecked")
    public boolean createPatient(String name, String lastName, String gender) {
        JSONArray usualNameArray = new JSONArray();
        usualNameArray.add(name);

        JSONObject nameObject = new JSONObject();
        nameObject.put("use", "usual");
        nameObject.put("given", usualNameArray);

        JSONArray nameArray = new JSONArray();
        nameArray.add(nameObject);

        JSONObject body = new JSONObject();
        body.put("resourceType", "Patient");
        body.put("active", true);
        body.put("name", nameArray);
        body.put("gender", gender.toLowerCase());
        body.put("birthDate", "1980-01-01");

        final String url = "https://az-healthfhir.azurehealthcareapis.com/Patient";
        HttpEntity<String> entity = new HttpEntity<>(body.toJSONString(), headers);
        System.out.println("Request body: " + body.toJSONString());
        final ResponseEntity<String> response = this.template.exchange(url, POST, entity, String.class);
        if (response.getStatusCodeValue() != 201) {
            throw new RuntimeException(String.format("Got error code %d when creating patient %s", response.getStatusCodeValue(), name));
        }
        return true;
    }
}
