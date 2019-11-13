package com.orangeleaf.futureeducation.repository;

import com.orangeleaf.futureeducation.modal.Institute;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface InstituteRepository extends PagingAndSortingRepository <Institute, Long> {

    Page<Institute> findByType(String type, Pageable pageable);

}
