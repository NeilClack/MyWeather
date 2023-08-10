const geoQueryDataMock = [
    {
        "name": "Dallas",
        "local_names": {
            "oc": "Dallas",
            "uk": "Даллас",
            "ja": "ダラス",
            "ru": "Даллас",
            "kn": "ಡಲ್ಲಾಸ್",
            "ar": "دالاس",
            "fr": "Dallas",
            "pt": "Dallas",
            "zh": "达拉斯/達拉斯",
            "en": "Dallas"
        },
        "lat": 32.7762719,
        "lon": -96.7968559,
        "country": "US",
        "state": "Texas"
    },
    {
        "name": "Dallas",
        "lat": 33.9237141,
        "lon": -84.8407732,
        "country": "US",
        "state": "Georgia"
    },
    {
        "name": "Dallas",
        "local_names": {
            "en": "Dallas",
            "fa": "دالاس"
        },
        "lat": 44.9189206,
        "lon": -123.315869,
        "country": "US",
        "state": "Oregon"
    },
    {
        "name": "Dalat",
        "local_names": {
            "ur": "دا لات",
            "lv": "Dalata",
            "ru": "Далат",
            "el": "Νταλάτ",
            "sr": "Да Лат",
            "fa": "دا لات",
            "lt": "Dalatas",
            "he": "דה לאט",
            "vi": "Đà Lạt",
            "ko": "달랏현",
            "mr": "दा लात",
            "de": "Dalat",
            "be": "Горад Далат",
            "ja": "ダラット",
            "no": "Dalat",
            "id": "Dalat",
            "uk": "Далат",
            "th": "ด่าหลัต",
            "en": "Dalat",
            "zh": "大叻市"
        },
        "lat": 11.9402416,
        "lon": 108.4375758,
        "country": "VN",
        "state": "Lâm Đồng Province"
    },
    {
        "name": "Dallas",
        "lat": 35.3160401,
        "lon": -81.1764865,
        "country": "US",
        "state": "North Carolina"
    }
]

