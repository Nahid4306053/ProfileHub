/* eslint-disable react/prop-types */
export default function TextFiled({label,placeholder,type,...rest}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-lg">{label}</span>
      </label>
      <input {...rest} type={type} placeholder={placeholder} className="input rounded-none  input-bordered" required />
    </div>
  );
}
