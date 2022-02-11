import apiClient from './apiClient';
import { Restaurant } from '../../modules/restaurants';

// 전체 조회
export const getRestaurants = () => apiClient.get('/api/v1/restaurants');

// 추가
export const registerRestaurant = (restaurant: Restaurant) =>
  apiClient.post('api/v1/restaurants', restaurant);
