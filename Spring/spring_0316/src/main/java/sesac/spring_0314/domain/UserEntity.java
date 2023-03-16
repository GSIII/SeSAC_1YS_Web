package sesac.spring_0314.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@Setter
public class UserEntity {
    @Id
    @GeneratedValue //auto_increment
    private int id; //id primary key auto_increment

    @Column(length = 20, nullable = false)
    // name varchar(20) not null
    private String name;

    @Column(length = 20, nullable = false)
    private  String nickname;
}
