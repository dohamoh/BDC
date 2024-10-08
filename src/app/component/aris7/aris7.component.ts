import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-aris7',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './aris7.component.html',
  styleUrl: './aris7.component.scss',
})
export class ARIS7Component {
  active = 1;
  types: any[] = [
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle1_tqbqaz.png',
      title: 'READING & WRITING',
      descs: ['Reading and writing readiness include a combination of phonemic awareness, an understanding of basic print concepts, an ability to identify and to form the letters of the alphabet, as well as an understanding that letters represent sounds in language and what those sounds are. The ARIS Reading & Writing Readiness lessons cover the range of concepts which students must learn as preparation to read and write language.','The Reading & Writing Readiness content category has eight subcategories.'],

    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle2_kvwssh.png',
      title: 'APPROACHES TO LEARNING',
      descs:['The Approaches to Learning content category in ARIS includes lessons that provide a foundation for students to succeed in the rest of the program. In short, these lessons help a student learn how to learn.','Developing children’s abilities in the Approaches to Learning category prepares them for future learning, and many of the Approaches to Learning lessons are prerequisites for the lessons in the other 6 categories. As such, this is often the first place you will start with children who are new to the program.','The Approaches to Learning content category has seven sub-categories.'],
    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle3_v75mhe.png',
      title: 'LANGUAGE',
      descs:['The lessons in the ARIS Language content category are designed to provide students with basic language concepts and skills to help them communicate with the world around them, by naming and describing objects, making needs and desires known, and interacting or conversing with others.','The Language content category has four sub-categories.']

    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle4_spfsls.png',
      title: 'MOTOR SKILLS',
      descs:['The ARIS Motor Skills content category contains lessons that will support the development of the fine and gross motor skills which most typically developing children acquire prior to entering kindergarten.','Motor skills enable children to participate in social and play-related activities such as coloring, crafts, and puzzles; sports and recreation; self-help activities like feeding, grooming, and dressing themselves; actions of independent living like opening containers, drawers, and doors; and academic skills like writing.','The Motor Skills content category has three sub-categories.'],
    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle5_w764mf.png',
      title: 'MATHEMATICS',
      descs: [
        'Before kids are ready to do formal mathematics they must understand concepts like visual discrimination of shapes, recognition of patterns, number recognition, counting, and sets. Math skills provide a foundation for critical life skills such as measuring, comparison, time, and money.',
        'Language Builder ARIS Math Readiness lessons cover these pre-mathematics concepts as well as some basic addition and subtraction.',
        'The Math Readiness content category includes six subcategories.',
      ],
    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476674/circle6_swaadk.png',
      title: 'SOCIAL EMOTIONAL',
      descs: [
        'The Collaborative for Academic Social Emotional Learning has identified five cognitive, affective, and behavioral competencies: self-awareness, self-management, social awareness, relationship skills, responsible decision making (“Casel - Casel,” n.d.).',
        'ARIS Social-Emotional content category provides concrete lessons to address these five behavioral competencies.',
      ],
    },
    {
      img: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476673/circle_kihlvb.png',
      imgHover: 'https://res.cloudinary.com/do363ozu9/image/upload/v1723476674/circle7_m2u7b4.png',
      title: 'FUNCTIONAL ROUTINES',
      descs: [
        'Functional Routines are the regular events of daily living which require specific and organized behaviors to complete. Language Builder ARIS Functional Routines lessons address major functional routines required for children to accomplish self-care, as well as participation in typical family and classroom practices.',
        'The Functional Routines content category has three subcategories.',
      ],
    },
  ];
  paragraphs: any[] = [
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
    {
      title: 'Lorem ipsum dolor sit.',
      image: 'https://res.cloudinary.com/dwfz5qvgr/image/upload/v1680866482/samples/animals/reindeer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatibus quia ut asperiores libero quae qui! Optio officia illo nihil dolores omnis. Voluptates, culpa nihil beatae officia molestias eligendi rem unde? Nisi aliquam maxime officia sed cupiditate nihil temporibus magni veritatis ullam optio quas fugiat quae explicabo autem, exercitationem facere asperiores consequatur voluptas, consectetur blanditiis repellendus! Nemo modi rerum, repellat accusamus unde adipisci rem tempora temporibus molestias commodi ratione. Ducimus unde reiciendis saepe praesentium, officiis dolorem accusamus fugit laborum optio!',
    },
  ];
  onHover(index: any) {
    this.active = index;
  }
}
