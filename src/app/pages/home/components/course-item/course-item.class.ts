import { CourseInterface } from '../../../../shared/interfaces'

export class CourseItem implements CourseInterface {
  constructor(
    public name: string,
    public id: string,
    public duration: number,
    public addingDate: Date,
    public description: string) {
  }
}
