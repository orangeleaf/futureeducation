package com.orangeleaf.futureeducation.service;


import com.orangeleaf.futureeducation.modal.Institute;
import com.orangeleaf.futureeducation.modal.InstituteRequest;
import com.orangeleaf.futureeducation.repository.InstituteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class InstituteService {

    @Autowired
    private InstituteRepository instituteRepository;

    public Iterable<Institute> getAll(){ return instituteRepository.findAll(); }

    public void saveInstitute(InstituteRequest instituteRequest){
        instituteRepository.save(convertRequestToEntity(instituteRequest));
    }

    private Institute convertRequestToEntity(InstituteRequest instituteRequest){

        Institute institute = new Institute();

        institute.setName(instituteRequest.getName());
        institute.setDescription(instituteRequest.getDescription());
        institute.setApproval(instituteRequest.getApproval());
        institute.setCategory(instituteRequest.getCategory());
        institute.setCity(instituteRequest.getCity());
        institute.setEstd(instituteRequest.getEstd());
        institute.setOwnership(instituteRequest.getOwnership());
        institute.setRank(instituteRequest.getRank());
        institute.setTotalfaculty(instituteRequest.getTotalfaculty());
        institute.setTotalstudent(instituteRequest.getTotalstudent());
        institute.setType(instituteRequest.getType());

        return institute;

    }

    public Institute getById(Long id){
        Optional<Institute> optionalInstitute = instituteRepository.findById(id);
        return optionalInstitute.get();
    }

    public boolean deleteById(Long id){
        instituteRepository.deleteById(id);
        return true;
    }

    public Page<Institute> getAllInstitutes(Pageable pageable){
        return instituteRepository.findAll(pageable);
    }

    public Page<Institute> getAllByType(String type, Pageable pageable){
        return instituteRepository.findByType(type, pageable);
    }

}

