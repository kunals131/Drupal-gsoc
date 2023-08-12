import axios from 'axios';

export const drupal = axios.create({
  baseURL: 'http://localhost/drupal/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials : true
});

