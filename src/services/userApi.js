// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
  endpoints: (builder) => ({
    authenticateUser:builder.query({
        query:(user)=>{
            return {
                url:`?username=${user.username}&password=${user.password}`
            }
        }
    }),
    registerUser: builder.mutation({
      query: (user) => {
        return {
            url:'',
            method:'POST',
            body:{...user}
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation,useLazyAuthenticateUserQuery} = userApi