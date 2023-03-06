import React from 'react'


function ReviewCard({data}) {
    let plants = Array(data.star_rating).fill("🔥")
    // 🔥
  return (
    // <div  className="card-details-review-card">
    //       <div className="card-details-review-score">{data.star_rating} {plants.join("")}</div>
    //       <div className="card-details-review-comment">
    //         {data.comment}
    //       </div>
    //       <div className="card-details-review-author">- {data.user.name} </div>
    //     </div>
    <div className="l-card-around">
    <main class="l-card">
	<section class="l-card__text">
		<p>
			{data.comment}
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img src="https://thumbs.dreamstime.com/b/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-107388687.jpg" alt="Naruto"/>
		</div>
		<div class="l-card__userInfo">
			<span>{data.user.name}</span>
			<span>{data.star_rating} {plants.join("")}</span>
		</div>
	</section>
</main>
</div>
  )
}

export default ReviewCard