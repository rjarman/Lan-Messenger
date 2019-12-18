import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivePage } from './active.page';

describe('ActivePage', () => {
  let component: ActivePage;
  let fixture: ComponentFixture<ActivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
