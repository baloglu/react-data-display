
# Meteorite Landings

This project uses Meteorite Landing api on Nasa to display the location of meteorite landings.



- [NASA](https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh) - Meteorite landings



## Visualise the data

How you display your data is up to you and there a lot of ways of displaying the data your api serves up.

For example, if you were displaying a heat-map for earthquake data, the user might choose to show only data for a certain location, and then they may choose to show only events between January and May. The interface would alter the map to match what the user had chosen.

In order to build more complicated UI's we can take advantage of pre-built 3rd party components. We have provided a selection of libraries that can be used to present your data.

- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2) A chart library. They have some lovely [demos](https://reactchartjs.github.io/react-chartjs-2/#/) with links to examples.
- [react-google-charts](https://www.npmjs.com/package/react-google-charts) A more complex chart library with a wider range of options.
- [nivo-rocks](https://nivo.rocks/components) A React chart library built by a co-creator of [State of JS](https://stateofjs.com/)
- [Mapbox](https://www.mapbox.com/) A professional maps service with a free tier to try out most features. Comes with a [React SDK](https://github.com/alex3165/react-mapbox-gl) for easy integration. (You may need to add `--force` to your npm install if the react versions conflict .)


  - **nb** React Leaflet v3 is incompatible with React v18. At the time of writing you'll need to install v4 which is still in beta. Use this install command `npm i react-leaflet@4.0.0-beta.0`

- [React Bootstrap](https://react-bootstrap.github.io/) React components based on the popular Bootstrap CSS framework.
- [MUI (formerly known as Material UI)](https://mui.com/core/) React components that use Google's Material design.

Don't feel confined to these suggestions. There are several other public api's / visualisation libraries out there for you to use. Spend a bit of time planning your app and researching what information is available in your api's.