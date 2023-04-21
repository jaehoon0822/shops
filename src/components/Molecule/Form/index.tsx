import { FormProvider, Mode, Resolver, useForm } from 'react-hook-form'
import tw from 'twin.macro'

interface FormProps {
  children: JSX.Element[] | JSX.Element
  mode: Exclude<Mode, 'onTouched' | 'all'>
  resolver: Resolver
  onSubmit: (data: any) => void
  defaultValue?: { [x: string]: any }
}

const Form = ({
  children,
  mode,
  resolver,
  onSubmit,
  defaultValue,
}: FormProps) => {
  const method = useForm({
    reValidateMode: mode,
    resolver,
    defaultValues: defaultValue,
  })
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} css={tw`w-full h-full`}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
