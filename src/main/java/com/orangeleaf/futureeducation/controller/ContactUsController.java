package com.orangeleaf.futureeducation.controller;


import com.orangeleaf.futureeducation.modal.ContactUs;
import com.orangeleaf.futureeducation.modal.ContactUsRequest;
import com.orangeleaf.futureeducation.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contactus")
public class ContactUsController {

    @Autowired
    ContactUsService contactUsService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<ContactUs> getAll(){
        return contactUsService.getAll();
    }

    @RequestMapping(method = RequestMethod.GET,path="/{id}")
    public ContactUs getById(@PathVariable("id") Long id){
        return contactUsService.getById(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody ContactUsRequest contactUsRequest){
        contactUsService.save(contactUsRequest);
    }

}
