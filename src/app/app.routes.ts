import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './pages/propos/propos.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizInfoComponent } from './pages/quiz-info/quiz-info.component';
import { QuizJoinComponent } from './pages/quiz-join/quiz-join.component';
import { QuizScoreComponent } from './pages/quiz-score/quiz-score.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

export const routes: Routes = [
  {
    path: "accueil",
    component:AccueilComponent
  },
  {
    path: "propos",
    component:ProposComponent
  },
  {
    path: "navbar",
    component:NavbarComponent
  },
  {
    path: "quiz-join",
    component:QuizJoinComponent
  },
  {
    path: "quiz-info",
    component:QuizInfoComponent
  },
  {
    path: "quiz",
    component:QuizComponent
  },
  {
    path: "quiz-score",
    component:QuizScoreComponent
  }
];
