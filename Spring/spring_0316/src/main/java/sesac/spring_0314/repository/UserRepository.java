package sesac.spring_0314.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sesac.spring_0314.domain.UserEntity;

import javax.swing.text.html.Option;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name);// select ~~ where name = #{name}

//    Optional<UserEntity> findById(int id); //id로 조건을 걸어서 검색
//    Optional<UserEntity> findByIdName(int id, String name); //id와 name 으로 조건 걸어서 검색
//
//    boolean existsByName(String name); //name 이 있는지 확인해줌

    //UserEntity userEntity
    //Optional<UserEntity> user; user.get()
}
