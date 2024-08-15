import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment-timezone';
const getBaseUrl = () => 'https://esthemate.com'; 
export const postRequest = async (endpoint, body) => {
  try {
    const connection=  await checkInternetConnection();
   if(!connection){
   return;
   }
    const response = await fetch(`${getBaseUrl()}/${endpoint}`, {
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
      // Handle error res
      throw new Error(jsonResponse.message || 'Request failed');
    }
  } catch (error) {
    alert(error?.message)
    console.error('Error:', error);
    throw new Error(error);
  }
};
export const getRequest = async (endpoint) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${getBaseUrl()}/${endpoint}`, {
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
    const isConnected = await checkInternetConnection();
    if (!isConnected) {
      return;
    }
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${getBaseUrl()}/${endpoint}`, {
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
    const timeZone = moment.tz.guess();
    const isConnected = await checkInternetConnection();
    if (!isConnected) {
      return;
    }
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${getBaseUrl()}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Timezone': timeZone
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
    alert(error)
    throw new Error(error);
  }
};
const checkInternetConnection = async () => {
  try {
    const response = await fetch('https://google.com', {
      method: 'HEAD',
      cache: 'no-cache'
    });
    console.log("response", response.ok);
    return response.ok;
  } catch (error) {
    alert("Please check your internet connection")
  }
};