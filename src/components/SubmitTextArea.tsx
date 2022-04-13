import { FunctionComponent } from "react";

interface CreateProductProps {
  setValue: (value: string) => void;
  value: string;
  name: string;
}

const SubmitTextArea: FunctionComponent<CreateProductProps> = (props) => {
  return (
    <div>
      <textarea
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        rows={3}
        className="w-full           
                px-3
                py-2
                text-sm
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                shadow-2xl
                rounded
                placeholder-opacity-50
                tracking-wide
                overflow-y-auto
                resize-none"
        placeholder={props.name}
      />
    </div>
  );
};

export default SubmitTextArea;
