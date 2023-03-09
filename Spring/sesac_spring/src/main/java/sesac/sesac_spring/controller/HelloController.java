package sesac.sesac_spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import sesac.sesac_spring.Person;

import java.util.ArrayList;

@Controller
public class HelloController {

    @GetMapping("/hi") //app.get과 같다. localhost:8080/hi로 접속하면 아래 함수 실행시키겠다.
    public String getHi(Model model){
        model.addAttribute("msg","메세지입니다"); //res.render("hi", model);
        model.addAttribute("utext","<strong>utext 입니다.</strong>");
        model.addAttribute("age",25);
        return "hi"; //이 뜻은 res.render("hi")와 같다.
    }

    @GetMapping("/people")
    public String getPeople(Model model){
        ArrayList<Person> people = new ArrayList<Person>();
        people.add(new Person("이름1", 10));
        people.add(new Person("이름2", 20));
        people.add(new Person("이름3", 30));
        people.add(new Person("이름4", 40));

        model.addAttribute("people",people);
        return "people";
    }

}
