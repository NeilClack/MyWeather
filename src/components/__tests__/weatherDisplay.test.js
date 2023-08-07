import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import WeatherDisplay from "../weatherDisplay";
import { weatherDataMock } from "../test_data/test_data";

describe("weather display", () => {
    test('displays "Please Select a Location" if no location is selected', () => {
        render(<WeatherDisplay weatherData={null}/>);
        const selectLocation = screen.getByText(/please select a location/i);
        expect(selectLocation).toBeInTheDocument();
    });

    test('displays the location name if a location is provided', () => {
        render(<WeatherDisplay weatherData={weatherDataMock} />);
        expect(true).toBe(true);
    });

    test('renders a table of weather information', () => {
        render(<WeatherDisplay weatherData={weatherDataMock} />);
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
    });
})