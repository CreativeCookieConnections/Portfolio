import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, Router } from '@angular/router';


describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      {path: 'menu', component: ProjectsComponent}
    ]

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), RouterTestingModule, ProjectsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Directly create the component
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the correct route for Projects Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === "projects");
    expect(route).toBeDefined(); // Check if route is defined
    if (route) {
      expect(route.component).toBe(ProjectsComponent); // Check if the component is ProjectsComponent
    }
  });

});
