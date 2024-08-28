import axios from "axios";

// دالة مساعدة لمعالجة الاستجابات والأخطاء
const handleResponse = async (promise) => {
  try {
    const response = await promise;
    return response.data;
  } catch (error) {
    // التعامل مع الأخطاء من الاستجابة
    throw new Error(
      error.response?.data?.message ||
        `Error in request: ${error.response?.status || error.message}`
    );
  }
};

// الحصول على جميع العادات
export const getAllHabits = () => {
  return handleResponse(axios.get("http://localhost:6000/api/habits"));
};

// الحصول على عادة واحدة محددة
export const getHabit = (id) => {
  return handleResponse(axios.get(`http://localhost:6000/api/habits/${id}`));
};

// إنشاء عادة جديدة
export const createHabit = (habit) => {
  return handleResponse(
    axios.post("http://localhost:6000/api/habits", habit, {
      headers: { "Content-Type": "application/json" },
    })
  );
};

// تحديث عادة
export const updateHabit = (id, habit) => {
  return handleResponse(
    axios.put(`http://localhost:6000/api/habits/${id}`, habit, {
      headers: { "Content-Type": "application/json" },
    })
  );
};

// حذف عادة
export const deleteHabit = (id) => {
  return handleResponse(axios.delete(`http://localhost:6000/api/habits/${id}`));
};
