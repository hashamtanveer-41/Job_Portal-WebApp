package com.jobportalbackend.payload;


import com.jobportalbackend.model.Certifications;
import com.jobportalbackend.model.Experience;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDTO {
    @Id
    private Long id;
    private String name;
    private String email;
    private String role;
    private String image;
    private String company;
    private String location;
    private String about;
    private List<String> skills;
    private List<Experience> experiences;
    private List<Certifications> certifications;
    private List<Long> savedJobs;

}
