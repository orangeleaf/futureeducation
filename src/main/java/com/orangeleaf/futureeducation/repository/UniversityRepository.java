package com.orangeleaf.futureeducation.repository;

import com.orangeleaf.futureeducation.modal.University;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UniversityRepository extends PagingAndSortingRepository<University, Long> {

//    Page<University> findbytype(String type, Pageable pageable);
}
