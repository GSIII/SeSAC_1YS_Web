package sesac.sesac_spring;

public class Person {
    private String name;
    private int age;

    //생성자
    public Person(String name, int age) {
        this.name=name;
        this.age=age;
    }
    //getter와 setter
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
