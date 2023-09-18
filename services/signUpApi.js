import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signUpApi = createApi({
  reducerPath: "signUpApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://192.168.1.5:5000/api/",
    baseUrl: "https://hira-yogi.onrender.com/api/",
    prepareHeaders: async (headers) => {
      const authToken = await AsyncStorage.getItem("authToken");
      if (authToken) {
        headers.set('Authorization', `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerAppUser: builder.mutation({
      query: (user) => {
        return {
          url: "appUser/register",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginAppUser: builder.mutation({
      query: (user) => {
        return {
          url: "appUser/login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getAppUser: builder.query({
      query: () => {
        return {
          url: "appUser/getAppUser",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getAllCourse: builder.query({
      query: () => {
        return {
          url: "appUser/getAllCourse",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getAppointmentSlot: builder.query({
      query: ({date, country}) => {
        return {
          url: `appUser/getAppointmentSlote`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          params: { date, country },
        };
      },
    }),
    bookAppointment: builder.mutation({
      query: (user) => {
        const {sloteId,...data}=user;
        return {
          url: `appUser/bookAppointment/${sloteId}`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getBanner: builder.query({
      query: () => {
        return {
          url: "appUser/getAllBanner",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    
    getCategory: builder.query({
      query: () => {
        return {
          url: "appUser/getAllCategory",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getCourseById: builder.query({
      query: (id) => {
        return {
          url: `appUser/getCourse/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getAppointmentBanner: builder.query({
      query: () => {
        return {
          url: "appUser/getAllAppointmentBanner",
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    
  
  }),
});

export const {
useRegisterAppUserMutation,
useLoginAppUserMutation,
useGetAppUserQuery,
useGetAllCourseQuery,
useGetAppointmentSlotQuery,
useBookAppointmentMutation,
useGetBannerQuery,
useGetCategoryQuery,
useGetCourseByIdQuery,
useGetAppointmentBannerQuery
} = signUpApi;
