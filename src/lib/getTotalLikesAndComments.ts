import {CommentStructure} from "../App.types";

const getTotalLikesAndComments = (
    comments: CommentStructure[],
): {likes: number; comments: number} => {
    return comments.reduce(
        (totals, {likes, children}) => {
            totals.likes += likes;
            totals.comments += 1;

            if (children) {
                const childTotals = getTotalLikesAndComments(children);
                totals.likes += childTotals.likes;
                totals.comments += childTotals.comments;
            }

            return totals;
        },
        {likes: 0, comments: 0},
    );
};

export default getTotalLikesAndComments;
