package com.orangeleaf.futureeducation.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InstituteRequest {

    private String name;
    private String description;
    private String category;
    private String city;
    private String rank;
    private String estd;
    private String type;
    private String ownership;
    private String approval;
    private String totalfaculty;
    private String totalstudent;
}
