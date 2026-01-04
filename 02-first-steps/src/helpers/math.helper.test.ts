import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    })
})

describe('subtract', () => {
    test('should add two negative numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -4;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(2);
    })
})

describe('multiply', () => {
    test('should add two multiply numbers', () => {
        // ! 1. Arrange
        const a = 3;
        const b = 5;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(15);
    })
})

