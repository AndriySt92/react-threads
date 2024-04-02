import { useForm } from "react-hook-form"
import { Button, Link } from "@nextui-org/react"
import { useRegisterMutation } from "../app/services/userApi"
import { useState } from "react"
import { Input, Error } from "./index"
import { hasErrorField } from "../utils/hasErrorField"

type Register = {
  email: string
  name: string
  password: string
}

type RegisterProps = {
  setSelected: (value: string) => void
}

export const Register: React.FC<RegisterProps> = ({ setSelected }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  })

  const [register, { isLoading }] = useRegisterMutation()
  const [error, setError] = useState("")

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      setSelected("login")
    } catch (err) {
      if (hasErrorField(err)) {
        setError(err.data.error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        label="Name"
        type="string"
        required="Field is required!"
      />
      <Input
        control={control}
        name="email"
        label="Email"
        type="email"
        required="Field is required!"
      />
      <Input
        control={control}
        name="password"
        label="Password"
        type="password"
        required="Field is required!"
      />
      <Error error={error} />
      <p className="text-center text-small">
        Do you have an account?{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("sign-in")}
        >
          Sign in
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Register
        </Button>
      </div>
    </form>
  )
}
