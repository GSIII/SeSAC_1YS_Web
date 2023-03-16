package sesac.spring_0314.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sesac.spring_0314.domain.Person;
import sesac.spring_0314.dto.PersonDTO;
import sesac.spring_0314.mapper.PersonMapper;

@Service
public class PersonService {

    @Autowired
    PersonMapper personMapper;
    //회원가입
    public void insertPerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.insertPerson(person);
    }

    public PersonDTO getPerson(PersonDTO personDTO){
       Person person = personMapper.getPerson(personDTO.getId(), personDTO.getPw());

       if( person ==null ) return null; //select 문을 통해 정보가 있으면 null 리턴
       PersonDTO info = new PersonDTO();
       info.setId(person.getId());
       info.setPw(person.getPw());
       info.setName(person.getName());
       info.setNickname(person.getId() + person.getName());

       return info;
    }

    public void updatePerson(PersonDTO personDTO) {
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO) {
        personMapper.deletePerson(personDTO.getId());
    }
}
