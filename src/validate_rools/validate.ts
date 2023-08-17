import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  autor: yup.string().required('Autor is required'),
  year: yup.number().required('Year is required').integer('Year must be an integer'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be at least 0')
    .max(5, 'Rating must be at most 5'),
});
