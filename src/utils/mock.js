import axios from './axios'
import MockAdapter from "axios-mock-adapter";

const instance = new MockAdapter(axios, { delayResponse: 0});

export default instance 