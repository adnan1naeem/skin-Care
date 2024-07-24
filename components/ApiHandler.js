import AsyncStorage from "@react-native-async-storage/async-storage";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const postRequest = async (endpoint, body) => {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();

    if (response.ok) {
      // Handle successful response
      return jsonResponse;
    } else {
      // Handle error response
      throw new Error(jsonResponse.message || 'Request failed');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error);
  }
};
export const getRequest = async (endpoint) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const jsonResponse = await response.json();
    if (response.ok) {
      return jsonResponse;
    } else {
      throw new Error(jsonResponse.message || 'Request failed');
    }
  } catch (error) {

    console.error('Error:', error);
    throw new Error(error);
  }
};
export const putRequest = async (endpoint, body) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON?.stringify(body),
    });

    const jsonResponse = await response.json();
    if (response) {
      return jsonResponse;
    } else {
      throw new Error(jsonResponse.message || 'Request failed');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error);
  }
};
export const postRequestToken = async (endpoint, body) => {
  
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();

    if (response.ok) {
      // Handle successful response
      return jsonResponse;
    } else {
      // Handle error response
      throw new Error(jsonResponse.message || 'Request failed');
    }
  } catch (error) {
    console.error('Error:', error);
    throw new Error(error);
  }
};
