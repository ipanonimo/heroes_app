import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
