import React, {Component} from 'react'

export class NewsItem extends Component {
    render() {
   let {title, description, imageUrl, newsUrl} = this.props;
   

    return(
    <div className='max-w-[440px] md:w-[300px] pr-4 xl:w-[440px]'>
    <div
  className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!" data-te-ripple-init data-te-ripple-color="light">
    <img
      className="rounded-t-lg"
      src={imageUrl?imageUrl:'https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?s=612x612&w=0&k=20&c=QqNEXgbPj31_dIabFdYxu61_H0XJCKc5S_2LO7Z_TeU='}
      alt="" />
  </a>
  <div className="p-6">
    <h5
      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      {title}
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    {description}
    </p>
    <a rel='noreferrer' target="_blank" href={newsUrl}>
    <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-black text-white hover:bg-black/80 transition-all text-sm">
  Know More
</button>
    </a>
  </div>
</div>
    </div>
  )
}

}

export default NewsItem