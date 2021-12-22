import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Config } from '../../constants/App';
import Person from '../../types/IPerson';

export const personSlice = createApi({
	reducerPath: 'persons',
	tagTypes: ['Persons'],
	baseQuery: fetchBaseQuery({
		baseUrl: Config.API_URI,
	}),
	endpoints: (builder) => ({
		getPersons: builder.query<Person[], number | void>({
			query() {
				return '/persons';
			},
			providesTags: ['Persons'],
		}),
    addPerson: builder.mutation<Person, Partial<Person>>({
			query(body) {
				return {
          url: '/persons',
          method: 'POST',
          body,
        }
			},
			invalidatesTags: ['Persons'],
		}),
		updatePerson: builder.mutation({
			query: (body) => {
				return ({
					url: `/persons/${body.id}`,
					method: 'PUT',
					body,
				})
			},
			invalidatesTags: ['Persons'],
		}),
		deletePerson: builder.mutation<{ success: Boolean; id: number }, number>({
			query(id) {
				return {
          url: `/persons/${id}`,
				  method: 'DELETE',
        }
			},
			invalidatesTags: ['Persons'],
		}),
	}),
});

export const {
	useGetPersonsQuery,
	useAddPersonMutation,
	useUpdatePersonMutation,
	useDeletePersonMutation,
} = personSlice;