import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  selectField1: Yup.string().required('Select Field 1 is required'),
  selectField2: Yup.string()
    .required('Select Field 2 is required')
    .test('customValidation', 'Custom validation error message', function (value) {
      const selectField1Value = this.parent.selectField1; // Get the value of selectField1

      // Perform your custom validation logic based on selectField1Value and selectField2 value
      // Return true if the validation passes, or an error message if it fails
      if (selectField1Value === 'someValue' && value === 'anotherValue') {
        return false; // Validation fails
      }

      return true; // Validation passes
    }),
});

// Usage example:
const data = {
  selectField1: 'someValue',
  selectField2: 'anotherValue',
};

validationSchema.validate(data)
  .then(() => {
    // Validation succeeded
  })
  .catch((error) => {
    // Validation failed, handle the error
    console.log(error.errors);
  });
