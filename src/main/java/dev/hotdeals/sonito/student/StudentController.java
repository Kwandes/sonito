package dev.hotdeals.sonito.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("student")
public class StudentController
{
    @GetMapping("/uml")
    public String uml()
    {
        return new StudentUml().toString();
    }
}
