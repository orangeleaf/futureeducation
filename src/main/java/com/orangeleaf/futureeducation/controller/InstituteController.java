package com.orangeleaf.futureeducation.controller;

import com.orangeleaf.futureeducation.modal.Institute;
import com.orangeleaf.futureeducation.modal.InstituteRequest;
import com.orangeleaf.futureeducation.service.InstituteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping(value="/institutes",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
@RequestMapping(value="/api/institutes")
public class InstituteController {

    @Autowired
    InstituteService instituteService;

//    @RequestMapping(method = RequestMethod.GET)
//    public Iterable<Institute> getAll(){
//        return instituteService.getAll();
//    }

    @RequestMapping(method = RequestMethod.GET,path = "/{id}")
    public Institute getById(@PathVariable("id") Long id){
        return instituteService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void saveInsitute(@RequestBody InstituteRequest instituteRequest){
        instituteService.saveInstitute(instituteRequest);
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Institute> getAllInstitutes(Pageable pageable){
        return instituteService.getAllInstitutes(pageable);
    }

    @GetMapping("/api/institutes/{type}")
    public Page<Institute> getAllByType(@PathVariable String type, Pageable pageable){
        return instituteService.getAllByType(type, pageable);
    }
}
