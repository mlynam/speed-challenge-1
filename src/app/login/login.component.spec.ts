/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  it('should create an instance', inject([LoginComponent], (login: LoginComponent) => {
    expect(login).toBeTruthy();
  }));
});
