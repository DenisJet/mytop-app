import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Button, Input, Textarea } from '..';
import { Rating } from '../Rating/Rating';
import CloseIcon from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface';
import { API } from '@/helpers/api';
import axios from 'axios';
import { useState } from 'react';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.create, { ...formData, productId });
      if (data) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }
    } catch (e) {
      if (e instanceof Error) {
        setIsError(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Введите заголовок' } })}
          placeholder='Имя'
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Введите заголовок' } })}
          placeholder='Заголовок отзыва'
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'Заполните описание' } })}
          placeholder='Текст отзыва'
          className={styles.description}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label='Текст отзыва'
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button appearance='primary' tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>
            Отправить
          </Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)} role='alert'>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо Ваш отзыв будет опубликован после проверки.</div>
          <button className={styles.close} onClick={() => setIsSuccess(false)} aria-label='Закрыть оповещение'>
            <CloseIcon />
          </button>
        </div>
      )}
      {isError && (
        <div className={cn(styles.error, styles.panel)} role='alert'>
          Что-то пошло не так на сервере, попробуйте обновить страницу.
          <button className={styles.close} onClick={() => setIsError(undefined)} aria-label='Закрыть оповещение'>
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  );
};
