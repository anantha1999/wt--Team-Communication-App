import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.page.html',
  styleUrls: ['./projectlist.page.scss'],
})
export class ProjectlistPage implements OnInit {
  projects = [
    {
      title: 'project1',
      creator: 'a',
      members: 'a,b,c,d'
    },
    {
      title: 'Project 2',
      creator: 'b',
      members: 'a,b,c'
    }
  ];

  pages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'View Projects',
      url: 'projectlist',
      icon: 'eye'
    },
    {
      title: 'Chat',
      url: 'chat',
      icon: 'chatbubbles'
    },
    {
      title: 'profile',
      url: 'profile',
      icon: 'man'
    },
    {
      title: 'Log Out',
      url: '',
      icon: 'log-out'
    }
  
  ];
  selectedpath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedpath = event.url;
    });
   }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 5000);
  }

  gototasklist(){
    this.router.navigate(['tasklist'])
  }

  ngOnInit() {
  }

}
