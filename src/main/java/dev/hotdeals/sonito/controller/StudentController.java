package dev.hotdeals.sonito.controller;

import dev.hotdeals.sonito.uml.StudentUml;
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
