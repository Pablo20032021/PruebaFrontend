const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const postUserData = async (formData: any) => {
  await delay(1000); 
  return { success: true }; 
};