import {
  getByDisplayValue,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import LocationSearchBar from "../locationSearchBar";

global.fetch = require("jest-fetch-mock");

const LOCATIONLISTMOCK = JSON.stringify([
  {
    name: "Dallas",
    local_names: {
      oc: "Dallas",
      uk: "Даллас",
      pt: "Dallas",
      ja: "ダラス",
      ru: "Даллас",
      en: "Dallas",
      ar: "دالاس",
      kn: "ಡಲ್ಲಾಸ್",
      fr: "Dallas",
      zh: "达拉斯/達拉斯",
    },
    lat: 32.7762719,
    lon: -96.7968559,
    country: "US",
    state: "Texas",
  },
  {
    name: "Dallas",
    lat: 33.9237141,
    lon: -84.8407732,
    country: "US",
    state: "Georgia",
  },
  {
    name: "Dallas",
    local_names: { en: "Dallas", fa: "دالاس" },
    lat: 44.9189206,
    lon: -123.315869,
    country: "US",
    state: "Oregon",
  },
  {
    name: "Dalat",
    local_names: {
      ko: "달랏현",
      lv: "Dalata",
      no: "Dalat",
      mr: "दा लात",
      be: "Горад Далат",
      he: "דה לאט",
      ja: "ダラット",
      en: "Dalat",
      zh: "大叻市",
      th: "ด่าหลัต",
      el: "Νταλάτ",
      fa: "دا لات",
      ur: "دا لات",
      de: "Dalat",
      uk: "Далат",
      lt: "Dalatas",
      ru: "Далат",
      vi: "Đà Lạt",
      id: "Dalat",
      sr: "Да Лат",
    },
    lat: 11.9402416,
    lon: 108.4375758,
    country: "VN",
    state: "Lâm Đồng Province",
  },
  {
    name: "Dallas",
    lat: 35.3160401,
    lon: -81.1764865,
    country: "US",
    state: "North Carolina",
  },
]);

const updateLocationMock = jest.fn(() => {
  return null;
});

describe("location search bar", () => {
  test("contains an input with the placeholder text 'Enter City Name'", () => {
    render(<LocationSearchBar updateLocation={updateLocationMock} />);
    expect(screen.getByPlaceholderText("Enter City Name")).toBeInTheDocument();
  });

  test("contains a button to submit the input", () => {
    render(<LocationSearchBar updateLocation={updateLocationMock} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders a list of locations when multiple results exist", () => {
    fetch.mockResponseOnce(LOCATIONLISTMOCK);
    act(() => {
      render(<LocationSearchBar updateLocation={updateLocationMock} />);
    });
    act(() => {
      const user = userEvent.setup();
      user.click(screen.getByPlaceholderText("Enter City Name"));
      user.keyboard("Dallas");
      user.click(screen.getByRole("button"));
    });
    waitFor(async () => {
      const listItem = await screen.getByRole("listitem");
      expect(listItem).toBeInTheDocument();
    });
  });

  test("calls updateLocation on form submit", () => {
    act(() => {
      render(<LocationSearchBar updateLocation={updateLocationMock} />);
    });
    const user = userEvent.setup();
    const submitButton = screen.getByRole("button");
    act(async () => {
      await user.click(submitButton);
    });
    expect(updateLocationMock).toHaveBeenCalledTimes(1);
  });

});
