import CommentColtonSmith from "./comment-colton-smith";
import CommentIreneRoberts from "./comment-irene-roberts";
import CommentAnneWallace from "./comment-anne-wallace";

function Comments() {
    return (
        <div className='flex flex-col gap-4 xl:flex-row xl:gap-6 xl:h-[280px]'>

            {/* Comment Colton Smith*/}
            <CommentColtonSmith />

            {/* Comment Irene Roberts */}
            <CommentIreneRoberts />

            {/* Comment Anne Wallace */}
            <CommentAnneWallace />

        </div>
    );
}

export default Comments;