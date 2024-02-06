import { Component, OnInit } from '@angular/core';


type TReviewRating = 1 | 2 | 3 | 4 | 5;

interface IExpediteReview {
  title: string;

  text: string;

  author: string;

  position: string;

  img: string;

  rating: TReviewRating;
}

@Component({
  selector: 'tev-expedite-reviews',
  templateUrl: './expedite-reviews.component.html',
  styleUrls: ['./expedite-reviews.component.scss']
})
export class ExpediteReviewsComponent implements OnInit {

  reviews: IExpediteReview[] = [
    {
      title: '',
      text: 'We were very pleased with the service that we received from TenantEvaluation. The staff exemplified true professionalism and exceeded all of our expectations. They were informative and stood on top of our HOA application status. We were provided a daily update as to what documents/signatures were missing until the application was completed. This office understands the value of good service and it shows. Such a commitment to great service is to be commended!',
      author: 'S. Padilla',
      position: 'Applicant',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocJ9yIQTbkrYprJqu49xcdl0bL_KupBpHH2haIRTJNMa1Q',
      rating: 5
    },
    {
      title: '',
      text: 'After several extremely bad experiences with HOA application processes, this was absolutely phenomenal! The application process was easy to navigate, and their customer service staff is unbelievable!',
      author: 'Claudia Mendez',
      position: 'Applicant',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjUwYRMJ2RfiUmvBf3nN6yx5Es4S4P8UVte0w_6j30ySyA',
      rating: 5
    },
    {
      title: '',
      text: 'Easy process! my clients needed help with the application, and it was great that I was able to log in with my account and help them to fill it out the application.',
      author: 'Melanie Prada',
      position: 'Realtor',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocKLRoQRxFgekhn_JRAPEZGxxpMfQ8Xw5KBxlU4Z17R7',
      rating: 5
    },
    {
      title: '',
      text: 'The application process for my customer was very comprehensive and they were very fast with the turn around to get the package to the condo association.',
      author: 'Caren Nealon',
      position: 'Realtor',
      img: 'https://lh3.googleusercontent.com/a-/ALV-UjXEZUo6BWPvIosPsQnstZwaAIXT4n2mfcCf7_YU-WzwZMk',
      rating: 5
    },
    {
      title: '',
      text: 'They were very professional and prompt. They were very courteous and gave me their full attention. It was easy to upload the documents. I oved that they gave step by step instructions on how to complete the application. They earn their 5 star ratings.',
      author: 'Decarla Boggs',
      position: 'Applicant',
      img: 'https://lh3.googleusercontent.com/a/ACg8ocIVT5gxW_p2oKkMkwxo-SZuy7vsjh-qKLcysTic0ZkG',
      rating: 5
    }
  ];

  currentReviewIndex: number = 0;

  currentReview: IExpediteReview = this.reviews[this.currentReviewIndex];

  nextReview() {
    this.currentReviewIndex++;
    if (this.currentReviewIndex >= this.reviews.length) {
      this.currentReviewIndex = 0;
    }

    this.currentReview = this.reviews[this.currentReviewIndex];
  }

  prevReview() {
    this.currentReviewIndex--;
    if (this.currentReviewIndex < 0) {
      this.currentReviewIndex = this.reviews.length - 1;
    }

    this.currentReview = this.reviews[this.currentReviewIndex];
  }

  getStars() {
    return new Array(this.currentReview.rating);
  }

  ngOnInit() {
    console.log('ExpediteReviewsComponent');
  }

}
