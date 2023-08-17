import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Grid, Button, Box } from '@mui/material';
import { validationSchema } from '../validate_rools/validate';
import { FormStyle } from '../Index.style';
import { ButtonElement } from './button/ButtonElement';
import { CustomTextEnum } from '../enam';
import { useDispatch } from 'react-redux';
import { addFromForm } from '../store/globalSlice';
import { toast, ToastContainer } from 'react-toastify';

export const Forms = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const notify = () => toast(CustomTextEnum.textMessage);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      autor: '',
      year: '' || null || undefined,
      rating: '' || null || undefined,
    },
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (data: any) => {
    if (data) {
      //@ts-ignore
      dispatch(addFromForm(data));
      reset();
      setShowModal(false);
    }
  };

  return showModal ? (
    <FormStyle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="autor"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Autor"
                  error={!!errors.autor}
                  helperText={errors.autor?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Year"
                  type="number"
                  error={!!errors.year}
                  helperText={errors.year?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Rating"
                  type="number"
                  error={!!errors.rating}
                  helperText={errors.rating?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box sx={{ margin: '300px auto' }}>
          <Button type="submit" variant="contained" onClick={notify}>
            {CustomTextEnum.Submit}
          </Button>
        </Box>
      </form>
    </FormStyle>
  ) : (
    <ToastContainer />
  );
};

export default Forms;