const weatherDataMock = {
    "lat": 32.7763,
    "lon": -96.7969,
    "timezone": "America/Chicago",
    "timezone_offset": -18000,
    "current": {
        "dt": 1691179214,
        "sunrise": 1691149374,
        "sunset": 1691198618,
        "temp": 103.95,
        "feels_like": 112.93,
        "pressure": 1013,
        "humidity": 34,
        "dew_point": 70.02,
        "uvi": 8.74,
        "clouds": 7,
        "visibility": 10000,
        "wind_speed": 4,
        "wind_deg": 77,
        "wind_gust": 14,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    "minutely": [
        {
            "dt": 1691179260,
            "precipitation": 0
        },
        {
            "dt": 1691179320,
            "precipitation": 0
        },
        {
            "dt": 1691179380,
            "precipitation": 0
        },
        {
            "dt": 1691179440,
            "precipitation": 0
        },
        {
            "dt": 1691179500,
            "precipitation": 0
        },
        {
            "dt": 1691179560,
            "precipitation": 0
        },
        {
            "dt": 1691179620,
            "precipitation": 0
        },
        {
            "dt": 1691179680,
            "precipitation": 0
        },
        {
            "dt": 1691179740,
            "precipitation": 0
        },
        {
            "dt": 1691179800,
            "precipitation": 0
        },
        {
            "dt": 1691179860,
            "precipitation": 0
        },
        {
            "dt": 1691179920,
            "precipitation": 0
        },
        {
            "dt": 1691179980,
            "precipitation": 0
        },
        {
            "dt": 1691180040,
            "precipitation": 0
        },
        {
            "dt": 1691180100,
            "precipitation": 0
        },
        {
            "dt": 1691180160,
            "precipitation": 0
        },
        {
            "dt": 1691180220,
            "precipitation": 0
        },
        {
            "dt": 1691180280,
            "precipitation": 0
        },
        {
            "dt": 1691180340,
            "precipitation": 0
        },
        {
            "dt": 1691180400,
            "precipitation": 0
        },
        {
            "dt": 1691180460,
            "precipitation": 0
        },
        {
            "dt": 1691180520,
            "precipitation": 0
        },
        {
            "dt": 1691180580,
            "precipitation": 0
        },
        {
            "dt": 1691180640,
            "precipitation": 0
        },
        {
            "dt": 1691180700,
            "precipitation": 0
        },
        {
            "dt": 1691180760,
            "precipitation": 0
        },
        {
            "dt": 1691180820,
            "precipitation": 0
        },
        {
            "dt": 1691180880,
            "precipitation": 0
        },
        {
            "dt": 1691180940,
            "precipitation": 0
        },
        {
            "dt": 1691181000,
            "precipitation": 0
        },
        {
            "dt": 1691181060,
            "precipitation": 0
        },
        {
            "dt": 1691181120,
            "precipitation": 0
        },
        {
            "dt": 1691181180,
            "precipitation": 0
        },
        {
            "dt": 1691181240,
            "precipitation": 0
        },
        {
            "dt": 1691181300,
            "precipitation": 0
        },
        {
            "dt": 1691181360,
            "precipitation": 0
        },
        {
            "dt": 1691181420,
            "precipitation": 0
        },
        {
            "dt": 1691181480,
            "precipitation": 0
        },
        {
            "dt": 1691181540,
            "precipitation": 0
        },
        {
            "dt": 1691181600,
            "precipitation": 0
        },
        {
            "dt": 1691181660,
            "precipitation": 0
        },
        {
            "dt": 1691181720,
            "precipitation": 0
        },
        {
            "dt": 1691181780,
            "precipitation": 0
        },
        {
            "dt": 1691181840,
            "precipitation": 0
        },
        {
            "dt": 1691181900,
            "precipitation": 0
        },
        {
            "dt": 1691181960,
            "precipitation": 0
        },
        {
            "dt": 1691182020,
            "precipitation": 0
        },
        {
            "dt": 1691182080,
            "precipitation": 0
        },
        {
            "dt": 1691182140,
            "precipitation": 0
        },
        {
            "dt": 1691182200,
            "precipitation": 0
        },
        {
            "dt": 1691182260,
            "precipitation": 0
        },
        {
            "dt": 1691182320,
            "precipitation": 0
        },
        {
            "dt": 1691182380,
            "precipitation": 0
        },
        {
            "dt": 1691182440,
            "precipitation": 0
        },
        {
            "dt": 1691182500,
            "precipitation": 0
        },
        {
            "dt": 1691182560,
            "precipitation": 0
        },
        {
            "dt": 1691182620,
            "precipitation": 0
        },
        {
            "dt": 1691182680,
            "precipitation": 0
        },
        {
            "dt": 1691182740,
            "precipitation": 0
        },
        {
            "dt": 1691182800,
            "precipitation": 0
        },
        {
            "dt": 1691182860,
            "precipitation": 0
        }
    ],
    "hourly": [
        {
            "dt": 1691179200,
            "temp": 103.95,
            "feels_like": 112.93,
            "pressure": 1013,
            "humidity": 34,
            "dew_point": 70.02,
            "uvi": 8.74,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 7.38,
            "wind_deg": 167,
            "wind_gust": 7.83,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691182800,
            "temp": 104.56,
            "feels_like": 111.58,
            "pressure": 1012,
            "humidity": 31,
            "dew_point": 67.86,
            "uvi": 6.34,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 7.36,
            "wind_deg": 165,
            "wind_gust": 8.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691186400,
            "temp": 105.4,
            "feels_like": 110.71,
            "pressure": 1011,
            "humidity": 28,
            "dew_point": 65.62,
            "uvi": 3.77,
            "clouds": 7,
            "visibility": 10000,
            "wind_speed": 6.8,
            "wind_deg": 163,
            "wind_gust": 8.57,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691190000,
            "temp": 106.09,
            "feels_like": 109.54,
            "pressure": 1009,
            "humidity": 25,
            "dew_point": 62.96,
            "uvi": 1.7,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 5.99,
            "wind_deg": 164,
            "wind_gust": 8.3,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691193600,
            "temp": 106.39,
            "feels_like": 107.78,
            "pressure": 1008,
            "humidity": 22,
            "dew_point": 59.61,
            "uvi": 0.48,
            "clouds": 5,
            "visibility": 10000,
            "wind_speed": 5.86,
            "wind_deg": 160,
            "wind_gust": 7.83,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691197200,
            "temp": 104.56,
            "feels_like": 104.88,
            "pressure": 1007,
            "humidity": 22,
            "dew_point": 58.32,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 7.16,
            "wind_deg": 153,
            "wind_gust": 8.72,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691200800,
            "temp": 102.67,
            "feels_like": 102.6,
            "pressure": 1007,
            "humidity": 23,
            "dew_point": 57.6,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 9.42,
            "wind_deg": 163,
            "wind_gust": 15.23,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691204400,
            "temp": 101.79,
            "feels_like": 101.28,
            "pressure": 1008,
            "humidity": 23,
            "dew_point": 57.09,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 10.47,
            "wind_deg": 174,
            "wind_gust": 19.28,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691208000,
            "temp": 100.54,
            "feels_like": 99.46,
            "pressure": 1009,
            "humidity": 23,
            "dew_point": 56.55,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 9.44,
            "wind_deg": 181,
            "wind_gust": 20.36,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691211600,
            "temp": 98.91,
            "feels_like": 98.02,
            "pressure": 1009,
            "humidity": 25,
            "dew_point": 56.52,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 8.21,
            "wind_deg": 192,
            "wind_gust": 19.01,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691215200,
            "temp": 97.7,
            "feels_like": 96.71,
            "pressure": 1009,
            "humidity": 26,
            "dew_point": 56.88,
            "uvi": 0,
            "clouds": 2,
            "visibility": 10000,
            "wind_speed": 7.61,
            "wind_deg": 202,
            "wind_gust": 18.14,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691218800,
            "temp": 96.57,
            "feels_like": 95.5,
            "pressure": 1009,
            "humidity": 27,
            "dew_point": 56.91,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 10.04,
            "wind_deg": 174,
            "wind_gust": 20.38,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691222400,
            "temp": 94.01,
            "feels_like": 93.72,
            "pressure": 1009,
            "humidity": 32,
            "dew_point": 59.92,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 12.39,
            "wind_deg": 188,
            "wind_gust": 27.13,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691226000,
            "temp": 92.25,
            "feels_like": 93.76,
            "pressure": 1009,
            "humidity": 39,
            "dew_point": 63.88,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 14.34,
            "wind_deg": 200,
            "wind_gust": 29.33,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691229600,
            "temp": 91.22,
            "feels_like": 94.15,
            "pressure": 1010,
            "humidity": 44,
            "dew_point": 65.91,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 14.03,
            "wind_deg": 201,
            "wind_gust": 29.35,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691233200,
            "temp": 90.05,
            "feels_like": 93.38,
            "pressure": 1010,
            "humidity": 47,
            "dew_point": 66.96,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 11.95,
            "wind_deg": 201,
            "wind_gust": 25.95,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691236800,
            "temp": 89.01,
            "feels_like": 92.39,
            "pressure": 1011,
            "humidity": 49,
            "dew_point": 67.17,
            "uvi": 0,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 11.54,
            "wind_deg": 198,
            "wind_gust": 23.04,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691240400,
            "temp": 89.64,
            "feels_like": 93.07,
            "pressure": 1012,
            "humidity": 48,
            "dew_point": 67.53,
            "uvi": 0.34,
            "clouds": 28,
            "visibility": 10000,
            "wind_speed": 11.99,
            "wind_deg": 206,
            "wind_gust": 21.94,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691244000,
            "temp": 91.58,
            "feels_like": 95.22,
            "pressure": 1012,
            "humidity": 45,
            "dew_point": 66.96,
            "uvi": 1.13,
            "clouds": 56,
            "visibility": 10000,
            "wind_speed": 12.86,
            "wind_deg": 215,
            "wind_gust": 20.13,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691247600,
            "temp": 93.04,
            "feels_like": 95.95,
            "pressure": 1013,
            "humidity": 41,
            "dew_point": 66.06,
            "uvi": 2.48,
            "clouds": 71,
            "visibility": 10000,
            "wind_speed": 11.86,
            "wind_deg": 216,
            "wind_gust": 17.47,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691251200,
            "temp": 94.89,
            "feels_like": 97.25,
            "pressure": 1013,
            "humidity": 37,
            "dew_point": 64.8,
            "uvi": 2.5,
            "clouds": 78,
            "visibility": 10000,
            "wind_speed": 10,
            "wind_deg": 208,
            "wind_gust": 15.08,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691254800,
            "temp": 97.39,
            "feels_like": 99.52,
            "pressure": 1013,
            "humidity": 33,
            "dew_point": 63.36,
            "uvi": 3.41,
            "clouds": 82,
            "visibility": 10000,
            "wind_speed": 8.43,
            "wind_deg": 197,
            "wind_gust": 12.97,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691258400,
            "temp": 100.56,
            "feels_like": 102.09,
            "pressure": 1012,
            "humidity": 28,
            "dew_point": 61.92,
            "uvi": 3.94,
            "clouds": 85,
            "visibility": 10000,
            "wind_speed": 7.61,
            "wind_deg": 186,
            "wind_gust": 11.45,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691262000,
            "temp": 104.02,
            "feels_like": 105.31,
            "pressure": 1011,
            "humidity": 24,
            "dew_point": 60.66,
            "uvi": 7.2,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 5.88,
            "wind_deg": 174,
            "wind_gust": 8.72,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691265600,
            "temp": 106.99,
            "feels_like": 108,
            "pressure": 1010,
            "humidity": 21,
            "dew_point": 59.58,
            "uvi": 6.17,
            "clouds": 65,
            "visibility": 10000,
            "wind_speed": 5.82,
            "wind_deg": 151,
            "wind_gust": 6.71,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691269200,
            "temp": 108.37,
            "feels_like": 109.4,
            "pressure": 1009,
            "humidity": 20,
            "dew_point": 58.68,
            "uvi": 4.47,
            "clouds": 60,
            "visibility": 10000,
            "wind_speed": 6.82,
            "wind_deg": 144,
            "wind_gust": 6.71,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691272800,
            "temp": 108.9,
            "feels_like": 109.44,
            "pressure": 1008,
            "humidity": 19,
            "dew_point": 57.65,
            "uvi": 2.26,
            "clouds": 58,
            "visibility": 10000,
            "wind_speed": 7.78,
            "wind_deg": 140,
            "wind_gust": 6.73,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691276400,
            "temp": 106.66,
            "feels_like": 106.77,
            "pressure": 1008,
            "humidity": 20,
            "dew_point": 57.24,
            "uvi": 1.01,
            "clouds": 67,
            "visibility": 10000,
            "wind_speed": 8.41,
            "wind_deg": 137,
            "wind_gust": 9.42,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691280000,
            "temp": 106.18,
            "feels_like": 106.05,
            "pressure": 1006,
            "humidity": 20,
            "dew_point": 57.06,
            "uvi": 0.28,
            "clouds": 72,
            "visibility": 10000,
            "wind_speed": 9.19,
            "wind_deg": 145,
            "wind_gust": 13.22,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691283600,
            "temp": 105.28,
            "feels_like": 104.72,
            "pressure": 1005,
            "humidity": 20,
            "dew_point": 56.34,
            "uvi": 0,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 9.66,
            "wind_deg": 167,
            "wind_gust": 17.67,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691287200,
            "temp": 103.46,
            "feels_like": 102.11,
            "pressure": 1007,
            "humidity": 20,
            "dew_point": 55.08,
            "uvi": 0,
            "clouds": 19,
            "visibility": 10000,
            "wind_speed": 10.96,
            "wind_deg": 197,
            "wind_gust": 20.85,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691290800,
            "temp": 102.72,
            "feels_like": 101.61,
            "pressure": 1008,
            "humidity": 21,
            "dew_point": 55.26,
            "uvi": 0,
            "clouds": 40,
            "visibility": 10000,
            "wind_speed": 12.77,
            "wind_deg": 200,
            "wind_gust": 25.05,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691294400,
            "temp": 101.53,
            "feels_like": 100.4,
            "pressure": 1008,
            "humidity": 22,
            "dew_point": 55.26,
            "uvi": 0,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 12.46,
            "wind_deg": 203,
            "wind_gust": 24.83,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691298000,
            "temp": 100.27,
            "feels_like": 98.65,
            "pressure": 1008,
            "humidity": 22,
            "dew_point": 55.26,
            "uvi": 0,
            "clouds": 64,
            "visibility": 10000,
            "wind_speed": 10.51,
            "wind_deg": 207,
            "wind_gust": 23.71,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691301600,
            "temp": 99.01,
            "feels_like": 97.34,
            "pressure": 1008,
            "humidity": 23,
            "dew_point": 55.26,
            "uvi": 0,
            "clouds": 70,
            "visibility": 10000,
            "wind_speed": 9.66,
            "wind_deg": 206,
            "wind_gust": 23.73,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691305200,
            "temp": 97.63,
            "feels_like": 96.22,
            "pressure": 1008,
            "humidity": 25,
            "dew_point": 55.62,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 11.34,
            "wind_deg": 196,
            "wind_gust": 24.7,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691308800,
            "temp": 95.13,
            "feels_like": 94.23,
            "pressure": 1008,
            "humidity": 29,
            "dew_point": 57.78,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 13.15,
            "wind_deg": 192,
            "wind_gust": 29.8,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691312400,
            "temp": 93.49,
            "feels_like": 94.5,
            "pressure": 1009,
            "humidity": 36,
            "dew_point": 62.1,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 12.44,
            "wind_deg": 194,
            "wind_gust": 25.79,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691316000,
            "temp": 91.17,
            "feels_like": 93.22,
            "pressure": 1009,
            "humidity": 42,
            "dew_point": 64.8,
            "uvi": 0,
            "clouds": 84,
            "visibility": 10000,
            "wind_speed": 11.74,
            "wind_deg": 200,
            "wind_gust": 23.96,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691319600,
            "temp": 89.06,
            "feels_like": 90.97,
            "pressure": 1011,
            "humidity": 45,
            "dew_point": 64.62,
            "uvi": 0,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 5.28,
            "wind_deg": 243,
            "wind_gust": 11.63,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691323200,
            "temp": 90.12,
            "feels_like": 91.92,
            "pressure": 1011,
            "humidity": 43,
            "dew_point": 64.98,
            "uvi": 0,
            "clouds": 90,
            "visibility": 10000,
            "wind_speed": 9.93,
            "wind_deg": 207,
            "wind_gust": 17.07,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691326800,
            "temp": 90.59,
            "feels_like": 93.07,
            "pressure": 1012,
            "humidity": 44,
            "dew_point": 65.34,
            "uvi": 0.54,
            "clouds": 42,
            "visibility": 10000,
            "wind_speed": 10.38,
            "wind_deg": 204,
            "wind_gust": 17,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0.12
        },
        {
            "dt": 1691330400,
            "temp": 92.71,
            "feels_like": 94.95,
            "pressure": 1012,
            "humidity": 40,
            "dew_point": 65.16,
            "uvi": 1.83,
            "clouds": 32,
            "visibility": 10000,
            "wind_speed": 11.83,
            "wind_deg": 215,
            "wind_gust": 18.81,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0.04
        },
        {
            "dt": 1691334000,
            "temp": 95.72,
            "feels_like": 98.19,
            "pressure": 1012,
            "humidity": 36,
            "dew_point": 64.98,
            "uvi": 4.02,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 12.41,
            "wind_deg": 219,
            "wind_gust": 17.49,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0.04
        },
        {
            "dt": 1691337600,
            "temp": 99.79,
            "feels_like": 102.54,
            "pressure": 1012,
            "humidity": 31,
            "dew_point": 63.72,
            "uvi": 6.86,
            "clouds": 18,
            "visibility": 10000,
            "wind_speed": 12.82,
            "wind_deg": 219,
            "wind_gust": 17.07,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691341200,
            "temp": 104.13,
            "feels_like": 106.16,
            "pressure": 1011,
            "humidity": 25,
            "dew_point": 61.2,
            "uvi": 9.36,
            "clouds": 16,
            "visibility": 10000,
            "wind_speed": 11.86,
            "wind_deg": 225,
            "wind_gust": 16.13,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691344800,
            "temp": 107.46,
            "feels_like": 107.98,
            "pressure": 1010,
            "humidity": 20,
            "dew_point": 58.86,
            "uvi": 10.82,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 10.87,
            "wind_deg": 230,
            "wind_gust": 14.58,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1691348400,
            "temp": 109.65,
            "feels_like": 109.78,
            "pressure": 1010,
            "humidity": 18,
            "dew_point": 57.6,
            "uvi": 10.92,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 9.71,
            "wind_deg": 227,
            "wind_gust": 13.65,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        }
    ],
    "daily": [
        {
            "dt": 1691172000,
            "sunrise": 1691149374,
            "sunset": 1691198618,
            "moonrise": 1691207040,
            "moonset": 1691161020,
            "moon_phase": 0.62,
            "summary": "Expect a day of partly cloudy with clear spells",
            "temp": {
                "day": 103.15,
                "min": 86.85,
                "max": 106.39,
                "night": 100.54,
                "eve": 106.39,
                "morn": 86.85
            },
            "feels_like": {
                "day": 109.56,
                "night": 99.46,
                "eve": 107.78,
                "morn": 90.86
            },
            "pressure": 1013,
            "humidity": 32,
            "dew_point": 67.57,
            "wind_speed": 12.73,
            "wind_deg": 191,
            "wind_gust": 25.28,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 13,
            "pop": 0,
            "uvi": 10.28
        },
        {
            "dt": 1691258400,
            "sunrise": 1691235816,
            "sunset": 1691284966,
            "moonrise": 1691295240,
            "moonset": 1691251500,
            "moon_phase": 0.65,
            "summary": "The day will start with clear sky through the late morning hours, transitioning to partly cloudy",
            "temp": {
                "day": 100.56,
                "min": 89.01,
                "max": 108.9,
                "night": 101.53,
                "eve": 106.18,
                "morn": 89.01
            },
            "feels_like": {
                "day": 102.09,
                "night": 100.4,
                "eve": 106.05,
                "morn": 92.39
            },
            "pressure": 1012,
            "humidity": 28,
            "dew_point": 61.92,
            "wind_speed": 14.34,
            "wind_deg": 200,
            "wind_gust": 29.35,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 85,
            "pop": 0,
            "uvi": 7.2
        },
        {
            "dt": 1691344800,
            "sunrise": 1691322258,
            "sunset": 1691371313,
            "moonrise": 1691383500,
            "moonset": 1691341920,
            "moon_phase": 0.69,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
                "day": 107.46,
                "min": 89.06,
                "max": 113.14,
                "night": 97.34,
                "eve": 109.69,
                "morn": 90.12
            },
            "feels_like": {
                "day": 107.98,
                "night": 99.43,
                "eve": 109.04,
                "morn": 91.92
            },
            "pressure": 1010,
            "humidity": 20,
            "dew_point": 58.86,
            "wind_speed": 13.15,
            "wind_deg": 192,
            "wind_gust": 29.8,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 13,
            "pop": 0.24,
            "rain": 0.19,
            "uvi": 10.92
        },
        {
            "dt": 1691431200,
            "sunrise": 1691408700,
            "sunset": 1691457659,
            "moonrise": 0,
            "moonset": 1691432220,
            "moon_phase": 0.72,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
                "day": 99.61,
                "min": 86.31,
                "max": 105.42,
                "night": 93.25,
                "eve": 105.42,
                "morn": 86.31
            },
            "feels_like": {
                "day": 101.08,
                "night": 97.32,
                "eve": 109.15,
                "morn": 86.25
            },
            "pressure": 1014,
            "humidity": 29,
            "dew_point": 61.74,
            "wind_speed": 11.36,
            "wind_deg": 62,
            "wind_gust": 22.39,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 0,
            "pop": 1,
            "rain": 0.94,
            "uvi": 11.02
        },
        {
            "dt": 1691517600,
            "sunrise": 1691495142,
            "sunset": 1691544004,
            "moonrise": 1691471760,
            "moonset": 1691522520,
            "moon_phase": 0.75,
            "summary": "There will be rain until morning, then partly cloudy",
            "temp": {
                "day": 92.43,
                "min": 82.78,
                "max": 104.63,
                "night": 101.57,
                "eve": 104.63,
                "morn": 82.99
            },
            "feels_like": {
                "day": 94.46,
                "night": 98.69,
                "eve": 101.64,
                "morn": 85.69
            },
            "pressure": 1011,
            "humidity": 40,
            "dew_point": 64.29,
            "wind_speed": 15.3,
            "wind_deg": 182,
            "wind_gust": 29.35,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.84,
            "rain": 0.81,
            "uvi": 6.52
        },
        {
            "dt": 1691604000,
            "sunrise": 1691581584,
            "sunset": 1691630347,
            "moonrise": 1691560320,
            "moonset": 1691612760,
            "moon_phase": 0.79,
            "summary": "You can expect partly cloudy in the morning, with rain in the afternoon",
            "temp": {
                "day": 106.02,
                "min": 85.55,
                "max": 113.04,
                "night": 101.71,
                "eve": 107.06,
                "morn": 85.55
            },
            "feels_like": {
                "day": 106.48,
                "night": 100.67,
                "eve": 107.38,
                "morn": 90.59
            },
            "pressure": 1005,
            "humidity": 21,
            "dew_point": 57.78,
            "wind_speed": 19.77,
            "wind_deg": 211,
            "wind_gust": 38.52,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 47,
            "pop": 0.56,
            "rain": 0.81,
            "uvi": 7
        },
        {
            "dt": 1691690400,
            "sunrise": 1691668026,
            "sunset": 1691716690,
            "moonrise": 1691649120,
            "moonset": 1691702820,
            "moon_phase": 0.82,
            "summary": "Expect a day of partly cloudy with rain",
            "temp": {
                "day": 107.04,
                "min": 87.89,
                "max": 112.98,
                "night": 93.27,
                "eve": 112.26,
                "morn": 87.89
            },
            "feels_like": {
                "day": 108.82,
                "night": 94.57,
                "eve": 111.88,
                "morn": 93.18
            },
            "pressure": 1007,
            "humidity": 22,
            "dew_point": 59.95,
            "wind_speed": 17.94,
            "wind_deg": 202,
            "wind_gust": 34.92,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 13,
            "pop": 0.48,
            "uvi": 7
        },
        {
            "dt": 1691776800,
            "sunrise": 1691754468,
            "sunset": 1691803031,
            "moonrise": 1691738160,
            "moonset": 1691792700,
            "moon_phase": 0.86,
            "summary": "Expect a day of partly cloudy with clear spells",
            "temp": {
                "day": 107.15,
                "min": 88.21,
                "max": 112.46,
                "night": 104.5,
                "eve": 111.47,
                "morn": 88.21
            },
            "feels_like": {
                "day": 110.61,
                "night": 101.98,
                "eve": 109.92,
                "morn": 92.97
            },
            "pressure": 1010,
            "humidity": 24,
            "dew_point": 62.85,
            "wind_speed": 14.65,
            "wind_deg": 183,
            "wind_gust": 30.42,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 5,
            "pop": 0.2,
            "uvi": 7
        }
    ],
    "alerts": [
        {
            "sender_name": "NWS Dallas-Fort Worth (Dallas - Forth Worth)",
            "event": "Excessive Heat Warning",
            "start": 1691123400,
            "end": 1691283600,
            "description": "...EXCESSIVE HEAT WARNING NOW IN EFFECT UNTIL 8 PM CDT SATURDAY...\n* WHAT...Dangerously hot conditions with heat index values up to\n112 and temperatures over 105.\n* WHERE...Most of North and Central Texas.\n* WHEN...Until 8 PM CDT Saturday.\n* IMPACTS...Extreme heat and humidity will significantly\nincrease the potential for heat related illnesses,\nparticularly for those working or participating in outdoor\nactivities.",
            "tags": [
                "Other dangers"
            ]
        }
    ]
}

export { geoQueryDataMock, weatherDataMock };