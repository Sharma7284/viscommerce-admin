import axiosInstance from "./axiosInstance";

export const fetchSubscribedUser = async () => {
  try {
    const response = await axiosInstance.post(`/users`);
    return response.data?.data?.map((m) => ({
      ...m,
      isChecked: false,
      emailId: null,
    }));
  } catch (error) {
    console.error(`Error fetching data:`, error);
    throw error;
  }
};
export const fetchEmailTemplates = async () => {
  try {
    const response = await axiosInstance.post(`/get-email-templates`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data:`, error);
    throw error;
  }
};
export const fetchUsersCount = async () => {
  try {
    const response = await axiosInstance.get(`/count-users`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data:`, error);
    throw error;
  }
};
export const postSendMail = async (payload) => {
  try {
    const response = await axiosInstance.post(`/send-email`, payload);
    return response.data;
  } catch (error) {
    console.error(`Error post data:`, error);
    throw error;
  }
};
export const postEmailTemplates = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/upload-email-templates`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error(`Error post data:`, error);
    throw error;
  }
};
