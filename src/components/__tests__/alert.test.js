import { render, screen } from "@testing-library/react";
import Alert from "../alert";
import { weatherDataMock } from "../test_data/test_data";

describe("alert ", () => {
    test("displays the alert sender", () => {
        render(<Alert alert={weatherDataMock.alerts[0]} />);
        const sender = screen.getByText(weatherDataMock.alerts[0].sender_name);
        expect(sender).toBeInTheDocument();
    });

    test('displays the alert event', () => {
        render(<Alert alert={weatherDataMock.alerts[0]} />);
        const sender = screen.getByText(weatherDataMock.alerts[0].event);
        expect(sender).toBeInTheDocument();
    });

    test('displays the alert start in HH:mm format', () => {
        render(<Alert alert={weatherDataMock.alerts[0]} />);
        const sender = screen.getByText(/Start: [0-9]*:[0-9]*/);
        expect(sender).toBeInTheDocument();
    });

    test('displays the alert end in HH:mm format', () => {
        render(<Alert alert={weatherDataMock.alerts[0]} />);
        const sender = screen.getByText(/End: [0-9]*:[0-9]*/);
        expect(sender).toBeInTheDocument();
    });

    test('displays the alert description', () => {
        render(<Alert alert={weatherDataMock.alerts[0]} />);
        const sender = screen.getByText(/...EXCESSIVE HEAT WARNING NOW IN EFFECT UNTIL 8 PM/i);
        expect(sender).toBeInTheDocument();
    });
})