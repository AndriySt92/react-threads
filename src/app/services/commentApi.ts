import { Comment } from "../types"
import { api } from "./api"

export const commentsApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<Comment, Partial<Comment>>({
      query: newComment => ({
        url: `/comments`,
        method: "POST",
        body: newComment,
      }),
    }),
    deleteComment: builder.mutation<void, string>({
      query: commentId => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
    }),
    updateComment: builder.mutation<Comment, { id: string; content: string }>({
      query: ({ id, content }) => ({
        url: `/comments/${id}`,
        method: "PATCH",
        body: content,
      }),
    }),
  }),
})

export const {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentsApi

export const {
  endpoints: { createComment, deleteComment, updateComment },
} = commentsApi
