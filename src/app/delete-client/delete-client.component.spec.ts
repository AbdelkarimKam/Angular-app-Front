import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientComponent } from './delete-client.component';

describe('DeleteClientComponent', () => {
  let component: DeleteClientComponent;
  let fixture: ComponentFixture<DeleteClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteClientComponent]
    });
    fixture = TestBed.createComponent(DeleteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
