import { FormControlProps } from "./FormControl.types";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";



function FormControl(props: FormControlProps) {
    const { control } = props;
    switch (control) {
        case 'input': return <Input {...props} />;
        case 'textarea': return <TextArea {...props} />;
        case 'select': return <Select {...props} />
        default: return null
    }

}

export default FormControl;