import {FC} from "react";


type TextFieldProps = {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    value?: string;
    name: string;
}

const TextField: FC<TextFieldProps> = ({placeholder, name, onChange, label, value}) => {
    return <div className="w-full">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                type="text" id={name}
                className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
            />
    </div>
}

export default TextField