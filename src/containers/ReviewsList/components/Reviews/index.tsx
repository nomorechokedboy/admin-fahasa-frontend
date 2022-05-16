import {
  Group,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TextInput,
} from '@mantine/core';
import { ChevronIcon } from '@mantine/core';
import { useState } from 'react';
import Review from '../Review';
import styles from './styles.module.scss';
import IReview from '@/types/review';
import ReviewList from '../..';

interface ReviewListProps {
  listReviews?: Array<IReview>;
  isValidating: boolean;
}

export default function Reviews({
  listReviews,
  isValidating,
}: ReviewListProps) {
  const [activePage, setPage] = useState(1);

  return (
    <Paper shadow="xs" withBorder className={styles.mainBox}>
      <header className={styles.boxHeader}>
        <div className={styles.containerBoxHeader}>
          <TextInput placeholder="Search..." className={styles.searchBox} />
          <div className={styles.containerSelectionBox}>
            <Select
              rightSection={<ChevronIcon />}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              rightSectionWidth={30}
              placeholder="All"
              className={styles.selectionBox}
              data={[
                { value: 'all', label: 'All' },
                { value: 'ascending', label: 'Ascending' },
                { value: 'descending', label: 'Descending' },
              ]}
            />
            <Select
              rightSection={<ChevronIcon />}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              rightSectionWidth={30}
              placeholder="All"
              className={styles.selectionBox}
              data={[
                { value: 'all', label: 'All' },
                { value: 'ascending', label: 'Ascending' },
                { value: 'descending', label: 'Descending' },
              ]}
            />
          </div>
        </div>
      </header>

      <div className={styles.boxBodyContainer}>
        <Table highlightOnHover verticalSpacing="lg">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Product</th>
              <th>Name</th>
              <th className={styles.forResponsive}>Rating</th>
              <th className={styles.forResponsive}>Date</th>
              <th style={{ textAlign: 'end' }} className={styles.actionColumn}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listReviews?.map((review: IReview, index) => (
              <tr key={index}>
                <Review {...review} isLoading={isValidating} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={styles.boxFooter}>
        <Pagination total={3} page={activePage} onChange={setPage} />
      </div>
    </Paper>
  );
}
