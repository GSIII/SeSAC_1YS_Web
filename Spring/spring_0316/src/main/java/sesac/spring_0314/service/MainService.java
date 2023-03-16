package sesac.spring_0314.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.spring_0314.domain.User;

import sesac.spring_0314.domain.UserEntity;
import sesac.spring_0314.dto.UserDTO;
import sesac.spring_0314.mapper.MainMapper;
import sesac.spring_0314.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUserList(){
        List<UserEntity> result = userRepository.findAll();//sql 문에서 select * from
        List<UserDTO> users = new ArrayList<UserDTO>();

        for(int i=0; i<result.size();i++){
            UserDTO user = new UserDTO();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(i+1);

            users.add(user);
        }
        return users;
    }
    public void addUser(UserEntity user) { userRepository.save(user); } // save 는 sql 문에서 insert

    public ArrayList<UserDTO> getUserName(String name) {
        Optional<UserEntity> user = userRepository.findByName(name);
        ArrayList<UserDTO> userList = new ArrayList<>();

        if ( user.isPresent() ) {
            UserDTO dto = new UserDTO();
            dto.setId(user.get().getId());
            dto.setNo(0);
            dto.setName(user.get().getName());
            dto.setNickname(user.get().getNickname());
            userList.add(dto);
        }
        return userList;
    }
}
