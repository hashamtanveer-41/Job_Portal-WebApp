package com.jobportalbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "profiles")
public class Profile {
    @Id
    private Long id;
    private String name;
    private String email;
    private String role;
    private String image;
    private String company;
    private String location;
    private String about;
    private Long totalExp;
    private List<String> skills;
    private List<Experience> experiences;
    private List<Certifications> certifications;
    private List<Long> savedJobs;
}
