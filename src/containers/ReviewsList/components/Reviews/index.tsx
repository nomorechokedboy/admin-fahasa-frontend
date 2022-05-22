import { Pagination, Paper, Select, Table, TextInput } from '@mantine/core';
import { ChevronIcon } from '@mantine/core';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Review from '../Review';
import styles from './styles.module.scss';
import IReview from '@/types/review';

interface ReviewListProps {
  listReviews?: Array<IReview>;
  isValidating: boolean;
}

export default function Reviews({
  listReviews,
  isValidating,
}: ReviewListProps) {
  const [reviewLists, setReviewList] = useState(listReviews);
  const [activePage, setPage] = useState(1);
  const [arrange, setArrange] = useState<string | null>('all');
  const [selectedStars, setSelectedStars] = useState<string | null>('all');
  const typingTimeOut = useRef<any>();
  const ascending = (a: string, b: string) => a.localeCompare(b);
  const descending = (a: string, b: string) => b.localeCompare(a);
  useEffect(() => {
    setReviewList(listReviews);
  }, [listReviews]);
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      let search = event.target.value;
      let filter = listReviews!.filter((value: IReview) => {
        if (search === '') {
          return value;
        } else {
          return value.bookName
            .toLowerCase()
            .includes(search.toLowerCase().trim());
        }
      });
      setReviewList(filter);
    }, 600);
  };
  let filter = reviewLists!
    .filter((value) =>
      selectedStars === 'all' ? -1 : value.stars === Number(selectedStars!),
    )
    .sort((a, b) =>
      arrange === 'all'
        ? 0
        : arrange === 'descending'
        ? descending(a.id.toLowerCase(), b.id.toLowerCase())
        : ascending(a.id.toLowerCase(), b.id.toLowerCase()),
    );

  const updateDelete = (id: string) => {
    setReviewList(reviewLists?.filter((value) => value.id !== id));
  };
  return (
    <Paper shadow="xs" withBorder className={styles.mainBox}>
      <header className={styles.boxHeader}>
        <div className={styles.containerBoxHeader}>
          <TextInput
            placeholder="Search..."
            className={styles.searchBox}
            onChange={handleChangeSearch}
          />
          <div className={styles.containerSelectionBox}>
            <Select
              rightSection={<ChevronIcon />}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              rightSectionWidth={30}
              placeholder="All"
              className={styles.selectionBox}
              value={arrange}
              onChange={setArrange}
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
              onChange={setSelectedStars}
              value={selectedStars}
              data={[
                { value: 'all', label: 'Stars: All' },
                { value: '1', label: 'Stars: 1' },
                { value: '2', label: 'Stars: 2' },
                { value: '3', label: 'Stars: 3' },
                { value: '4', label: 'Stars: 4' },
                { value: '5', label: 'Stars: 5' },
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
              <th className={styles.actionColumn}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filter?.map((review: IReview, index) => (
              <tr key={index}>
                <Review
                  onDelete={updateDelete}
                  {...review}
                  isLoading={isValidating}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={styles.boxFooter}>
        <Pagination
          total={Math.ceil(filter.length / 10)}
          page={activePage}
          onChange={setPage}
        />
      </div>
    </Paper>
  );
}
