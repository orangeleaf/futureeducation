package com.orangeleaf.futureeducation.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ContactUs {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String fname;
    private String lname;
    private String email;
    private String phone;
    private String type;
    private String text;
}
