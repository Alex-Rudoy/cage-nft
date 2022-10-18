export default {};
// import { ValidatorFunction } from "@/src/typings/components/input";
// import { enUS } from "date-fns/locale";
// import React from "react";
// import DatePicker, { registerLocale } from "react-datepicker";
// import ICONS_ENUM from "../../constants/icons";
// import Input from "../Input/Input";
// import SvgIcon from "../SvgIcon";
// import styles from "./Datepicker.module.scss";

// registerLocale("en", enUS);

// export type Props = {
//   autoComplete?: string;
//   placeholder?: string;
//   floatingLabel?: string;
//   className?: string;
//   validator?: RegExp | ValidatorFunction;
//   height?: "md" | "lg";
//   width?: "sm" | "md" | "lg" | "full" | "content"; // 220px 328px 576px 100% content
//   errorMessage?: string;
//   value: Date;
//   minDate?: Date;
//   maxDate?: Date;
//   name: string;
//   id?: string;
//   disabled?: boolean;
//   onChange: (date: Date) => void;
//   onFocus?: (e: React.FocusEvent<any>) => void;
//   onBlur?: (e: React.FocusEvent<any>) => void;
// };

// const Datepicker: React.FC<Props> = ({ value, disabled, minDate, maxDate, id, name, onChange, ...rest }) => {
//   const router = useRouter();

//   return (
//     <DatePicker
//       dateFormat="dd.MM.yyyy"
//       selected={value}
//       onChange={onChange}
//       locale={router.locale}
//       minDate={minDate || new Date(2021, 5)}
//       maxDate={maxDate || new Date()}
//       placeholderText={new Date().toLocaleDateString(router.locale)}
//       showDisabledMonthNavigation
//       calendarStartDay={1}
//       isClearable={true}
//       id={id || name}
//       name={name}
//       customInput={
//         <Input
//           type="text"
//           value=""
//           disabled={disabled}
//           id={id}
//           name={name}
//           rightBlock={!value ? <SvgIcon src={ICONS_ENUM.calendar} /> : ""}
//           {...rest}
//           className={styles.input}
//         />
//       }
//       disabled={disabled}
//     />
//   );
// };

// export default Datepicker;
