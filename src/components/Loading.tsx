import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IInitialState } from "../types";

const Loading: FunctionComponent = (props) => {
  const loading = useSelector(
    (state: IInitialState) => state.reducer.isLoading
  );

  loading && <>Loading...</>;
  return <>{props.children}</>;
};

export default Loading;
