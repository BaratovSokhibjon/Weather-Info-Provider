# Weather information for your location
This is a small project website that uses three different APIs to get the info we need. Basically we are getting the IP of the device that is requesting using the [Ipify API](https://www.ipify.org/) and using that IP we are getting the position (latitude and longitude) of the device using [Ipstack API](https://ipstack.com/). Finally using the position that we got, we get hold of the weather information using the [OpenWeather API](https://openweathermap.org/). **I haven't spent much time on style, this project was for practicing API usage.**

Note: This project is not user dependent: Everytime somebody uses this project to get the weather info, the API servers will consider as me (Baratov Sokhibjon) tried to access the info.

## Installation
1. Clone the repository: [https://github.com/BaratovSokhibjon/Weather-Info-Provider](https://github.com/BaratovSokhibjon/Weather-Info-Provider)
2. Install Node JS and npm:
  - Make sure you are at the correct directory
  - Install the latest version of Node from [Node install page](https://nodejs.org/)
  - If you follow the default installation settings, it should install npm too
  - run ``` node -v ``` to check if you installed node properly

3. Install dependencies:
   Note: You should have Node JS installed before running these commands
``` npm install ```

## Usage
To run the project, use the following command in your terminal:
1. Run the server file: ``` node index.js ``` 
2. Go to [http://localhost:3000/](http://localhost:3000/) on your browser

## Expected output:
![Screenshot - image of weather info in Incheon](/Screenshots/Screenshot.png)

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.
