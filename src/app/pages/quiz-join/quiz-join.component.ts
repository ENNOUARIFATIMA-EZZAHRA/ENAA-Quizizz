
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-quiz-join',
  standalone: true,
  imports: [
    CommonModule,        
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './quiz-join.component.html',
  styleUrls: ['./quiz-join.component.css']
})
export class QuizJoinComponent {
  code = '';
  name = '';
  errorMessage: string | null = null;

  testservice = inject(TestService);
  router = inject(Router);

  join() {
    const enteredCode = this.code.trim() || 'Ngquiz01'; // code par défaut
    const enteredName = this.name.trim() || 'Invité';   // nom par défaut
  
    this.testservice.getQuizByCode(enteredCode).subscribe({
      next: (result) => {
        if (result.length === 0) {
          this.errorMessage = 'Code incorrect. Hawl tani.';
        } else {
          const quiz = result[0];
          const userQuiz = {
            name: enteredName,
            quizId: quiz.id,
            response: []
          };
  
          this.testservice.joinQuiz(userQuiz).subscribe({
            next: (response) => {
              this.testservice.quizResult = response;
              this.router.navigateByUrl("/quiz-info");
            },
            error: () => {
              this.errorMessage = 'Moshkil f l’inscription. Hawl tani.';
            }
          });
        }
      },
      error: () => {
        this.errorMessage = 'Moshkil f l-api. Jarib m3a waqt akhor.';
      }
    });
  }
}  