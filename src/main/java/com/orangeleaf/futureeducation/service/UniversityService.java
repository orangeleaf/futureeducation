package com.orangeleaf.futureeducation.service;

import com.orangeleaf.futureeducation.modal.University;
import com.orangeleaf.futureeducation.modal.UniversityRequest;
import com.orangeleaf.futureeducation.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UniversityService {

    @Autowired
    UniversityRepository universityRepository;

    public Iterable<University> getAll(){
        return universityRepository.findAll();
    }

    public void saveUniversity(UniversityRequest universityRequest){
        universityRepository.save(convertRequestToEntity(universityRequest));
    }

    private University convertRequestToEntity(UniversityRequest universityRequest){

        University university = new University();

        university.setName(universityRequest.getName());
        university.setDescription(universityRequest.getDescription());
        university.setType(universityRequest.getType());
        university.setState(universityRequest.getState());
        university.setCity(universityRequest.getCity());
        university.setEstd(universityRequest.getEstd());
        university.setSpecialization(universityRequest.getSpecialization());

        return university;
    }

    public University getById(Long id){
        Optional<University> optionalUniversity = universityRepository.findById(id);
        return optionalUniversity.get();
    }

}
