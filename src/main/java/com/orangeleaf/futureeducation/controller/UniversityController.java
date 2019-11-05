package com.orangeleaf.futureeducation.controller;

import com.orangeleaf.futureeducation.modal.University;
import com.orangeleaf.futureeducation.modal.UniversityRequest;
import com.orangeleaf.futureeducation.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping(value="/universities",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
@RequestMapping(value="/api/universities")
public class UniversityController {

    @Autowired
    UniversityService universityService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<University> getAll(){ return universityService.getAll();}

    @RequestMapping(method = RequestMethod.GET,path = "/{id}")
    public University getById(@PathVariable("id")Long id){return universityService.getById(id);}

    @RequestMapping(method = RequestMethod.POST)
    public void saveUniversity(@RequestBody UniversityRequest universityRequest){
        universityService.saveUniversity(universityRequest);
    }


}
