// @flow

import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const get = async (url: string, transformer?: (data: any) => any): Promise<*> => {
  try {
    const response: {
      data: *,
      status: number,
    } = await axios.get(url);
    if (response.status === 200) {
      if (transformer) return transformer(response.data);
      return response.data;
    }
    throw `Error while loading data. Code: ${response.status}`;
  } catch (error) {
    if (error.response) {
      throw `Bad response: ${error.response.code} - ${error.response.data}`;
    } else if (error.request) {
      throw `No response was received from ${url}`;
    } else {
      throw `Something happened in setting up the request that triggered an Error. Message: ${
        error.message
      }`;
    }
  }
};
