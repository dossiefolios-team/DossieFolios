package com.dossiefolios.portfolio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dossiefolios.portfolio.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
   List<User> fetchByUserid(@Param("id") Long userid);

User findOne(String username);

User findOne(Long userid);
}
