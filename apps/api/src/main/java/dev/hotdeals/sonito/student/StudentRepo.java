package dev.hotdeals.sonito.student;

import dev.hotdeals.sonito.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Long>
{
}
