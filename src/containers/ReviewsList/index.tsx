import { getAllReviews } from '@/api/review';
import CTA from '@/components/CTA';
import { setError } from '@/redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import ReviewPageHeader from './components/Header';
import Reviews from './components/Reviews';
import * as FiIcons from 'react-icons/fi';
import styles from './styles.module.scss';
import { FaCommentSlash } from 'react-icons/fa';

export default function ReviewList() {
  const { data, error, isValidating, mutate } = useSWR(
    '/review',
    getAllReviews,
    {
      shouldRetryOnError: false,
    },
  );

  console.log(data);
  const handleReloadClick = () => {
    mutate();
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setError(error?.message));
  }, [dispatch, error]);

  return (
    <ReviewPageHeader>
      {error ? (
        <CTA
          icon={<FiIcons.FiMeh />}
          message={error.message}
          label="Reload the page"
          onClick={handleReloadClick}
        />
      ) : !error && !data ? (
        <Reviews listReviews={[...Array(10)]} isValidating={true} />
      ) : !data?.length ? (
        <CTA
          icon={<FaCommentSlash />}
          message="There is no current comments :<"
        />
      ) : (
        <Reviews listReviews={data} isValidating={isValidating} />
      )}
    </ReviewPageHeader>
  );
}
