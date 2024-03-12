import ReviewsItem from './reviews-item';
import { Reviews } from '../types/types';

type ReviewsListProps = {
  reviews:Reviews;
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} reviewItem={review}/>
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
