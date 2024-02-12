import search from "../../../assets/plataforma/icons/icon-search.svg";
import ContainerBusca from "./ContainerBusca";
import { useForm } from "react-hook-form";

function InputPesquisa({
  paddingLeft,
  width,
  height,
  backgroundColor,
  placeholder,
  bgColor,
  register,
  displayIcon,
}) {
  const inputStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    paddingLeft: paddingLeft,
  };

  const styleBtn = {
    display: displayIcon
  };

  return (
    <ContainerBusca backgroundColor={bgColor}>
      <img style={styleBtn} src={search} alt="" />
      <input
      {...register}
        style={inputStyle}
        className="bg-none text-slate-800 border-none outline-none bg-slate-200"
        type="text"
        placeholder={placeholder}
      />
    </ContainerBusca>
  );
}

export default InputPesquisa;
