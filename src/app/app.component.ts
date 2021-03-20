import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [
    {
      imgUrl:
        'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
      title: 'one',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex corrupti laborum sint tenetur? Dolor quidem aperiam itaque. Aspernatur veritatis et ipsam quidem voluptas iusto at ab est laudantium ipsa?',
    },
    {
      imgUrl:
        'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      title: 'two',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex corrupti laborum sint tenetur? Dolor quidem aperiam itaque. Aspernatur veritatis et ipsam quidem voluptas iusto at ab est laudantium ipsa?',
    },
    {
      imgUrl: 'https://static.toiimg.com/photo/72975551.cms',
      title: 'three',
      body:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ex corrupti laborum sint tenetur? Dolor quidem aperiam itaque. Aspernatur veritatis et ipsam quidem voluptas iusto at ab est laudantium ipsa?',
    },
  ];

}
