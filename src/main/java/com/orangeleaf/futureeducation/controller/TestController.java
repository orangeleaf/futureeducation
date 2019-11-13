package com.orangeleaf.futureeducation.controller;

import com.orangeleaf.futureeducation.modal.Institute;
import com.orangeleaf.futureeducation.repository.InstituteRepository;
import com.orangeleaf.futureeducation.service.InstituteService;
import com.orangeleaf.futureeducation.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {


    @Autowired
    TestService testService;

    @GetMapping("/test/api/institutes")
    public Page<Institute> getAllInstitutes(Pageable pageable){
        return testService.getAllInstitutes(pageable);
    }

    @GetMapping("/test/api/institutes/{type}")
    public Page<Institute> getAllByType(@PathVariable String type, Pageable pageable){
        return testService.getAllByType(type, pageable);
    }


}
