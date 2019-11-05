package com.orangeleaf.futureeducation.controller;

import com.orangeleaf.futureeducation.modal.Institute;
import com.orangeleaf.futureeducation.modal.InstituteRequest;
import com.orangeleaf.futureeducation.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping(value="/institutes",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
@RequestMapping(value="/api/institutes")
public class InstituteController {

    @Autowired
    InstituteService instituteService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Institute> getAll(){
        return instituteService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET,path = "/{id}")
    public Institute getById(@PathVariable("id") Long id){
        return instituteService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void saveInsitute(@RequestBody InstituteRequest instituteRequest){
        instituteService.saveInstitute(instituteRequest);
    }
}
