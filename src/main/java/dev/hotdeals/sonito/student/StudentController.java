package dev.hotdeals.sonito.student;

import dev.hotdeals.sonito.exceptionhandling.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("student")
public class StudentController
{
    @Autowired
    private StudentRepo studentRepo;

    @GetMapping("/students")
    public List<Student> findAll()
    {
        return studentRepo.findAll();
    }

    @GetMapping("/students/{id}")
    public Student findOne(@PathVariable Long id)
    {
        return studentRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Failed to find an student with an ID of " + id));
    }

    @PostMapping("/students")
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody Student newStudent)
    {
        return studentRepo.save(newStudent);
    }

    @PutMapping("/students/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Student update(@RequestBody Student newStudent, @PathVariable Long id)
    {
        return studentRepo.findById(id)
                .map(student -> {
                    student.setName(newStudent.getName());
                    student.setEmail(newStudent.getEmail());
                    return studentRepo.save(student);
                })
                .orElseGet(() -> {
                    newStudent.setId(id);
                    return studentRepo.save(newStudent);
                });
    }

    @DeleteMapping("/students/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable Long id)
    {
        if (!studentRepo.existsById(id))
        {
            throw new ResourceNotFoundException("Failed to find an student with an ID of " + id);
        }
        studentRepo.deleteById(id);
    }

    @GetMapping("/uml")
    public String uml()
    {
        return new StudentUml().toString();
    }
}
