import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice';
import displayedCountryReducer from '../redux/slices/displayCountrySlide'

const store = configureStore({
    reducer:{
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    },
});

export {store};