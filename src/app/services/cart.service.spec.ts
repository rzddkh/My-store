import { TestBed } from '@angular/core/testing';

import { Cart } from './cart';

describe('AddToCartService', () => {
  let service: Cart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
