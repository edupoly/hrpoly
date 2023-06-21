// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const leavesApi = createApi({
  reducerPath: 'leavesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/leaves' }),
  endpoints: (builder) => ({
    getAllLeavesByEmpId:builder.query({
        query:(id)=>{
            return {
                url:`?empDetails.id=${id}`
            }
        }
    }),
    getAllLeaves:builder.query({
        query:(id)=>{
            return {
                url:``
            }
        }
    }),
    applyLeave: builder.mutation({
      query: (leave) => {
        return {
            url:'',
            method:'POST',
            body:{...leave}
        }
      },
    }),
    updateLeave: builder.mutation({
      query: (leave) => {
        return {
            url:`/${leave.id}`,
            method:'PUT',
            body:leave
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useApplyLeaveMutation,
  useGetAllLeavesByEmpIdQuery,
  useGetAllLeavesQuery,
  useUpdateLeaveMutation,
  useLazyGetAllLeavesQuery
} = leavesApi