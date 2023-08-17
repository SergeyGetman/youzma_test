import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  autor: yup.string().required('Autor is required'),
  year: yup.number().required('Year is required').integer('Year must be an integer'),
  rating: yup
    .mixed()
    .required('Rating is required')
    .test('is-number-0-5', 'Rating must be a number between 0 and 5', (value) => {
      if (typeof value === 'string') {
        return value >= 0 && value <= 5;
      }
      return false;
    }),
});
