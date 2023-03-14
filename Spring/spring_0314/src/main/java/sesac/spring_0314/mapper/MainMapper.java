package sesac.spring_0314.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import sesac.spring_0314.domain.User;

import java.util.List;

@Mapper
public interface MainMapper {
    //mapper 참고하기
    List<User> retrieveAll();

    //mapper 참고 안하기
    @Insert("insert into user(name,nickname) values(#{name},#{nickname})")
    void insertUser(User user);
}
