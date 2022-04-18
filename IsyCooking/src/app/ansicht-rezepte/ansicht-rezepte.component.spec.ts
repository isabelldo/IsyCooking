import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnsichtRezepteComponent } from './ansicht-rezepte.component';

describe('AnsichtRezepteComponent', () => {
  let component: AnsichtRezepteComponent;
  let fixture: ComponentFixture<AnsichtRezepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsichtRezepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsichtRezepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
