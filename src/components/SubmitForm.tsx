import { FunctionComponent } from "react";

interface CreateProductProps {
  setValue: (value: string) => void;
  value: string;
  name: string;
}

const SubmitForm: FunctionComponent<CreateProductProps> = (props) => {
  return (
    <div>
      <input
        type={
          props.name === "Description"
            ? "textarea"
            : props.name === "Email"
            ? "email"
            : "text"
        }
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="form-input  w-full           
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
                overflow-hidden
                "
        style={
          props.name === "Description"
            ? {
                height: "40px",
                overflowY: "scroll",
              }
            : undefined
        }
        placeholder={props.name}
      />
    </div>
  );
};

export default SubmitForm;
