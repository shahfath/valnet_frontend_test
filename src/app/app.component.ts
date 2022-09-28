import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [
    {
      id: 1,
      name: 'Project 1',
      tasks: [
        {
          id: 1,
          name: 'Task 1',
          status: 'active',
          description: 'Task 1 description',
          children: [
            {
              id: 3,
              name: 'Task 1.1',
              description: 'Task 1.1 description',
              status: 'in-progress',
            },
          ],
        },
        {
          id: 2,
          name: 'Task 2',
          description: 'Task 2 description',
          status: 'completed',
          children: [],
        },
      ],
    },
  ];
}
