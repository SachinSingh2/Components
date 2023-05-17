import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
  ...rest
}) {
  const classes = classnames(
    rest.className,
    "flex items-center px-3  py-1.5 border",
    {

    "border-blue-500 bg-blue-500": primary,
    "border-gray-900 bg-gray-900": secondary,
    "border-green-500 bg-green-500": success,
    "border-yellow-400 bg-yellow-400": warning,
    "border-red-500 bg-red-500": danger,
    "rounded-full": rounded,
    "text-white":
      !outline && (primary || secondary || success || warning || danger),
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
  }
  );

  return (
    <>
      <button {...rest} className={classes}>{children}</button>
    </>
  );
}

Button.propTypes = {
    CheckVariationValue: ({
    primary,
    secondary,
    warning,
    danger,
    success,
  }) => {
    let count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    console.log(count);

    if (count > 1) {
      return new Error ("You can only use only one style")
    }
  },
};

export default Button;
