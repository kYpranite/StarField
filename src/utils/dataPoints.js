export const grabChartData = async (lat, long) => {
  let values = {
    times: [],
    temperature: [],
    humidity: [],
    cloud: [],
    wind: [],
    prediction: [],
  };
  await fetch("http://localhost:5000/api/weathers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lat: lat, long: long }),
  })
    .then((response) => response.json())
    .then((data) => {
      values["times"].push(...data["times"]);
      values["temperature"].push(...data["temperature"]);
      values["humidity"].push(...data["humidity"]);
      values["cloud"].push(...data["cloud"]);
      values["wind"].push(...data["wind"]);
    });
  await fetch("http://localhost:5000/api/predicts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      temperature: values["temperature"],
      humidity: values["humidity"],
      cloud: values["cloud"],
      wind: values["wind"],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      for (let x of data.predictions) {
        values["prediction"].push(x);
      }
    });
  let formattedData = {};
  for (let i = 0; i < values["times"].length; i++) {
    let date = values["times"][i].split("T")[0];
    if (!formattedData[date]) formattedData[date] = [];
    formattedData[date].push({
      time: values["times"][i].split("T")[1],
      cloud: values["cloud"][i],
      humidity: values["humidity"][i],
      windSpeed: values["wind"][i],
      visibility: values["prediction"][i] < 0 ? 0 : values["prediction"][i],
    });
  }
  return formattedData;
};

// const dummyData = {
//   "02-20-24": [
//     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
//     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 5 },
//     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 45 },
//     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 21 },
//     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
//     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
//   ],
//   "02-21-24": [
//     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
//     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 20 },
//     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 40 },
//     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 30 },
//     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 20 },
//     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
//   ],
//   "02-22-24": [
//     { time: "20:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 2 },
//     { time: "22:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 25 },
//     { time: "00:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 30 },
//     { time: "02:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 35 },
//     { time: "04:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 10 },
//     { time: "06:00", cloud: 50, humidity: 20, windSpeed: 10, visibility: 0 },
//   ],
// };
