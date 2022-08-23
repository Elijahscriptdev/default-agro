import { Field } from "formik";
import { FormControlProps } from "./FormControl.types";

const Input = (props: FormControlProps) => {
    const { placeholder, type, name, label, ...rest } = props;
    return (
        <Field name={name}>
            {(props: any) => {
                const { field, form } = props

                const error = form.errors[name]
                const isInvalid = form.errors[name] && form.touched[name]
                return (
                    <div>
                        <p className="font-semibold block tracking-wide text-gray-500 text-sm  mb-3 text-sm">{label}</p>
                        <input
                            {...field}
                            placeholder={placeholder}
                            type={type}
                            {...rest}
                            className={`bg-gray-100 rounded-md h-14 px-4 w-full border ${isInvalid && 'border-red-500'} border-transparent focus:outline-none focus:ring-1 ${isInvalid ? 'focus:ring-red-500' : 'focus:ring-green-500'} focus:border-transparent`}
                        />
                        <div className="p-1 text-red-500 my-2 text-sm">
                            {isInvalid && error}
                        </div>
                    </div>
                )
            }}
        </Field>

    )
}

export default Input;

