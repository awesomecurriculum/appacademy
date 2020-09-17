import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null };
  }

  componentDidMount() {
    // const success = res => console.log(res);
    navigator.geolocation.getCurrentPosition(success => {
      let { latitude, longitude } = success.coords;
      this.pollWeather(latitude, longitude);
      //   this.setState({ weather: data });
    });
  }

  pollWeather = async (latitude, longitude) => {
    console.log('running');
    const apiKey = 'e84401b7c2407b91528884472f9e9ca0';
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(
      latitude
    )}&lon=${Math.floor(longitude)}&appid=${apiKey}`;
    console.log(api);

    let res = await fetch(api);
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    console.log(res);
    let data = await res.json();
    console.log('data:', data);

    // let { weather } = await data;
    // this.setState({ weather });
    this.setState({ weather: data });
  };

  render() {
    const name = this.state.weather;
    console.log(name);

    return (
      <>
        <h1 className='weather'>Weather</h1>
        <div className='weatherDiv'>
          <div>Name Placeholder</div>
          <div>Temperature Placeholder</div>
        </div>
      </>
    );
  }
}

export default Weather;
