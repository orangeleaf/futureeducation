package com.orangeleaf.futureeducation.service;

import com.orangeleaf.futureeducation.modal.ContactUs;
import com.orangeleaf.futureeducation.modal.ContactUsRequest;
import com.orangeleaf.futureeducation.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository;

    public Iterable<ContactUs> getAll(){return contactUsRepository.findAll();}


    public void save(ContactUsRequest contactUsRequest){
        contactUsRepository.save(convertRequesttoEntity(contactUsRequest));
    }

    private ContactUs convertRequesttoEntity(ContactUsRequest contactUsRequest){

        ContactUs contactUs = new ContactUs();

        contactUs.setFname(contactUsRequest.getFname());
        contactUs.setLname(contactUsRequest.getLname());
        contactUs.setEmail(contactUsRequest.getEmail());
        contactUs.setPhone(contactUsRequest.getPhone());
        contactUs.setType(contactUsRequest.getType());
        contactUs.setText(contactUsRequest.getText());

        return contactUs;
    }

    public ContactUs getById(Long id){
        Optional<ContactUs> optionalContactUs = contactUsRepository.findById(id);
        return optionalContactUs.get();
    }

}
