package sesac.spring_0311.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring_0311.UserVO.InfoVO;
import sesac.spring_0311.UserVO.UserVO;
import sesac.spring_0311.dto.UserDto;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "request";
//        return "reqPrac";
    }
    @GetMapping("/get/response1")
    public  String getAPI1(@RequestParam(value = "name", required = true) String name2, Model model){ //input name=name인 것을 name2에 담아서 보낸다
        model.addAttribute("name",name2);
        return "response";
    }

    @GetMapping("/get/response2")
    public  String getAPI2(@RequestParam(value = "name", required = true) String name2, Model model){ //input name=name인 것을 name2에 담아서 보낸다
        model.addAttribute("name",name2);
        return "response";
    }
    @GetMapping("/get/response3/{name}/{age}")
    public String getAPI3(@PathVariable String name, @PathVariable("age") String abc, Model model){ //name은 똑같이 보내고 있고 age는 abc에 담아서 보내고 있다
        model.addAttribute("name",name);
        model.addAttribute("age",abc);
        return "response";
    }

    @GetMapping({"/get/response4/{name}","/get/response4/{name}/{age}"})
    public String getAPI4(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",abc);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody // 자바 객체를 json기반 body로 변환을 해서 값을 보낸다.
    //ResponseBody를 붙이면 res.send로 보내지는 것이다.
    public String postAPI3(@RequestParam(required = false) String name, Model model){
//        model.addAttribute("name",name);
//        return "response";
        return "이름은 : " + name;
    }
    @GetMapping("/get/introduce2")
    public String Prac1 (@RequestParam String name,@RequestParam String age, Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "response";
    }
    @GetMapping("/get/introduce/{name}")
    public String Prac2 (@PathVariable String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/info")
    public String prac3(@RequestParam String name,@RequestParam String gender, @RequestParam String date, @RequestParam String interest, Model model){
        model.addAttribute("name",name);
        model.addAttribute("gender", gender);
        model.addAttribute("date", date);
        model.addAttribute("interest", interest);
        return "resPrac";
    }

    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDto userDto){
        String msg = userDto.getName()+" "+userDto.getAge()+"!!!";
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDto userDto){
        String msg = userDto.getName()+" "+userDto.getAge()+"!!!";
        return msg;
    }

    @PostMapping("/dto/response3")
    @ResponseBody
    public String dtoAPI3(@RequestBody UserDto userDto){
        String msg = userDto.getName()+" "+userDto.getAge()+"!!!";
        return msg;
    }
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"\n나이 : "+userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"\n나이 : "+userVO.getAge();
        return msg;
    }
    @GetMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"}\n나이 : "+userVO.getAge();
        return msg;
    }
    //dto-axios
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : "+name+"\n나이 : "+age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDto userDto){
        String msg = "이름 : "+userDto.getName()+"\n나이 : "+userDto.getAge();
        return msg;
    }
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : "+name+"\n나이 : "+age;
        return msg;
    }
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDto userDto){
        String msg = "이름 : "+userDto.getName()+"\n나이 : "+userDto.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDto userDto){
        String msg = "이름 : "+userDto.getName()+"\n나이 : "+userDto.getAge();
        return msg;
    }
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value="name")String name, @RequestParam(value="age")String age){
        String msg = "이름 : "+name+"\n나이 : "+age;
        return msg;
    }

    //vo-axios
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"\n나이 : "+userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosvoAPI3(@RequestParam(value="name")String name, @RequestParam(value="age")String age){
        String msg = "이름 : "+name+"\n나이 : "+age;
        return msg;
    }
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosvoAPI4(UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"\n나이 : "+userVO.getAge();
        return msg;
    }
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoAPI5(@RequestBody UserVO userVO){
        String msg = "이름 : "+userVO.getName()+"\n나이 : "+userVO.getAge();
        return msg;
    }

    //실습
    @PostMapping("/axios/response")
    @ResponseBody
    public String axiosvoPrac(@RequestBody InfoVO infoVO){
        String msg = infoVO.getName();
        return msg;
    }
}
