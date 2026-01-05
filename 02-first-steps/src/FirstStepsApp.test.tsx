import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstSteepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="ItemCounter" />)
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />,
// }));


describe('FirstStepsApp', () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {

        const { container } = render(<FirstSteepsApp />)

        expect(container).toMatchSnapshot();

    });

    test('should render  the correct number of ItemCounter components', () => {
        render(<FirstSteepsApp />)

        const ItemCounter = screen.getAllByTestId('ItemCounter');

        expect(ItemCounter.length).toBe(3);

        screen.debug();
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstSteepsApp />)

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Nintendo Switch 2', quantity: 1 }
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Pro Controller', quantity: 2 }
        );
        expect(mockItemCounter).toHaveBeenCalledWith(
            { name: 'Super Smash', quantity: 5 }
        );
    })

})