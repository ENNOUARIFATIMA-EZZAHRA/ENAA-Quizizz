import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './pages/propos/propos.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizInfoComponent } from './pages/quiz-info/quiz-info.component';
import { QuizJoinComponent } from './pages/quiz-join/quiz-join.component';
import { QuizScoreComponent } from './pages/quiz-score/quiz-score.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NavbarComponent,AccueilComponent,ProposComponent,QuizComponent ,QuizInfoComponent,QuizJoinComponent,QuizScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz-app';
}
