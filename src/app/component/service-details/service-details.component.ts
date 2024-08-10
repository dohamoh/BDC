import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent {
  paragraphs: any[] = [
    { title: 'Lorem ipsum dolor sit.', img: '../../../assets/abouusimg.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', img: '../../../assets/abouusimg.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', img: '../../../assets/abouusimg.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
    { title: 'Lorem ipsum dolor sit.', img: '../../../assets/abouusimg.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!' },
  ];
}
