package com.orangeleaf.futureeducation.modal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContactUsRequest {

        private String fname;
        private String lname;
        private String email;
        private String phone;
        private String type;
        private String text;
    }

