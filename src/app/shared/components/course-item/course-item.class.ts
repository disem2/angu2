import { CourseInterface } from '../../interfaces';

export class CourseItemClass implements CourseInterface {
  public title: string;
  public id: string;
  public duration: number;
  public topRated: Boolean;
  public addingDate: Date;
  public description: string;

  constructor(params: CourseInterface) {
    this.title = params.title;
    this.id = params.id;
    this.duration = params.duration;
    this.topRated = params.topRated;
    this.addingDate = params.addingDate;
    this.description = params.description;
  }
}
