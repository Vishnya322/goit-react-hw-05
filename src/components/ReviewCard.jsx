// import css from './ReviewCard.module.css';

// export default function ReviewCard({ review }) {
//   return (
//     <li>
//       <h3>Author: {review.author}</h3>
//       <p>Created: {new Date(review.created_at).toLocaleString()}</p>
//       <p>{review.content}</p>
//       <a
//         href={review.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={css.link}
//       ></a>
//     </li>
//   );
// }
import css from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <div dangerouslySetInnerHTML={{ __html: review.content }}></div>
      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      ></a>
    </li>
  );
}
