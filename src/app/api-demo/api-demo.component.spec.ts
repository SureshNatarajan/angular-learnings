import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiDemoComponent } from './api-demo.component';
import { ApiDemoService } from './api-demo.service';

describe('ApiDemoComponent', () => {

    let component: ApiDemoComponent;
    let fixture: ComponentFixture<ApiDemoComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        
        TestBed.configureTestingModule({
            declarations: [ ApiDemoComponent ], // declare the test component
            imports: [ BrowserModule, HttpClientModule ],
            providers: [ ApiDemoService ]
        }).compileComponents();
        
        fixture = TestBed.createComponent(ApiDemoComponent);
        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;
    });

    it(`button should have title as 'Get Repositories'`, () => {
        fixture.autoDetectChanges();
        expect(el.textContent).toContain('Get Repositories');
    });
});