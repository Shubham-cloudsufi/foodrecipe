import React from 'react'
import Skeleton from './Skeleton'
import './RecipeTile.css'

const SkeletonArticle = () => {
  return (
    <div className='recipe-style'>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
        <div className='recipe__box'>
            <Skeleton type="recipe_img" />
            <Skeleton type="recipe_label" />
            <Skeleton type="recipe_dishtype" />
            <Skeleton type="recipe_url" />
            <Skeleton type="arrow" />
        </div>
    </div>
  )
}

export default SkeletonArticle