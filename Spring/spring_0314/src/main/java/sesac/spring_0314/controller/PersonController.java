package sesac.spring_0314.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring_0314.dto.PersonDTO;
import sesac.spring_0314.service.PersonService;

@Controller
// @RestController //personController 안에 있는 모든 함수들이 @ResponseBody가 붙는다?
@RequestMapping("/person") // 아래에 있는 모든 url앞에 /person이 붙는다.
public class PersonController {
    @Autowired
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){
        personService.insertPerson(personDTO);
        return "";
    }
    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);
        if ( person == null ) return false;
        else return true;
    }

    @PostMapping("/info")
    public String postInfo(PersonDTO personDTO, Model model){ //axios 요청 없이 일반 form 전송을 하고 있기 때문에 requestbody 빼야한다.
        //person 정보 db에서 가져오기
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person",person);
        return "info";
    }

    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }

    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO) {
        personService.deletePerson(personDTO);
        return "";
    }

}
