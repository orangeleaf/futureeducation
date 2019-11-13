package com.orangeleaf.futureeducation.service;

import com.orangeleaf.futureeducation.modal.Institute;
import com.orangeleaf.futureeducation.modal.InstituteRequest;
import com.orangeleaf.futureeducation.repository.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class TestService {

    @Autowired
    private InstituteRepository instituteRepository;

    public Page<Institute> getAllInstitutes(Pageable pageable){
        return instituteRepository.findAll(pageable);
    }

    public Page<Institute> getAllByType(String type, Pageable pageable){
        return instituteRepository.findByType(type, pageable);
    }

}
