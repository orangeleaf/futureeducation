package com.orangeleaf.futureeducation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HomeController {

    @RequestMapping(path = {"/","/universities","/institutes","/adduniversities","/addinstitutes","/contactus","/about","/home"})
    public String welcome(Map<String, Object> model) {
        return "index.html";
    }
}
