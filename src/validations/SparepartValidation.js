const SparepartValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Name is required";
  }

  if (!values.brand || values.brand === "") {
    errors.brand = "Brand is required";
  }

  if (!values.price || values.price === "") {
    errors.price = "Price is required";
  }

  if (!values.size || values.size === "") {
    errors.size = "Size is required";
  }

  return errors;
};

export default SparepartValidation;
