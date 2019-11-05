package com.orangeleaf.futureeducation.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UniversityRequest {

    private String name;
    private String description;
    private String type;
    private String state;
    private String city;
    private String estd;
    private String Specialization;

}
