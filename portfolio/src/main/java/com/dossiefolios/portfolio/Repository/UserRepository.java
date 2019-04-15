package com.dossiefolios.portfolio.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dossiefolios.portfolio.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
	@Query(name ="User.fetchByUsername")
   List<User> fetchByUsername(@Param("username") String username);

//User findOne(String username);

//User findOne(Long userid);
}
