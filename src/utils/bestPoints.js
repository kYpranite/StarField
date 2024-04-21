export const calculateCirclePoints = (center, radius, numPoints) => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const lat = center.lat + (radius * Math.sin(angle)) / 111111;
    const long =
      center.lng +
      (radius * Math.cos(angle)) /
        (111111 * Math.cos((center.lat * Math.PI) / 180));
    points.push({ lat, long });
  }
  return points;
};

export const calculateBest = async (center, radius, pts) => {
  const points = calculateCirclePoints(center, radius, pts);
  let max = 0;
  let location = null;
  let values = {
    coords: [],
    times: [],
    temperature: [],
    humidity: [],
    cloud: [],
    wind: [],
  };

  for (let point of points) {
    await fetch("http://localhost:5000/api/weathers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(point),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        values["times"].push(...data["times"]);
        values["temperature"].push(...data["temperature"]);
        values["humidity"].push(...data["humidity"]);
        values["cloud"].push(...data["cloud"]);
        values["wind"].push(...data["wind"]);
        values["coords"].push(point);
      });
  }

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
      console.log(data);
      let i = 0;
      for (let percent of data.predictions) {
        if (percent > max) {
          max = percent;
          location = values.coords[i];
        }
        i++;
      }
    });
  console.log(location);
  console.log(max);
};
