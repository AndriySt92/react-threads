import { Button, Textarea } from "@nextui-org/react"
import { IoMdCreate } from "react-icons/io"
import {
  useCreatePostMutation,
  useLazyGetAllPostsQuery,
} from "../app/services/postApi"
import { useForm, Controller } from "react-hook-form"
import { Error } from "."

export const CreatePost = () => {
  const [createPost] = useCreatePostMutation()
  const [triggerGetAllPosts] = useLazyGetAllPostsQuery()
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createPost({ content: data.post }).unwrap()
      setValue("post", "")
      await triggerGetAllPosts().unwrap()
    } catch (error) {
      console.log("err", error)
    }
  })
  const error = errors?.post?.message as string

  return (
    <form className="flex-grow" onSubmit={onSubmit}>
      <Controller
        name="post"
        control={control}
        defaultValue=""
        rules={{
          required: "Required field",
        }}
        render={({ field }) => (
          <Textarea
            {...field}
            labelPlacement="outside"
            placeholder="Text your post"
            className="mb-5"
          />
        )}
      />
      {errors && <Error error={error} />}
      <Button
        color="success"
        className="flex-end"
        endContent={<IoMdCreate />}
        type="submit"
      >
        Add post
      </Button>
    </form>
  )
}