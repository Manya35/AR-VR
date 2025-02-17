import axios from 'axios';

export const runNotebook = async () => {
  try {
    const response = await axios.post("http://localhost:5000/run-notebook");
    return response.data;
  } catch (error) {
    console.error("Error running notebook:", error);
  }
};
